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