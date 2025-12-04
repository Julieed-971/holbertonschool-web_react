# <p align="center">React Hooks</p>

# Description

This project focuses on modernizing React applications by transitioning from class components to functional components with hooks. You'll learn to use various React hooks (useState, useContext, useEffect), create custom hooks, implement component optimization techniques, and understand the reducer pattern as preparation for Redux.

## Learning Objectives

At the end of this project, you are expected to be able to `explain to anyone`, **without the help of Google**:

- Understanding the transition from class to functional components and maintain same functionality while modernizing code
- Learning different React hooks (useState, useContext, useEffect…)
- Understanding component optimization
- Understanding and build custom React hooks
- Developing testing strategies for hooks
- Understanding reducer pattern before Redux

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Import React only in the `main.jsx` file, and avoid importing it in individual component files
- All your files should end with a new line
- A `README.md` file, at the root of the project's folder and each task's folder, is mandatory
- Install Jest globally: `npm install -g jest`

## Mandatory Tasks

<details close><summary>

### Task 0. Convert Header Component

</summary>

From now on, you'll be using modern React with functional components and hooks, instead of ES6 classes and React lifecycle methods.

Re-use the codebase from the `react_state` project for the previous task and let's begin modernizing the React code.

**Instructions:**

- Transform the Header.jsx class component into a functional component
- Implement context consumption using the appropriate hook (useContext)
- Ensure all existing functionalities are preserved

**Requirements:**

- You must use the appropriate hook for context consumption
- The exact same JSX structure should be maintained
- Handle the context values properly with no errors or warnings
- Once the user is logged in, a welcome message and a logout link should be displayed
- The logout link must work as expected
- Ensure that there are no console errors or warnings
- The code should have no lint errors

</details>

<details close><summary>

### Task 1. Update Footer Component

</summary>

Update the `Footer.jsx` component to use the appropriate React hook to enable context consumption properly.

**Requirements:**

- You must use the appropriate hook for context consumption
- The exact same JSX structure should be maintained
- Handle the context values properly with no errors or warnings
- Once the user is logged in, a welcome message and a logout link should be displayed
- The logout link must function as expected (e.g., logging out the user)
- Ensure there are no console errors or warnings
- The code should have no lint errors

</details>

<details close><summary>

### Task 2. Convert Login component

</summary>

Copy the content of `task_0` into a new folder called `task_1`, and apply the following changes:

Instructions:

  - Convert the Login class component to a functional component.

Initialize state using React hooks:

  - Create a state variable `enableSubmit` and its setter function `setEnableSubmit` with an initial value of false.
  - Create a state variable `formData` and its setter function `setFormData` with an initial value of `{ email: '', password: '' }`.

Update the class methods `handleChangeEmail` and `handleChangePassword` to functions:

  - Extract the email and password from the event target.
  - Use `setFormData` to update the `formData` state, keeping the existing email and password.
  - Update the `enableSubmit` state based on email and password validation rules, and the password length.

Update the class method `handleLoginSubmit` to a function:

  - Always prevent the default behavior of the form submission.
  - Call the login prop method with the current email and password.

Requirements:

  - Keep the same structure of the component and update the state and methods.
  - Preserve the existing validation logic for email, password, and the submit button enabling/disabling.
  - Keep the `WithLogging` HOC wrapper class usage as it is.
  - Ensure that there are no console errors or warnings.
  - The code should have no lint errors.

</details>

<details close><summary>

### Task 3. Update the NotificationItem component

</summary>

Memoization has been part of React's optimization tools since the introduction of PureComponent in 2016 and has evolved to support functional components.

In this task and the one that follows, you'll transform the notification system from a class-based implementation to modern functional components while maintaining performance optimizations.

**Instructions:**

- Convert the `NotificationItem` component from class syntax to function syntax
  - Consider replacing the functionality of PureComponent with React's memo for memoization
- Maintain existing prop structures as they are
- Preserve current rendering behavior:
  - Ensure the component only re-renders when notification items update
- Maintain existing click handlers by keeping the notification "mark as read" functionality intact

**Hint:** When converting class components to functional components, you'll need to update your tests accordingly

**Requirements:**

- Maintain performance characteristics of the original implementation
- All existing tests should PASS
- Ensure there are no console errors or warnings
- The code should have no lint errors

</details>

<details close><summary>

### Task 4. Update the Notifications component

</summary>

In this task, you'll continue working on updating the notification system by modifying the `Notifications.jsx` file.

**Instructions:**

