### Task 4. Context consumer & advanced state

**Context consumer: modify the Footer component in `task_4/dashboard/src/Footer/Footer.jsx`:**

- Without converting the component into a class, subscribe the Footer component to context changes
- When a user exists and is logged in, display a new paragraph containing a link with the text: "Contact us"

**Modify the test suite in `Footer.spec.js`:**

- Refactor the tests to work correctly with the updated Footer component
- Add a test to verify that the "Contact us" link is not displayed when the user is logged out in the context
- Add a test to verify that the "Contact us" link is displayed when the user is logged in within the context

**Advanced state: Modify the App container in `App.jsx`:**

Update the state of the App component to include two properties:

- `notifications`: Holds the values from `notificationsList`
- `courses`: Holds the values from `coursesList`
- Create a method `markNotificationAsRead`:
  - It accepts an `id` (number) as a parameter
  - Logs the string: "Notification {id} has been marked as read" to the console
  - Removes the notification with the given id from the notifications list within the state

Pass the new method as a prop to the Notifications component.

Pass the list of notifications to the Notifications component using the state.

**Modify the Notifications container in `Notifications.jsx`:**

- Replace the `shouldComponentUpdate` method by converting the component to a `PureComponent`. This will enable automatic comparison of props and state
- Replace the existing `markAsRead` method with the new `markNotificationAsRead` method received as a prop

**Modify the test suite in `App.spec.js`:**

- Add a test to verify that:
  - Clicking on a notification item removes it from the notification list
  - Logs the expected string with the corresponding notification ID to the console

**Modify the test suite in `Notifications.spec.js`:**

- Refactor the tests to match the updated structure of the Notifications component

**Checkpoint:**

Test your application to ensure the following functionality:

- When logged in:
  - A new paragraph with a "Contact us" link should appear in the Footer
- When viewing the notification panel:
  - Clicking on any notification item should remove it and log the corresponding string to the console

**Requirements:**

- By clicking on any notification item, you should be able to remove it from the notification list and log the appropriate string with the corresponding notification ID to the console
- The `markNotificationAsRead` method should handle both the removal and the logging
- A valid email address and 8+ character password are required to activate the submit button
- A logged in user should see a logout link in the Header component and a Contact us link in the Footer component
- No console errors should be raised
- No linting errors

<img src="./readme_screenshot.gif">