# Dev Stack Builder Website

A modern, fully responsive React application designed to help developers build their ideal development stack. Users can explore various technologies (Frontend, Backend, Database, etc.), filter them by category, and add them to a personalized "Your Stack" sidebar. The app features a sleek UI with a custom gradient theme, interactive cards, and real-time feedback using toast notifications.

## Live Link

[https://devstack9.netlify.app/](https://devstack9.netlify.app/)

## Technologies Used

- **React.js** (Vite)
- **Tailwind CSS** (v4)
- **JavaScript (ES6+)**
- **React-Toastify** (for alerts/notifications)
- **JSON** (for technology data)
- **Netlify** (for deployment)

## 3 Key Features

1. **Interactive Stack Builder:** Users can add technologies to a sidebar "Your Stack" panel. Same technology cannot be added twice, and the button dynamically changes to "✓ Added to Stack" and gets disabled.
2. **Responsive Technology Grid:** A fully responsive layout that shows technology cards in a 3-column grid on desktop, 2 columns on tablet, and 1 column on mobile. Each card have icons, badges, difficulty levels, and ratings.
3. **Gradient Brand Theme:** A unified orange → pink → violet gradient is defined once and reused across the brand name, hero heading highlight, and primary buttons, so we can easily re-theme the whole UI.

---

## React Questions & Answers

**1. What is JSX, and why it is used in React?**
JSX means JavaScript XML. It is a syntax extension of JavaScript that let us write HTML like code inside JavaScript files. It is used in React because it makes the code more readable and we can easily see the UI structure. Instead of writing complex `React.createElement()` functions again and again, JSX lets us write components that looks like normal HTML.

**2. What is the difference between props and state?**
Props (means properties) are read only data that we pass from a parent component to a child component. They are used to configure the child component. State is different, it is data that is managed inside the component itself. State is mutable (we can change it) and it is used to track dynamic data that changes over time, like user input or the current selected items list.

**3. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook allows functional components to have local state variables. It returns an array with the current state value and a function to update that value. In this project, I used `useState` to manage the `technologies` array (which I fetched from JSON), the `selectedTech` array (items that are added to the stack), and the `loading` state to show a spinner while the data is being fetched.

**4. What does the `useEffect` hook do, and why you needed it to load the JSON data?**
The `useEffect` hook is used to perform side effects in a component, like fetching data, subscribing to events, or manually changing the DOM. It runs after the component renders. I needed it to load the JSON data because fetching data is a asynchronous operation. I used `useEffect` with an empty dependency array `[]` so that the data fetch happens only once when the component first mounts.

**5. Why every item in a `.map()` list need a unique key prop?**
A unique `key` prop helps React to identify which items in a list has changed, been added, or been removed. It gives the elements a stable identity. Without a unique key, React may re-render the whole list inefficiently or cause bugs with component state, specially when the list is re-ordered or filtered.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means rendering different UI elements based on some conditions (like a boolean value). In this project, I used conditional rendering in the "Your Stack" sidebar. If the `selectedTech` array is empty, it renders a message saying _"Your stack is empty"_. If there is items, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from parent to child via **props**. For example, the `TechnologySection` passes the `tech` object to the `StackCard` component. To send data back from a child to a parent, the parent passes a **callback function** as a prop. The child calls this function (like `onAddToStack(tech)`) to send data back up to the parent, and then parent updates its state.