- Apply the same steps from the previous task to update the `Notifications.jsx` component from a class-based to a functional component
  - Use React.memo for memoization to prevent unnecessary re-renders
- Ensure that the component triggers a re-render only if the comparison inside memo returns false
- All functionalities created previously within the `Notifications` and `NotificationItem` components should continue to work as expected

**Hint:** When converting class components to functional components, you'll need to update your tests accordingly

**Requirements:**

- Your Notifications system should trigger a re-render only if the comparison in memo returns false
- Ensure all previously implemented functionalities within both the `Notifications` and `NotificationItem` components remain functional
- All existing tests must pass
- Ensure there are no console errors or warnings
- The code should have no lint errors

</details>

<details close><summary>

### Task 5. Modernizing the Parent

</summary>

In this task, you'll continue modernizing the project components by updating the `App.jsx` file

**Instructions:**

Apply the same class-to-function component conversion pattern, focusing on state management in functional components.

**Migrate the state management from class-based to functional components by:**

- Converting the class state object into individual hooks using the appropriate React hooks:
  - Initialize a state variable `displayDrawer` and its setter function `setDisplayDrawer` with an initial value of `true`
  - Initialize a state variable `user` and its setter function `setUser` with an initial value of the `context user object`
  - Initialize a state variable `notifications` and its setter function `setNotifications` with an initial value of the `notificationsList array`
  - Update the rest of the code to reflect the changes mentioned above
- Remove the `handleKeydown` function and its associated lifecycle methods
- Update the handler functions (`logIn`, `logOut`, and `markNotificationAsRead`) to follow the functional component patterns:
  - Ensure all functionality remains identical to the previous implementation
  - Follow React's immutability principles for state updates

**Tip:**

- Memoize callback functions to maintain reference stability and prevent unnecessary re-renders

**Tests:**

- Test the functionality of `handleDisplayDrawer` and `handleHideDrawer`
- Test user state mutations in logIn function (verify email, password, and isLoggedIn are updated)
- Test user state mutations in logOut function (verify isLoggedIn is set to false, email and password are cleared)

**Requirements:**

- Ensure all the application's features work as expected and function correctly
- All unit tests must be updated/refactored to reliably test the transition from class-based to functional components
- Ensure there are no console errors or warnings
- The code should have no lint errors

<img src="readme_screenshot_1.gif">

</details>

<details close><summary>

### Task 6. Side Effect

</summary>

In this task, you'll modify the App component to fetch data dynamically instead of relying on hardcoded data. You'll learn how to implement data fetching as a side effect in React functional components while maintaining the existing component behavior.

**Required packages:**

```bash
npm i axios
npm i jest-mock-axios
```

**Instructions:**

**Create JSON Files:**
- Add two JSON files in your project's `public` folder:
  - `notifications.json`: Contains the notifications array with the same structure as the current `notificationsList`
  - `courses.json`: Contains the courses array with the same structure as the current `coursesList`

**Remove Hardcoded Data:**
- Remove the hardcoded notificationsList and coursesList arrays from the component

**State Management for Data:**
- Initialize a state variable courses and its setter function setCourses using the appropriate React hook with an initial value of an empty array

**Implement Data Fetching:**
- Use the appropriate React hook to fetch data dynamically:
  - `Notifications`: Fetch notifications data when the component initially renders
  - `Courses`: Fetch courses data whenever the user's state changes (responding to authentication changes)
- Ensure proper cleanup of any side effects (if applicable)

**Fetching Logic:**
- Use `Axios` to fetch data from the `notifications.json` and `courses.json` files
- Maintain the special handling of the latest notification using `getLatestNotification()`

**Error Handling:**
- Use try/catch blocks to handle potential errors during data fetching
- Log errors to the console in development mode

**Unit Tests:**

Verify Data Fetching Logic:
- Use the `jest-mock-axios` package to simulate API responses for the HTTP requests
- Add axios to the `moduleNameMapper` to map it to `jest-mock-axios`:

```json
"jest": {
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^axios$": "jest-mock-axios",
    ...
  }
}
```

**Test Cases:**
- Verify that notifications data is successfully retrieved when the App component loads initially
- Verify that courses data is successfully retrieved whenever the user's state changes
- Ensure all current features of the component work properly after implementing dynamic data fetching

**Tips:**

- **Efficiency:** API calls consume system resources and time. Implement them efficiently by tying them to appropriate state changes and avoiding unnecessary requests
- **Trigger-Driven Fetching:** Think carefully about the relationship between when data needs to be fetched and what triggers that need:
  - Notifications are needed immediately when the app loads
  - Courses data depends on user authentication changes
