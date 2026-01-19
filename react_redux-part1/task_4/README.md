### Task 7. Synchronize Footer with Redux Store

</summary>

The same principle went for the `Header` component, goes here for the `Footer` component

The updated `Footer` will no longer receive `user` as a prop but will instead interact with the Redux `store` to determine the user's authentication status and conditionally render the `Contact us` link

To achieve this, make sure that:

- Use the appropriate hook to retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store
- Render the `Contact us` link conditionally based on the `isLoggedIn` state
- Remove the `user` prop from the Footer component and rely on the Redux store for state management
- Ensure the Footer component continues to display the copyright information and conditionally renders the "Contact us" link when the user is logged in
