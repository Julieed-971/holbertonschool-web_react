## Task 10. Synchronize Notifications with Redux Store

In this task, you will update the `Notifications` component to use Redux for managing its state and actions.

The component will no longer rely on props for state and event handlers but will instead use the Redux `store` to manage the `displayDrawer` state, `notifications` list, and the actions `markNotificationAsRead`, `showDrawer`, and `hideDrawer`

To achieve this, make sure that:

- Remove the props from the Notifications component
- Use the appropriate hook to access the `notifications` and `displayDrawer` state from the Redux store
- Move the handlers `handleDisplayDrawer`, `handleHideDrawer`, and `markNotificationAsRead` from the App to Notifications component
- Replace the prop-based event of these handlers with Redux action dispatchers, and use the appropriate hook to dispatch the corresponding actions
- Ensure that the `markNotificationAsRead` action is dispatched with the correct notification id