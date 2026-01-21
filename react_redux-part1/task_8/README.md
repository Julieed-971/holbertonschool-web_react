### Task 11. Redux is HERE!

In this task, you will update the `App` component to use Redux for managing its authentication state `isLoggedIn` and dispatching side effects (fetching notifications and courses)

The component will no longer rely on local state or a custom reducer (`appReducer`) but on Redux state instead

To achieve this, make sure that:

- Delete the `useReducer` hook and the `appReducer` logic (remove the appReducer file too)
- Remove all prop-based event handlers (`logIn`, `logOut`, `handleDisplayDrawer`, `handleHideDrawer`, `markNotificationAsRead`)
- Use the appropriate hook to access the `isLoggedIn` state from the `auth` slice
- Use side effect to dispatch:
  - `fetchNotifications` when the component mounts
  - `fetchCourses` only when the user is logged in
- Conditionally render the `Login` or `CourseList` components based on the isLoggedIn state
- remove the `appReducer` file, and its related unit tests file

Don't forget to wrap the App component with Redux `Provider` and pass the store

**Tests:**

Since Redux serves as a single source of truth for your application's state, you will need to write unit tests for each component in isolation

**Set Up Test Environment**

- Configure testing setup to include Redux store mocking and API request mocking
- Import necessary modules like render, screen, userEvent, configureStore, etc…

**`App`:**

- Create a mock store with `isLoggedIn` set to `false`, render App with the mock store and verify that the `Login` component is displayed
- Create a mock store with `isLoggedIn` set to `true`, render App with the mock store and verify that the `CourseList` component is displayed
- Mock the `fetchNotifications` API call, render App and check that the notification items are displayed on mount

**`Login`:**

- Render the `Login` component and verify that the login form is displayed with `email`, `password` fields, and `submit button`
- Simulate form submission with valid credentials and verify that `isLoggedIn` is set to `true`
- Simulate form submission with invalid credentials and verify that `isLoggedIn` remains `false`

**`Footer`:**

- Render the `Footer` component and verify that the `Copyright {current year} - Holberton School` text is displayed
- Create a mock store with `isLoggedIn` set to `true`, render the `Footer` component and verify that the "Contact us" link is displayed
- Create a mock store with `isLoggedIn` set to `false`, render the `Footer` and verify that the "Contact us" link is not displayed

**`Header`:**

- Create a mock store with `isLoggedIn` set to `true`, render the `Header` component, and verify that the `logout` link is displayed
- Create a mock store, dispatch the `login` action, render the `Header` component, and verify that a welcome message is displayed with the entered `email`
- Simulate a `logout` action and verify that `isLoggedIn` is set to `false`

**CourseList:**

- Mock the `fetchCourses` API call, render the `CourseList` and verify that the `courses` list is displayed
- Dispatch the `logout` action, render the CourseList` component and verify that the courses array is `reset`

**`Notifications`:**

- Mock the `fetchNotifications` API call, render the `Notifications` component and verify that the notification items are displayed
- Simulate `closing` the drawer and verify that the `displayDrawer` state is set to false
- Simulate `opening` the drawer and verify that the `displayDrawer` state is set to true
- Simulate `marking` a notification as read and verify that it is removed from the list

**`CourseListRow`:**

- Render the `CourseListRow` component as a `header` with one cell and verify that it spans two columns
- Render the `CourseListRow` component as a `header` with two cells and verify both are displayed
- Render the `CourseListRow` component as a `regular` row and verify both cells are displayed

**`NotificationItem`:**

- Render the `NotificationItem` component with `default` type and verify that it displays the notification text in `blue`
- Render the `NotificationItem` component with `urgent` type and verify that it displays the notification text in `red`

**`BodySection`:**

- Render the `BodySection` component with a title and children, and verify that both are displayed

**`BodySectionWithMarginBottom`:**

- Render the `BodySectionWithMarginBottom` component with a title and children, verify that both are displayed

**Requirement:**

- No console warnings or errors
- No lint errors in the code

<img src="./readme_screenshot/readme_screenshot.gif">