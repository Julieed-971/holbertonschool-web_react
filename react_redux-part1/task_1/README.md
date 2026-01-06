### Task 1. Authentication Slice

Redux Toolkit's `createSlice` simplifies Redux state management by automatically generating action creators and action types, while using Immer under the hood to allow intuitive state updates.

In this task, you'll create your first Redux slice to manage authentication state, establishing the foundation for centralized state management in your React application.

**Instructions:**

- Create an `authSlice` in `src/features/auth/authSlice.js` to manage authentication state
- Define an `initialState` object with:
  - `user` object containing `email` and `password` (both empty strings)
  - `isLoggedIn` boolean (false)
- Implement two reducers using `createSlice`:
  - `login`: Updates user credentials from action payload and sets `isLoggedIn` to true
  - `logout`: Resets user credentials to empty strings and sets `isLoggedIn` to false
- Export the reducer as default and actions (`login`, `logout`) as named exports
- Create tests in `src/tests/authSlice.spec.js` that verify:
  - The slice returns correct initial state by default
  - Login action updates state correctly with payload data
  - Logout action resets state to initial values

**Hint:** Redux Toolkit's `createSlice` uses Immer internally, allowing you to write code that looks like mutations (e.g., `state.user.email = action.payload.email`) but actually produces immutable updates.

**Requirements:**

- Your React application's core features remain intact and work as expected
- All unit tests PASS (both new and existing)
- No console warnings or errors
- No lint errors