- **Consistency:** Keep the data structure consistent with the original implementation to minimize changes to existing logic

**Requirements:**

- Properly update or refactor failed unit tests related to notifications and courses data
- Ensure no console errors or warnings
- Ensure no lint errors
- All application features must continue to work as expected

</details>

<details close><summary>

### Task 7. Custom React hook

</summary>

In this task, you'll refactor the existing Login component to improve code reusability and maintainability by leveraging a custom React hook for managing form state and submission logic.

**Craft the React custom hook:**
- Create a new file: `src/hooks/useLogin.jsx`
- The hook should accept a callback function `onLogin` as a parameter and use React hooks to manage the form state
- Move the current validation and submission logic from the `Login` component into the custom hook:
  - Validate the `email` input format
  - Ensure the `password` has a minimum length of 8 characters
  - Handle form submission logic
- Return an object from the hook that includes:
  - State values: `email`, `password`, and `enableSubmit` (boolean)
  - Handlers for managing input changes and form submission

**Refactor the Login Component:**
- Remove all state and handler logic from the Login component
- Use the useLogin hook to manage form inputs and submission
- Pass the login prop as the onLogin callback to the custom hook
- Replace the existing logic with the returned values and handlers from useLogin to:
  - Validate the inputs
  - Enable or disable the submit button based on validation results
  - Handle form submission

**Requirements:**

- Users must only be able to log in when:
  - They provide a valid email address
  - The password has a minimum length of 8 characters
- The submit button (labeled "OK") must:
  - Start in a disabled state
  - Become enabled when the email and password pass validation
- All existing tests must pass as the functionality remains unchanged
- Ensure the refactored component has:
  - No console errors or warnings
  - No lint errors

</details>

<details close><summary>

### Task 8. State Symphony

</summary>

In this task, You will refactor your React School Dashboard application to replace the Context API with the `useReducer` hook for scalable and centralized state management.

**Create a new file `App/appReducer.js`:**

**Actions Object (`APP_ACTIONS`)**

Define and export an object containing these action types:
- `LOGIN`: Handles user authentication
- `LOGOUT`: Manages user logout
- `TOGGLE_DRAWER`: Controls notification visibility
- `MARK_NOTIFICATION_READ`: Updates the notification status
- `SET_NOTIFICATIONS`: Updates the notifications list
- `SET_COURSES`: Updates the courses list

**Initial State (`initialState`)**

Export an object initialized as:
- `displayDrawer`: true
- `user`: Object with `email`, `password`, and `isLoggedIn` properties (same structure as task 5)
- `notifications`: An empty array
- `courses`: An empty array

**Reducer Function (`appReducer`)**

Export a function with two parameters: `state` (defaulting to `initialState`) and `action`.
- Use a switch statement (or alternatives like `Map` or `function chains`) to handle the defined action types
- Ensure each case updates the state immutably
- Return the current state for unrecognized actions

**Now that you've created your appReducer, let's implement it in your components:**

**Update the App Component:**
- Replace `useState` calls with a single `useReducer` hook initialized with `appReducer` and `initialState`
- Dispatch actions for:
  - Toggling the notification drawer
  - Logging in or out users
  - Marking notifications as read
  - Fetching and updating `notifications` and `courses` data
- Remove the Context Provider wrapping and imports
- Pass state and dispatch functions as props to child components

**Update the `Header` Component:**
- Replace Context-related logic with props
- Maintain all functionality, including displaying the welcome message and handling the logout feature

**Update the `Footer` Component:**
- Replace Context-related logic with props
- Preserve the conditional rendering behavior

**Adapt Data Fetching Logic:**
- Use `dispatch` to update state with fetched notifications and courses
- Refactor data fetching to maintain side-effect isolation and immutability

**Tests:**

Refactor your existing test suite to validate the transition from Context API to useReducer:
- **Update component tests** (`Header.spec.js`, `Footer.spec.js`) to pass props instead of using Context
- **Update `App.spec.js`** to test reducer behavior through UI interactions (no separate reducer test file needed)
- Check that state changes correctly when users interact with the `UI` (login & logout, toggle drawer, mark notifications as read)
- Verify that dispatched actions update the component state and `UI` correctly

**Requirements:**

- Ensure state updates are immutable
- All React Dashboard application features must function as expected
- State changes should align with UI interactions, as demonstrated in task 5's GIF
- All unit tests must pass
- No console errors, warnings, or lint issues

</details>

# Author

Julie Dedieu: [Julieed-971](https://github.com/Julieed-971/)
