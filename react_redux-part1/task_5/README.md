### Task 8. Synchronize CourseList with Redux Store

In this task, you will update the `CourseList` component to use Redux for managing the `courses` state.

The updated CourseList will no longer receive courses as a `prop` but will instead interact with the Redux store to retrieve the list of courses

To achieve this, make sure that:

- Use the appropriate hook to retrieve the courses state from the courses slice in the Redux store
- Remove the courses prop from the CourseList component and rely on the Redux store for state management
- Ensure the CourseList component continues to display the `UI`
- Ensure the CourseList component remains wrapped in the `WithLogging` HOC