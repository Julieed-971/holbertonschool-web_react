### Task 3. Update the NotificationItem component

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