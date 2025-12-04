### Task 3. Log Out implementation

**Modify the Header component in `task_3/dashboard/src/Header/Header.jsx`:**

- Use the `ContextType` API to allow the Header component to inherit the context
- Add a new section under the header that is only displayed when the `isLoggedIn` property in the user object within the context is `true`:
  - This section should display "Welcome email (logout)"
  - Add the `id` attribute `logoutSection` to this section
  - When clicking on the logout link, should call the `logOut` function from the context

At this point, your Holberton Dashboard React application should allow users to log in and log out successfully.

**Create the tests!**

**In `Header.spec.js`:**

- Ensure all current tests pass without errors
- When the Header component uses a default context value, verify that the `logoutSection` is not rendered
- When the Header component is provided with a user context where `isLoggedIn` is `true`, and `email` and `password` are set, verify that the `logoutSection` is rendered
- When the Header component is provided with a user context where `isLoggedIn` is `true`, and `email` and `password` are set, link the `logOut` function to a spy. Verify that clicking on the "logout" link calls the spy

**In `App.spec.js`:**

- Refactor the previous tests to rely on the application's state instead of props
- Refactor the tests to verify that the user interface updates correctly whenever the state changes

**Requirements:**

- Your React application should fully support both login and logout functionality
- The logout functionality must be triggered from the Header component
- After refactoring, ensure that any unused state and props are cleaned up