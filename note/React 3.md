
# Conditional Rendering in React

## 1. Introduction

In this lesson, we're going to explore a key concept in React - conditional rendering.

It's a technique that allows us to control what we want to display on the screen based on certain conditions. And we're going to learn this concept by building a real project: a Task Manager App!

Our Task Manager App is going to have the following features:

- Add new tasks
- Mark tasks as done or undone
- Filter tasks (all, done, undone)
- Hide or show the form to add tasks
- Display a friendly message when no tasks match our filter

Why is conditional rendering important? Think of your favorite app. Maybe it's a social media platform, an online shopping app, or your favorite game. All of these apps need to display different things at different times, based on different conditions.

That's what conditional rendering is all about. It makes our apps dynamic and interactive. Instead of a static page, we create a responsive interface that adjusts to the user's actions and decisions.

Before we dive into the code, let's understand some common patterns of conditional rendering in React. We will focus on three different ways:

### 1.1 Ternary Operator (`? :`)

This operator allows us to render different elements based on a condition. If the condition is true, it renders the element before the `:`. If the condition is false, it renders the element after the `:`.

```jsx
{ condition ? <ElementIfTrue /> : <ElementIfFalse /> }
```

### 1.2 Logical `&&` Operator

We use this operator when we want something to be rendered only when a certain condition is true. If the condition is false, React will ignore and skip it.

```jsx
{ condition && <Element /> }
```

### 1.3 Switch Case

Although not as common in JSX as the other two, you can use a switch case in your component's function to decide which component to render.

```jsx
switch(condition) {
  case 'value1':
    return <Component1 />
  case 'value2':
    return <Component2 />
  default:
    return <DefaultComponent />
}
```

Now, we'll apply these concepts while building our Task Manager App using Bootstrap 5 classes for UI styling. This app is a wonderful opportunity for us to apply everything we've learned so far about React. Let's start building!

> **Note (注释):** 条件渲染是 React 的核心特性之一。三种常见方式：三元运算符（适合二选一）、逻辑与（适合仅当条件为真时显示）、switch（适合多分支）。理解并灵活运用它们可以让组件更动态、更简洁。

---

## 2. Basic App Layout and Task Component

Great, now that we've understood the importance of conditional rendering, let's start building our app. First, we need to set up the basic layout of the application and create the Task component.

### 2.1 Basic App Layout

In our app, we'll have a main layout that includes a title and a list of tasks. For styling purposes, we'll use Bootstrap 5, which is a popular CSS framework that can help us design beautiful UIs quickly.

Let's start by creating our App component. Here's a simple structure for our layout:

```jsx
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-3">Task Manager</h1>
      {/* Task components will go here */}
    </div>
  );
}

export default App;
```

In this code, we're using Bootstrap's `container` class to center our content and add some horizontal padding. The `text-center` class is used to align the text in the center, and `my-3` adds some vertical margin.

### 2.2 Task Component

Now, let's create a Task component. Each Task will display the task description and a checkbox to mark the task as done or undone.

Here's a basic example of what the Task component could look like:

```jsx
import React from 'react';

function Task({ task, isDone }) {
  return (
    <div className="d-flex align-items-center my-2">
      <input type="checkbox" className="me-3" checked={isDone} readOnly />
      <span className={isDone ? "text-decoration-line-through" : ""}>{task}</span>
    </div>
  );
}

export default Task;
```

In the Task component, we're receiving `task` and `isDone` as props. `task` is the description of the task, and `isDone` is a boolean indicating whether the task is done.

The checkbox's `checked` attribute is tied to the `isDone` prop. If `isDone` is true, the checkbox will be checked. Notice the `readOnly` attribute in the checkbox input. We're using it because right now we're not yet handling changes to the checkbox.

The task description is displayed after the checkbox. If the task is done (`isDone` is true), we'll add the `text-decoration-line-through` class to strike through the text.

Your job now is to take this base structure and begin building your Task Manager App. Start by creating the App component and then move to the Task component. Get your hands dirty with the code!

---

## 3. Adding Tasks with Form

Great job on setting up your basic App layout and Task component! Now let's move on to the next feature of our Task Manager App, which is adding new tasks.

To add new tasks, we'll need a form with an input field and a button. We'll also need to manage the state of our form using the `useState` hook. This will allow us to keep track of the input field's value as the user types their task.

Here's how we can add a form to our App:

```jsx
import React, { useState } from 'react';
import Task from './Task';

function App() {
  const [task, setTask] = useState("");
  
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit task logic goes here
    console.log(task);
    setTask("");
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Task Manager</h1>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Add a task..." 
            value={task} 
            onChange={handleInputChange} 
          />
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
      
      {/* Task components will go here */}
    </div>
  );
}

export default App;
```

In this example, we're using the `useState` hook to manage the value of the input field in our form. We initially set the state to an empty string using `useState("")`.

The `handleInputChange` function is responsible for updating our state whenever the user types into the input field. This function is called every time the input's value changes due to the `onChange` event.

Our form has an `onSubmit` event which calls the `handleSubmit` function. This function prevents the default form submission (which would refresh the page) using `e.preventDefault()`. For now, it just logs the current task to the console and then resets the input field by setting the task back to an empty string.

Now, let's go ahead and try to implement this form in your application. Don't worry if you get stuck, we're here to help! Take your time and have fun coding.

---

## 4. Conditional Rendering with the Ternary Operator

Fantastic work on implementing the form! Now, let's use the ternary operator to handle conditional rendering in our app. We'll use it to visually indicate whether a task is done or not.

Remember our Task component? We used a `span` to display the task description. Now, let's modify that part to display the task differently based on its status.

If the task is done (`isDone` is true), we'll show the task description with a line through it. Otherwise, we'll display it normally.

```jsx
<span className={isDone ? "text-decoration-line-through" : ""}>{task}</span>
```

The ternary operator works like this: `condition ? valueIfTrue : valueIfFalse`. So if `isDone` is true, we apply the `text-decoration-line-through` class to strike through the text. If `isDone` is false, we apply an empty string as the class, which means no additional styling.

But how do we keep track of whether a task is done? We'll need to introduce a new piece of state in our App component, and a function to update it when a task's status changes. Here's how we can do that:

```jsx
import React, { useState } from 'react';
import Task from './Task';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: 'First Task', isDone: false },
    { id: 2, text: 'Second Task', isDone: false },
  ]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit task logic goes here
    console.log(task);
    setTask("");
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Task Manager</h1>

      <form onSubmit={handleSubmit} className="mb-3">
        {/* Form content */}
      </form>
      
      {tasks.map(task => (
        <Task 
          key={task.id}
          task={task.text} 
          isDone={task.isDone} 
          onToggle={() => toggleTaskStatus(task.id)}
        />
      ))}
    </div>
  );
}

export default App;
```

In this updated App component, we have a `tasks` array in our state. Each task is an object with an `id`, `text`, and `isDone` property.

The `toggleTaskStatus` function is used to update the status of a task. It takes the `id` of the task as a parameter, then creates a new array where the `isDone` property of the task with the given `id` is toggled. The `map` function is used to apply this logic to every task in the `tasks` array.

Finally, we map over the `tasks` array to create a `Task` component for each task. We also pass a function to the `onToggle` prop, which calls `toggleTaskStatus` with the current task's `id`.

Now it's your turn. Update your Task component to visually indicate whether a task is done or not using the ternary operator for conditional rendering.

---

## 5. Conditional Rendering with Switch Case

Well done on implementing the ternary operator! Now, let's move on to using switch cases for conditional rendering in our app. This time, we'll use it to filter tasks — show all tasks, only done tasks, or only undone tasks.

For this, we'll need a new piece of state in our App component to keep track of the current filter. We'll use a string with three possible values: `"all"`, `"done"`, and `"undone"`.

First, let's add a button group to our UI to select the filter:

```jsx
<div className="d-flex justify-content-center mb-3">
  <div className="btn-group" role="group">
    <button className="btn btn-primary">All</button>
    <button className="btn btn-success">Done</button>
    <button className="btn btn-danger">Undone</button>
  </div>
</div>
```

Next, let's add the new state variable, `filter`, and a function to update it, `setFilter`. We'll also add a `handleFilterChange` function that will be called when a filter button is clicked:

```jsx
const [filter, setFilter] = useState("all");

const handleFilterChange = (newFilter) => {
  setFilter(newFilter);
};
```

Now, we'll update our buttons to call `handleFilterChange` when clicked:

```jsx
<button onClick={() => handleFilterChange("all")} className="btn btn-primary">All</button>
<button onClick={() => handleFilterChange("done")} className="btn btn-success">Done</button>
<button onClick={() => handleFilterChange("undone")} className="btn btn-danger">Undone</button>
```

