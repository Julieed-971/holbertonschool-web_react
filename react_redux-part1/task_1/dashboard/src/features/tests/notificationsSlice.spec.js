import notificationsReducer, { markNotificationAsRead, showDrawer, hideDrawer, fetchNotifications } from "../../features/notifications/notificationsSlice"
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

const mockNotificationsResponse = {
    notifications: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  };

const markedAsReadNotificationsResponse = {
    notifications: [
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
};

test("Returns the correct initial state by default", () => {
    const state = notificationsReducer(undefined, { type: 'unknown' });
    expect(state.notifications).toStrictEqual([]);
    expect(state.displayDrawer).toBe(true);
})

test("fetches notifications data correctly", async () => {
    const initialState = {
      notifications: [],
      displayDrawer: true
    }
    const action = {
      type: fetchNotifications.fulfilled.type,
      payload: mockNotificationsResponse.notifications
    }

    const newState = notificationsReducer(initialState, action);
    expect(newState.notifications).toStrictEqual(mockNotificationsResponse.notifications);
})

test("Removes a notification correctly when the markNotificationAsRead action is dispatched", () => {
    const previousState = { 
      notifications: mockNotificationsResponse.notifications, 
      displayDrawer: true
    }
    const action = markNotificationAsRead(1);
    const newState = notificationsReducer(previousState, action);

    expect(newState.notifications).toStrictEqual(markedAsReadNotificationsResponse.notifications);
})

test("Toggles the displayDrawer state correctly when the hideDrawer action is dispatched", () => {
    const previousState = {
      notifications: [],
      displayDrawer: false
    };

    const action = showDrawer();
    const hiddenState = notificationsReducer(previousState, action);

    expect(hiddenState.displayDrawer).toBe(true);
})

test("Toggles the displayDrawer state correctly when the hideDrawer action is dispatched", () => {
    const previousState = {
      notifications: [],
      displayDrawer: true
    };

    const action = hideDrawer();
    const hiddenState = notificationsReducer(previousState, action);

    expect(hiddenState.displayDrawer).toBe(false);
})

test('should handle fetchNotifications.fulfilled when API request is successful', async () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
    ];

    const dispatch = jest.fn();
    const getState = jest.fn();

    const promise = fetchNotifications()(dispatch, getState, null);

    mockAxios.mockResponse({
      data: { notifications }
    });

    await promise;

    expect(dispatch).toHaveBeenCalledTimes(2);

    const fulfilledAction = dispatch.mock.calls[1][0];

    expect(fulfilledAction).toEqual(
      expect.objectContaining({
        type: fetchNotifications.fulfilled.type,
        payload: expect.any(Array),
      })
    );

    expect(fulfilledAction.payload).toHaveLength(3);
    expect(fulfilledAction.payload).not.toEqual([]);
})