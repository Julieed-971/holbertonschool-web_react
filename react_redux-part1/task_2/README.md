### Task 4. Root Reducer

In this task, you will create a root reducer for a Redux application using the `combineReducers` function from Redux Toolkit.

The root reducer will combine multiple individual reducers (slices) into a single reducer that manages the overall state of the application

Use the `combineReducers` function to combine the following reducers into a single `rootReducer`

The `rootReducer` should structure the state object such that each slice of state is nested under its corresponding key:

- `auth`: Contains the state managed by authReducer
- `notifications`: Contains the state managed by notificationsReducer
- `courses`: Contains the state managed by coursesReducer

Export the `rootReducer` as the default export of the module

**Requirements:**

- No console warnings or errors
- No lint errors