Finally, let's filter the tasks that are displayed based on the selected filter. Here's where we'll use a switch case:

```jsx
let displayedTasks;
switch(filter) {
  case 'done':
    displayedTasks = tasks.filter(task => task.isDone);
    break;
  case 'undone':
    displayedTasks = tasks.filter(task => !task.isDone);
    break;
  default:
    displayedTasks = tasks;
}

return (
  <div className="container">
    {/* Rest of the app */}
    {displayedTasks.map(task => (
      <Task 
        key={task.id}
        task={task.text} 
        isDone={task.isDone} 
        onToggle={() => toggleTaskStatus(task.id)}
      />
    ))}
  </div>
);
```

In this code, we're filtering the tasks to be displayed based on the current filter. If the filter is `"done"`, we use the `filter` function to get only the tasks that are done. If the filter is `"undone"`, we get only the tasks that are not done. If the filter is anything else (in our case, it can only be `"all"`), we display all tasks.

Now it's your turn. Implement task filtering feature using switch case for conditional rendering. Don't forget to update your Task component if necessary.

---

## 6. Conditional Rendering with Logical `&&` Operator

Great job on implementing task filtering using the switch case! Now, we will introduce another JavaScript operator for conditional rendering, the logical `&&` operator.

In JavaScript, the logical `&&` operator can be used to conditionally render components. If the expression on the left of the `&&` operator is true, the element on the right will be rendered. If it's false, React will ignore and skip it.

We will use this feature to implement a functionality to hide or show the task creation form.

First, let's create a new state variable `isFormVisible` to control the visibility of the form:

```jsx
const [isFormVisible, setIsFormVisible] = useState(true);
```

By default, `isFormVisible` is true, so the form will be visible when the app first loads.

Next, let's add a button to toggle the visibility of the form:

```jsx
<button onClick={() => setIsFormVisible(!isFormVisible)} className="btn btn-secondary mb-3">
  {isFormVisible ? "Hide Form" : "Show Form"}
</button>
```

This button will toggle the value of `isFormVisible` between true and false each time it's clicked. We also use the ternary operator to change the button's text based on whether the form is currently visible.

Finally, we can conditionally render the form based on the value of `isFormVisible` using the `&&` operator:

```jsx
{isFormVisible && (
  <form onSubmit={handleSubmit} className="mb-3">
    {/* Form content */}
  </form>
)}
```

In this code, if `isFormVisible` is true, the form will be rendered. If it's false, the form will not be rendered.

Now it's your turn. Implement the feature to hide or show the task form using the logical `&&` operator for conditional rendering.

---

## 7. Conditional Rendering Components in React

Congratulations on getting this far! Now, let's dive into rendering entire components based on certain conditions. In this section, we will introduce a new component, `NoTasksFound`, and display it when no tasks match the current filter.

Let's start by creating the `NoTasksFound` component. This is a simple functional component that will display a message to the user:

```jsx
function NoTasksFound() {
  return (
    <div className="alert alert-info" role="alert">
      No tasks found. Please add a new task.
    </div>
  );
}

export default NoTasksFound;
```

We use Bootstrap's `alert` classes to style the message.

Now let's head back to our App component. In the previous part, we created the `displayedTasks` variable which holds the tasks that should currently be displayed based on the filter. We will now use this variable to decide whether to render the `NoTasksFound` component.

If `displayedTasks` is empty, it means no tasks match the current filter, so we should render `NoTasksFound`. If it's not empty, we should render the tasks as we have been doing.

Here's how we can implement that:

```jsx
import NoTasksFound from './NoTasksFound';
// ... rest of the imports

// ... rest of the App component

return (
  <div className="container">
    {/* Rest of the app */}
    {displayedTasks.length > 0 ? (
      displayedTasks.map(task => (
        <Task 
          key={task.id}
          task={task.text} 
          isDone={task.isDone} 
          onToggle={() => toggleTaskStatus(task.id)}
        />
      ))
    ) : (
      <NoTasksFound />
    )}
  </div>
);
```

Here, we're using the ternary operator for conditional rendering. If `displayedTasks.length > 0` is true, we render the tasks. If it's false, we render the `NoTasksFound` component.

Now it's your turn! Implement the feature to conditionally render a "No tasks found" component. Remember to import the `NoTasksFound` component in your App component.

