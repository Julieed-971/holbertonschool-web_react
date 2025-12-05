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