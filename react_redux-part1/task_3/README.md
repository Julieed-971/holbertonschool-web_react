### Task 6. Synchronize Header with Redux Store

In this task, you will update the `Header` component to use Redux for managing the authentication state

The updated Header will no longer receive `user` and `logOut` as props but will instead interact with the Redux store to determine the user's authentication status and handle logout functionality

To achieve this make sure that:

- You retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store, using the appropriate hook
- You dispatch the `logout` action when the user clicks the logout link, using the appropriate hook:
  - Define a `handleLogout` function that triggers the logout action
- Render conditionally the logout section based on the `isLoggedIn` state
- Replace the `logOut` prop with the `handleLogout` function in the logout link's onClick handler

**Note:**

From now on your app fail to render and some of your tests failed, YOU'LL FIX THIS LATER