---

## 8. Conclusion

Awesome job everyone! You've just built a full-fledged Task Manager App using React while learning and applying the key concept of conditional rendering in various ways. We've used the ternary operator, switch cases, and logical `&&` operator, and applied these techniques to render entire components based on certain conditions.

Let's quickly recap the topics we covered:

- We started by creating the basic layout and the Task component for our app.
- Then, we added a form to create new tasks.
- We implemented a feature to mark a task as done or not using conditional rendering with the ternary operator.
- Next, we implemented a task filtering feature using switch cases for conditional rendering.
- We added a feature to hide or show the task creation form using the logical `&&` operator.
- Lastly, we conditionally rendered the "No tasks found" component when no tasks match the filter.

Here is the complete code for the App component:

```jsx
import React, { useState } from 'react';
import Task from './Task';
import NoTasksFound from './NoTasksFound';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: 'First Task', isDone: false },
    { id: 2, text: 'Second Task', isDone: false },
  ]);
  const [filter, setFilter] = useState("all");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  let displayedTasks;
  switch(filter) {
    case 'done':
      displayedTasks = tasks.filter(task => task.isDone);
      break;
    case 'undone':
      displayedTasks = tasks.filter(task => !task.isDone);
      break;
    default:
      displayedTasks = tasks;
  }

  return (
    <div className="container">
      <h1 className="text-center my-3">Task Manager</h1>

      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group">
          <button onClick={() => handleFilterChange("all")} className="btn btn-primary">All</button>
          <button onClick={() => handleFilterChange("done")} className="btn btn-success">Done</button>
          <button onClick={() => handleFilterChange("undone")} className="btn btn-danger">Undone</button>
        </div>
      </div>

      <button onClick={() => setIsFormVisible(!isFormVisible)} className="btn btn-secondary mb-3">
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-3">
          <input 
            type="text" 
            value={task} 
            onChange={handleInputChange} 
            className="form-control" 
            placeholder="Enter a new task"
            required
          />
          <button type="submit" className="btn btn-primary mt-3">Add Task</button>
        </form>
      )}

      {displayedTasks.length > 0 ? (
        displayedTasks.map(task => (
          <Task 
            key={task.id}
            task={task.text} 
            isDone={task.isDone} 
            onToggle={() => toggleTaskStatus(task.id)}
          />
        ))
      ) : (
        <NoTasksFound />
      )}
    </div>
  );
}

export default App;
```

You should now have a firm grasp of conditional rendering and its uses in a real-world application.

---

# Introduction to React Router

## 1. Introduction

In this lesson, we're embarking on a fun and exciting project: Building a simple blog using React Router v7.

By the end of this lesson, you'll understand the basics of React Router and be able to apply these principles to build even more complex applications in the future.

But first, let's discuss what React Router is and why it's so important.

React Router is a standard library for routing in React. It allows you to create multiple pages in your application and navigate between these pages like you would in a multi-page website, but it maintains the speed and efficiency of a single-page application.

This is possible because React Router does not refresh the whole page when navigating to a different URL, instead it only updates the parts of the page that need to change.

### What's New in React Router v7:

- Unified package structure (just `react-router`, no more separate `react-router-dom`)
- Enhanced type safety and TypeScript support
- Improved data loading with loaders and actions
- Better integration with React 19 features
- Option to use as a framework with SSR capabilities

> **Note (注释):** React Router v7 是重大更新，包结构简化，只需要安装 `react-router`，不再需要 `react-router-dom`。同时增强了类型安全和数据加载能力。

Here is an overview of the main elements of React Router we will be using:

- `<BrowserRouter>`: This is a React component provided by React Router that keeps your UI in sync with the URL.
- `<Routes>`: This is a container for `<Route>` elements. It helps to define the different "pages" of your application based on the current URL.
- `<Route>`: This component renders the specified UI when the current location matches the route's path.
- `<Link>` and `<NavLink>`: These are components that allow you to create links to your defined routes. `<NavLink>` is a special type of `<Link>` that can apply styles to the link when it matches the current URL.
- `useParams`: This is a hook provided by React Router that allows you to access the dynamic parts of the URL (known as parameters) within your component.
- `useNavigate`: Another hook from React Router, which allows you to programmatically navigate to different routes.

