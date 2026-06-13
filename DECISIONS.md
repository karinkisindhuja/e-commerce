# Technical Decisions

## Architectural Decision

One decision I spent time considering was how to manage the cart state across the application.

The two main options were using React Context API or introducing a dedicated state management library such as Redux Toolkit. Redux would provide a more scalable structure, better debugging tools, and clearer separation of concerns as the application grows. However, for the scope of this assignment, the cart state is relatively simple and only needs to be shared across a small number of components.

I chose React Context API combined with custom hooks because it keeps the implementation lightweight and avoids adding additional dependencies and boilerplate. The resulting code is easier to understand for a small application while still providing a centralized place for cart-related logic. If the application were expected to grow significantly or include more complex state interactions, I would likely revisit this decision and move to Redux Toolkit.

## What I Would Improve With More Time

Given more time, I would focus on improving the overall architecture and user experience.

First, I would introduce a dedicated API layer with stronger error handling and loading-state management. While the current implementation handles basic API interactions, a more robust solution would improve maintainability and resilience.

Second, I would add more comprehensive testing. The current project prioritizes functionality and delivery, but component tests and integration tests would increase confidence in future changes.

I would also improve accessibility by reviewing keyboard navigation, focus management, and screen reader support. These are important aspects of production-ready applications that deserve additional attention.

Finally, I would refine the UI further by adding skeleton loaders, better empty states, and smoother user feedback during asynchronous operations. These changes would not alter the core functionality but would create a more polished user experience.

Overall, my goal was to keep the implementation simple, readable, and aligned with the requirements while making decisions that could be extended if the project needed to scale.
