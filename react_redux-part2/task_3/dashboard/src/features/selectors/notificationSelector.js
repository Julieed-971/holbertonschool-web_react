import { createSelector } from '@reduxjs/toolkit'

// Retrieve the notifications array from the Redux state
const selectedNotifications = state => state.notifications.notifications;

// Use createSelector to create and export a memoized selector getFilteredNotifications that filters notifications based on the filter argument:
//     The selector should accept two inputs:
//         The notifications array retrieved from the Redux state
//         A filter argument (e.g., urgent, default, or all)
const getFilteredNotifications = createSelector(
    [selectedNotifications, (state, filter) => filter],
    //     Filter logic:
    //         If the filter is all, return all notifications (no type check needed already handled within the fetchNotifications Thunk)
    (notifications, filter) => {
        if (filter === "all") {
            return notifications;
        } else {
            //         For urgent/ default filters, return notifications matching the specified type
            return (notifications.filter(notification => notification.type === filter));
        }
    }
)

export { getFilteredNotifications };