For our blog application, we're going to have a homepage, an about page, and a blog page. On the blog page, we'll have multiple blog posts, each with its own unique URL. We'll also learn how to create nested routes for individual blog posts, and handle redirections back to the main blog page.

This might sound a bit complex, but don't worry - we'll be breaking this down into manageable steps and you'll be coding along the way!

Next, we'll start setting up our project environment and install the necessary tools we need to get started. So, buckle up and let's dive into React Router!

---

## 2. Project Setup

Great! Now that we have a clear understanding of what we'll be doing, let's get started by setting up our project.

### Step 1: Create a New React Project with Vite

First, we're going to create a new React application using Vite, which provides a much faster development experience than the deprecated Create React App. Make sure you have Node.js version 20 or higher installed (required for React Router v7).

Open your terminal or command prompt, navigate to the folder where you want to create your project, and type the following command:

```bash
npm create vite@latest blog-app -- --template react
```

This command uses Vite to create a new React application in a directory called "blog-app". Follow the prompts if any appear.

Once the command is completed, navigate into your new project's directory and install dependencies:

```bash
cd blog-app
npm install
```

### Step 2: Install React Router v7

Our next step is to install React Router v7. Note that in v7, we only need the `react-router` package (not `react-router-dom` anymore). In your terminal, while you're still in your project directory, run:

```bash
npm install react-router
```

This command will install React Router v7, which has consolidated all the routing functionality into a single package.

### Step 3: Install Bootstrap

Lastly, we're going to install Bootstrap for some quick and easy styling. We'll use Bootstrap's CSS directly from a Content Delivery Network (CDN). Open the `index.html` file in your project root directory and add the following line in the `<head>` section:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
```

Your `index.html` should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Blog App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

That's it for the setup! You should now have a new React project with Vite, React Router v7, and Bootstrap installed.

You can run your application to make sure everything is working fine by typing `npm run dev` in the terminal. This should start the Vite development server and open your application at `http://localhost:5173`.

In the next section, we'll start building our blog application by creating the different routes. Let's move on!

---

## 3. Creating Routes

Now that we've set up our project, let's start building our application by defining some routes.

### Step 1: Importing Required Components

In your `src/App.jsx` file (note the `.jsx` extension when using Vite), let's first import the necessary components from `react-router`. Replace the entire content of `src/App.jsx` with:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return <Router></Router>;
}

export default App;
```

Notice we're importing from `react-router` (not `react-router-dom` as in v6). Here, we're importing three components:

- `BrowserRouter`: We're renaming it to `Router` for simplicity. It uses the HTML5 history API to keep your UI in sync with the URL.
- `Routes`: This is a component that allows us to define multiple routes.
- `Route`: This component is used to define a single route.

### Step 2: Creating Placeholder Components

Before we define the routes, let's create some placeholder components for our pages. Inside the `App` function, add:

```jsx
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Blog() {
  return <h1>Blog Page</h1>;
}
```

For now, these components just return a simple heading so that we can differentiate between the pages.

### Step 3: Defining Routes

Now, let's define the routes for our pages. We'll do this using the `Routes` and `Route` components. Inside the `Router` component, below our page components, add:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
</Routes>
```

Here's what we're doing:

- We're wrapping our `Route` components with the `Routes` component. This is required by React Router.
- For each route, we specify a `path` prop which is the URL for that route, and an `element` prop which is the component that should be rendered when that URL is visited.

