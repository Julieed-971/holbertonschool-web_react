### Task 9. Synchronize Login with Redux Store

In this task, you will update the `Login` component to dispatch the login action from the Redux store when the form is submitted.

Your task is to integrate Redux dispatch logic into the `useLogin` hook's `onLogin` callback function

To achieve this, make sure that:

- Use the appropriate hook to dispatch the login action from the `auth` slice in the Redux store
- Pass the `login action` dispatch function to the useLogin hook as the onLogin callback
- The Login component must continue to use the useLogin hook for form state management and validation
- Remember that the submit button should start in a disabled state and only become enabled when both the email and the password are valid
- Remove the `login prop` from the Login component and rely on the Redux store for dispatching the login action