Your `App.jsx` file should now look like this:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  function Home() {
    return <h1>Home Page</h1>;
  }

  function About() {
    return <h1>About Page</h1>;
  }

  function Blog() {
    return <h1>Blog Page</h1>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
```

If you start your application now with `npm run dev` and visit `http://localhost:5173/`, `http://localhost:5173/about`, and `http://localhost:5173/blog`, you'll see that the correct page is displayed for each URL. Great job! You've created your first routes with React Router v7.

Next, we'll create some navigation links to easily navigate between these pages. Let's move on!

---

## 4. Adding Navigation

With our routes set up, it's time to add some navigation to our application. For this, we'll be using the `Link` and `NavLink` components from `react-router`.

### Step 1: Importing Link and NavLink

First, let's import the components. In your `src/App.jsx`, update the import statement:

```jsx
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router";
```

### Step 2: Creating the Navigation Component

Next, we're going to create a `Navigation` component that will hold our navigation links. Let's define this component inside our `App` function, before our route components:

```jsx
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className={({ isActive }) => (isActive ? "navbar-brand active" : "navbar-brand")} to="/">
          Simple Blog
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
```

Notice the key change in React Router v7: instead of using `activeClassName` (which was removed), we now pass a function to the `className` prop. This function receives an object with `isActive`, `isPending`, and `isTransitioning` properties, allowing us to dynamically set classes based on the link's state.

### Step 3: Adding Navigation to the Application

Finally, we need to include our `Navigation` component in our application. To do this, we simply render it above our `Routes` component inside our `Router`. Here's how your `App` component should look:

```jsx
function App() {
  function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className={({ isActive }) => (isActive ? "navbar-brand active" : "navbar-brand")} to="/">
            Simple Blog
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // ... rest of the code

  return (
    <Router>
      <Navigation />
      <Routes>{/* Routes here */}</Routes>
    </Router>
  );
}
```

You can also add some CSS to highlight the active links. In your `src/App.css` file, add:

```css
.nav-link.active {
  font-weight: bold;
  color: #0056b3 !important;
}
```

That's it! If you run your application now, you'll see the navigation bar at the top. You can click on the links to navigate between your pages, and the active link will be highlighted. And that's how you add navigation to a React application using React Router v7!

In the next section, we'll see how to create dynamic routes that can handle a variety of URL parameters. Let's move forward!

---

## 5. Adding Dynamic Blog Posts

Now that we've got our basic routing and navigation set up, let's make things more interesting by adding some dynamic content to our blog page. We'll use route parameters to create dynamic routes that can display different blog posts.

### Step 1: Updating the Blog Component

First, we need to modify our `Blog` component to include dynamic content. Right now, it just displays a static message. We're going to change it so that it displays a list of links to individual blog posts. Replace the `Blog` component with the following code:

```jsx
function Blog() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  );
}
```

Here, we're simulating a list of blog posts with an array of objects. Each object represents a blog post with an `id` and a `title`. In a real application, this data would likely come from a backend API.

We're then mapping over the `posts` array and for each post, creating a link to a dynamic route using the post's id. The URL for each post's route is `/blog/{id}` where `{id}` is the ID of the post.

### Step 2: Creating the BlogPost Component

Next, we need to create a `BlogPost` component that will be displayed when the user navigates to a post's URL. First, import the `useParams` hook at the top of your file:

```jsx
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams } from "react-router";
```

Then, below the `Blog` component, add the following code:

```jsx
function BlogPost() {
  let { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}
```

In this component, we're using the `useParams` hook from `react-router` to access the route parameters. This hook returns an object where each property is a route parameter. In our case, we only have one parameter, `id`, so we're destructuring it from the object.

We're then using the `id` to display a dynamic title and content. In a real application, you would likely use this `id` to fetch the corresponding post's data from your backend API.

### Step 3: Adding a Route for the BlogPost Component

Finally, we need to add a route for our `BlogPost` component. This route will match URLs in the format `/blog/{id}` and render the `BlogPost` component. Add the following `Route` component to your `Routes` component:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />} />
</Routes>
```

Here, `:id` in the path prop signifies a route parameter. This will match any URL in the format `/blog/{id}`, where `{id}` is any string.

Now, if you navigate to your blog page at `http://localhost:5173/blog`, you'll see links to three blog posts. Clicking on any of these links will take you to the corresponding blog post's page.

Great work! You've now created dynamic routes using route parameters in React Router v7! In the next section, we'll learn about nested routes. Let's continue!

---

## 6. Creating Nested Routes

Nested routes, also known as child routes, allow us to create a hierarchical URL structure by rendering a specific component based on the child path. It's useful when you want to show different components within a layout based on the URL.

To demonstrate this, let's add a comments section for each blog post. Each blog post will have its own comments, accessible via a child route.

### Step 1: Creating the Comments Component

First, let's create a `Comments` component that will display the comments for a blog post. Add the following code below your `BlogPost` component:

```jsx
function Comments() {
  let { id } = useParams();

  return (
    <div>
      <h2>Comments for Blog Post {id}</h2>
      <p>Comment 1 for post {id}</p>
      <p>Comment 2 for post {id}</p>
      {/* In a real application, you would fetch these comments from an API */}
    </div>
  );
}
```

We're using the `useParams` hook again to get the ID of the current blog post. We're then using this ID to display some dummy comments. In a real application, you would use this ID to fetch the comments for the post from your backend API.

### Step 2: Updating the BlogPost Component

Next, we need to add a link to the comments section in our `BlogPost` component and display the `Comments` component when this link is clicked. We also need to define a child route for the comments.

First, import the `Outlet` component:

```jsx
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, Outlet } from "react-router";
```

Then update your `BlogPost` component as follows:

```jsx
function BlogPost() {
  let { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
      <Link to={`/blog/${id}/comments`}>View Comments</Link>
      <Outlet />
    </div>
  );
}
```

Here, we're doing several things:

- Adding a link to the comments section. We're using an absolute path to ensure correct navigation.
- Using the `Outlet` component to display child routes. This component serves as a placeholder for nested routes.

### Step 3: Configuring Nested Routes

Now we need to update our routes configuration to support nested routes. Update your `Routes` component as follows:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />}>
    <Route path="comments" element={<Comments />} />
  </Route>
</Routes>
```

Notice how we've nested the `comments` route inside the blog post route. The `path` prop for the nested route is relative to its parent route, so `"comments"` will match URLs like `/blog/1/comments`.

Now, if you navigate to a blog post page and click on "View Comments", the comments will appear below the blog post content within the same page. You've successfully created nested routes with React Router v7!

In the next section, we'll learn how to programmatically navigate between routes. Let's move forward!

---

## 7. Adding Redirects

Sometimes, we want to programmatically navigate to a different route, for example, after a user performs an action such as submitting a form. We can achieve this in React Router using the `useNavigate` hook.

To demonstrate this, let's add a "Back to Blog" button on each blog post page that, when clicked, takes the user back to the main Blog page.

### Step 1: Importing useNavigate

First, let's import the `useNavigate` hook from `react-router`. Update your import statement:

```jsx
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, Outlet, useNavigate } from "react-router";
```

### Step 2: Updating the BlogPost Component

Next, we need to use the `useNavigate` hook in our `BlogPost` component and add a button that triggers a navigation action. Update your `BlogPost` component as follows:

```jsx
function BlogPost() {
  let { id } = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/blog");
  };

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
      <Link to={`/blog/${id}/comments`}>View Comments</Link>
      <Outlet />
      <button onClick={goBack} className="btn btn-primary mt-3">
        Back to Blog
      </button>
    </div>
  );
}
```

In this code:

- We're calling `useNavigate` to get the `navigate` function. This function allows us to programmatically navigate to different routes.
- We're defining a `goBack` function that, when called, navigates to the `/blog` route. We're calling the `navigate` function with the path we want to navigate to.
- We're adding a "Back to Blog" button that calls the `goBack` function when clicked.

Now, if you navigate to a blog post page and click on "Back to Blog", you'll be taken back to the main Blog page.

You've successfully added redirects in your application using React Router v7!

Here is the complete code for the project:

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, Outlet, useNavigate } from "react-router";

// Home component
function Home() {
  return <h1>Home Page</h1>;
}

// About component
function About() {
  return <h1>About Page</h1>;
}

// Blog component
function Blog() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  );
}

// BlogPost component
function BlogPost() {
  let { id } = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/blog");
  };

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
      <Link to={`/blog/${id}/comments`}>View Comments</Link>
      <Outlet />
      <button onClick={goBack} className="btn btn-primary mt-3">
        Back to Blog
      </button>
    </div>
  );
}

// Comments component
function Comments() {
  let { id } = useParams();

  return (
    <div>
      <h2>Comments for Blog Post {id}</h2>
      <p>Comment 1 for post {id}</p>
      <p>Comment 2 for post {id}</p>
    </div>
  );
}

// App component
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navbar-brand active" : "navbar-brand")}>
            My Blog
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />}>
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

## Summary

Congratulations! You've successfully built a blog application using React Router v7 with the following features:

- Basic routing with multiple pages
- Navigation using `NavLink` with active state styling
- Dynamic routes with URL parameters
- Nested routes for displaying comments
- Programmatic navigation using the `useNavigate` hook

### Key Differences in React Router v7:

- Single package (`react-router`) instead of separate packages
- Function-based `className` for `NavLink` instead of `activeClassName`
- Enhanced type safety and better performance
- Minimum requirements: React 18 and Node.js 20+

You can extend this application by:

- Adding real data from an API
- Implementing forms to create new blog posts
- Adding authentication
- Using React Router's new data loading features with loaders and actions

Keep exploring and building with React Router v7!
