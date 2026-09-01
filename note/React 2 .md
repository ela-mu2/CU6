
# React State and Event Handling

## 1: React State

### 1.1 Introduce State in React

In the world of React, state is a fundamental concept. State in React is like the memory of a component. It stores information about the component that can change over time and influence what the component renders.

When we're talking about our To-Do List application, we can think of state as the mechanism to keep track of our to-dos. As we add new to-dos or delete existing ones, the state of our application changes. Without state, our To-Do List application would not be able to remember which to-dos we've added or removed.

A simplified code example of how we might define initial state in a functional component looks something like this:

```jsx
import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      // Our JSX will go here...
    </div>
  );
}
```

Here, we're setting up an empty array as our initial state for todos. The `useState` hook returns two values: the current state (`todos`) and a function that updates it (`setTodos`).

> **Note (注释):** State 是组件内部的“记忆”，用于保存会随时间变化的数据。`useState` 是 React 提供的 Hook，返回一个数组，第一个元素是当前状态，第二个是更新函数。初始状态可以是任意类型（此处为数组）。

### 1.2 UseState Hook

Let's delve deeper into the `useState` hook. This is a built-in hook that allows us to add React state to our function components.

The `useState` hook accepts one argument, the initial state, and returns an array of two elements. The first element is the current state, and the second is a function that allows us to update the state.

```jsx
const [state, setState] = useState(initialState);
```

Let's apply this concept to our To-Do List app:

```jsx
import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      // Our JSX will go here...
    </div>
  );
}
```

Now, we have two pieces of state: `todos` and `newTodo`. The `todos` state will hold an array of to-do items, and `newTodo` will hold the value of the current input.

Updating our state is just as simple as defining it. Let's say we have a function to add a new to-do, we could use the `setTodos` and `setNewTodo` functions like this:

```jsx
function addTodo() {
  setTodos([...todos, newTodo]);
  setNewTodo('');
}
```

In the function `addTodo`, we're adding the `newTodo` to our `todos` array and then resetting `newTodo` to an empty string.

This is just a starting point for our To-Do List application. We will build on this foundation in the next sections.

Remember, React's state is powerful and fundamental for building interactive applications. By understanding how to read and update the state, you are gaining a key skill in React development. Next, we will explore how to handle user interactions with event handling.

---

## 2: Events Handling in React

### 2.1 Basic Event Handling: onClick and onChange

In React, we handle events like button clicks or text input changes with special event handler functions. Event handlers in React work similarly to event handlers in vanilla JavaScript, but there are some syntax differences due to JSX.

In our To-Do List app, we'll use two main types of event handlers: `onChange` for the input field and `onClick` for the submit button. Let's see this in action:

```jsx
import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleButtonClick = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add To-Do</button>
    </div>
  );
}
```

In this code, `handleInputChange` updates `newTodo` every time the user types something into the input field. `handleButtonClick` adds `newTodo` to the `todos` array and resets `newTodo` to an empty string.

> **Note (注释):** React 的事件是合成事件（SyntheticEvent），命名采用驼峰式（如 `onClick`、`onChange`）。与原生 JS 不同，React 事件处理函数通过 props 传入，且事件对象会被 React 包装以兼容各浏览器。

### 2.2 Triggering Event Handlers

There are two main ways to trigger event handlers in React: directly and through a function reference.

**Direct triggering** happens when the event handler does not need any additional parameters. Like our `handleButtonClick` function:

```jsx
<button onClick={handleButtonClick}>Add To-Do</button>
```

We simply assign the function to the `onClick` prop. We don't call the function (no parentheses after the function name). React will call the function for us when the button is clicked.

**Triggering an event handler through a function reference** is used when the event handler needs additional parameters. For example:

```jsx
<button onClick={() => handleCustomClick(param)}>Click me</button>
```

In this case, `handleCustomClick` is a function that needs a `param`. By wrapping `handleCustomClick(param)` in an arrow function, we ensure that the function is only called when the button is clicked, not when the component renders.

> **Note (注释):** 如果直接写 `onClick={handleCustomClick(param)}`，函数会在渲染时立即执行，而不是点击时。使用箭头函数 `() => handleCustomClick(param)` 可以延迟执行并传递参数。

### 2.3 Passing Parameters and JavaScript Closures

Sometimes, we need to pass parameters into our event handler functions. For example, we might want to pass the index of a to-do item into a `handleDelete` function.

JavaScript closures come in handy in these situations. A closure is a function that has access to its own scope, the outer function's scope, and the global scope. We can leverage this property to pass additional data to our event handlers.

Let's look at a basic example of a closure:

```javascript
function outerFunction(param) {
  return function innerFunction() {
    console.log(param);
  }
}

const closure = outerFunction('Hello, world!');
closure(); // Logs 'Hello, world!' to the console
```

Now, let's apply this concept to our To-Do List app:

```jsx
function handleDelete(index) {
  setTodos(todos.filter((todo, todoIndex) => todoIndex !== index));
}

return (
  <div>
    {todos.map((todo, index) => (
      <div key={index}>
        {todo}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    ))}
  </div>
);
```

In this code, we're passing `index` into `handleDelete` using an arrow function. Inside `handleDelete`, we create a new array that excludes the to-do at `index`, effectively deleting it from our list.

> **Note (注释):** 闭包（closure）允许内部函数访问外部函数的变量。在 React 中，箭头函数创建了一个闭包，捕获了当前的 `index` 值，确保点击删除时能正确识别要删除的项。使用 `filter` 返回新数组而不是直接修改原数组，遵循不可变更新原则。

This part of our To-Do List app shows how we can handle events and update our state based on user interactions.

Next, we'll dive into how to properly update state in an event handler to ensure our app always reflects the most recent state.

---

# Working with Forms in React

## 1. Introduction to React Forms

Why are forms important?

Forms act as a bridge between your users and you. They are a simple yet effective way to gather information from your site visitors, whether that's for registration, logging in, or submitting inquiries and feedback, like in a "Contact Us" form.

Learning how to handle forms effectively is a crucial skill for any web developer.

For this lesson, we're going to design and implement a "Contact Us" form using React.

Here's what we want to build:

- A straightforward form containing fields for a user's name, email, and their message, along with a submit button.
- Once the user fills out the form and hits submit, we'll handle that submission and show a success message.

First, let's consider what our form would look like in plain HTML:

```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" />
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" />
  </div>

  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

In this HTML form, we have three `div` elements, each containing a `label` and an input field (with the last one being a textarea for the message). The `mb-3` class adds some margin-bottom spacing between elements, `form-label` is used for styling the labels, and `form-control` makes our input fields look nicer. Finally, we have a button element for the form submission.

In the upcoming sections, we will break down each part of this HTML form and translate it into a functional React component. By the end of this project, you'll have a solid understanding of how to build and handle forms using React.

Let's get started!

---

## 2. Building Basic Form Fields

In this section, we'll start constructing our form using React. We'll turn the HTML form we looked at earlier into a functional React component.

### 2.1 HTML Form Fields

Before we dive into React, let's do a quick review of the basic form elements in HTML.

Here's our simple HTML form again (see above). Each field contains a `label` that describes its purpose and an `input` where users can enter information. The `textarea` works the same way as an input but is designed for multi-line input.

### 2.2 React Form Fields

Let's turn this HTML form into a React component.

First, we need to import React:

```jsx
import React from 'react';
```

Now, let's create our form as a functional component:

```jsx
const ContactForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message"></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ContactForm;
```

You'll notice that the only difference between our HTML form and this React component is the use of `className` instead of `class` for CSS classes, and `htmlFor` instead of `for` in labels. This is because `class` and `for` are reserved words in JavaScript.

> **Note (注释):** 在 JSX 中，`class` 被 `className` 替代，`for` 被 `htmlFor` 替代，因为它们在 JavaScript 中是保留字。这是 React 与原生 HTML 的关键区别之一。

At this stage, our form looks the same as before. However, it's now a React component, which means we can start adding interactivity to it. In the next sections, we'll learn how to make our form fields controlled components and how to handle form submission.

Great job! We've created our basic form fields in React. Next, we're going to make these fields interactive.

---

## 3. Implementing onChange Event Handler

After transforming our HTML form into a React component, we need to make the form interactive. To do that, we'll use the `onChange` event handler to create what we call 'controlled components' in React.

A **controlled component** in React is an input element like an `input`, `textarea`, or `select` whose value is controlled by the state in our React component. This allows our app to control the input's value directly.

To create controlled components, we first need to set up our state using the `useState` hook from React. We'll have a separate state variable for each input field:

```jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // ...
}
```

Each `useState` call returns an array with two elements: the current state value, and a function to update that state. We're using array destructuring to assign these to variables.

Now, we'll add the `onChange` event handlers to our input fields. Each `onChange` handler will be a function that calls the appropriate state update function with the new value of the input field.

To access the new value, we'll use `event.target.value`, where `event` is the argument to our `onChange` handler:

```jsx
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
```

The `onChange` event handler will be triggered every time a user types something into the input fields. The handler updates the corresponding state variable, which in turn updates the value of the input field in the UI.

So, now our form fields are controlled components: their values are directly controlled by our React component's state. In the next section, we'll explore what would happen if we remove these `onChange` handlers.

> **Note (注释):** 受控组件（controlled component）要求同时设置 `value` 和 `onChange`。`value` 绑定状态，`onChange` 更新状态，形成双向同步。如果缺少 `onChange`，输入框将无法编辑，因为状态始终不变。

---

## 4. Experimenting with Event Handler

Now that we've implemented the `onChange` event handlers, let's investigate what happens if we remove them.

Try temporarily deleting the `onChange` handlers from your input fields, so your form looks like this:

```jsx
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" value={message} ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
```

Now, try typing something into the fields. What happens?

You'll find that you can't type anything into the input fields. But why is that?

This is because we set the `value` of our fields to our state variables: `name`, `email`, and `message`. As we initialize these state variables to be empty strings and we're not updating them (because we removed our `onChange` handlers), the input fields' values always remain as empty strings.

In essence, we're trying to control the value of the fields without giving them a way to update. This renders the input fields unresponsive.

This illustrates the power and importance of the `onChange` handler in controlled components. It is the `onChange` handler that syncs the user's input with the component's state.

Go ahead and add back the `onChange` handlers to the input fields (as shown in the previous section). With `onChange` handlers restored, you should be able to type into the fields again. This experiment helps to understand the significance of controlled components in React and how `onChange` event handlers work. In the next section, we will dive deeper into the event object in React.

---

## 5. Understanding the Event Object in React

In the last section, you've seen how we use the event object in our `onChange` handler to access the new value of the input field via `event.target.value`. But what exactly is this event object, and what can we do with it?

In JavaScript, an event is a signal that something has happened in the application. This could be a button click, a mouse hover, a key press, or any other kind of interaction.

Every event handler in JavaScript is passed an event object that contains information about the event. This includes the type of event, the target element that triggered the event, the coordinates of the mouse at the time of the event, and much more.

In our `onChange` handlers, we've only used one property of the event object: `event.target`. The `target` property points to the element that triggered the event - in our case, the input field.

Here's how we've used `event.target`:

```jsx
onChange={(e) => setName(e.target.value)}
```

Here, `e` is the event object, and `e.target` is the input field. `e.target.value` gives us the new value of the input field.

The event object in React works similarly to the one in plain JavaScript, but there's one key difference: in React, the event object is a **'synthetic' event object**. React wraps the native JavaScript event into a `SyntheticEvent` to make sure the event behaves consistently across different browsers.

It's also important to note that in React, the synthetic event object is **reused and pooled** for performance reasons, which means that you cannot access the event asynchronously (after the event callback has been invoked). Trying to do so would result in the properties on the event object being nullified.

This is why we often see the event object being used immediately within the callback, as we did in our `onChange` handlers.

> **Note (注释):** React 的合成事件（SyntheticEvent）是对原生事件的封装，确保跨浏览器一致性。但出于性能优化，合成事件会被池化（pooling），事件回调执行完后其属性会被清空。因此不要异步访问事件对象（如在 `setTimeout` 或 `async` 中）。如需异步使用，应先保存所需值：`const value = e.target.value;`。

In the next section, we'll continue working with the event object when we implement our `onSubmit` handler to handle form submissions.

---

## 6. Implementing Form Submission in React

We have made our form fields interactive, so users can now input their information. But for the form to be fully functional, we need to implement form submission. When users hit the "Submit" button, we want to collect all the form data and process it somehow - for now, we'll just log it to the console.

React provides the `onSubmit` event handler for form submission. It works similarly to the `onChange` handler, but instead of firing every time the input changes, it fires when the form is submitted.

Let's implement our `onSubmit` handler. First, we'll add the handler to the form element:

```jsx
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    // We'll fill this in next
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields here */}
    </form>
  );
}
```

In our `handleSubmit` function, we want to do two things: prevent the form from being submitted the default way, and log the form data to the console.

By default, submitting a form in HTML causes the page to reload and sends a request to the server. In a React app, we usually want to handle form submission ourselves in JavaScript, without reloading the page. To prevent the default form submission behavior, we can call `event.preventDefault()` in our `onSubmit` handler:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
}
```

Next, let's log our form data. Since our input fields are controlled components, we already have all the form data in our state. So, we can simply log our state variables:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  console.log({ name, email, message });
}
```

Now, when you fill in the form and hit "Submit", your form data should be logged to the console, and the page should not reload.

Great job! You've now created a fully functional form with React. In the next section, we'll add some validation and feedback to improve the user experience.

---

## 7. Adding Validation and Feedback

Our form is functional now, but it's not very user-friendly yet. Right now, users can submit an empty form, or enter an invalid email, and the form will accept it. We need to add some form validation to ensure we're getting proper input from the user.

We'll start by adding a simple form validation. We'll make sure that none of the fields are empty and that the email is in the right format.

Here's how you can add a simple validation:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  
  // Make sure all fields are filled in
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Make sure the email is in the right format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email');
    return;
  }

  // If everything is good, log the form data
  console.log({ name, email, message });
}
```

Now, try submitting an empty form, or a form with an invalid email, and you'll see that the form catches these issues.

But there's a problem with our validation: it interrupts the user with an alert. This is not a good user experience. Instead, we want to give feedback to the user in a more gentle way.

We can display error messages next to the inputs. To do that, let's add some new state variables to hold our error messages:

```jsx
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [messageError, setMessageError] = useState('');
```

Next, we'll adjust our validation to set these error messages instead of showing an alert:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  
  // Reset errors
  setNameError('');
  setEmailError('');
  setMessageError('');
  
  // Make sure all fields are filled in
  if (!name) setNameError('Name is required');
  if (!email) setEmailError('Email is required');
  if (!message) setMessageError('Message is required');

  // Make sure the email is in the right format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    setEmailError('Please enter a valid email');
  }

  // If there are no errors, log the form data
  if (!nameError && !emailError && !messageError) {
    console.log({ name, email, message });
  }
}
```

Finally, we'll display these error messages in our form:

```jsx
<div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
  {nameError && <div className="text-danger">{nameError}</div>}
</div>

{/* do the same for email and message fields */}
```

With this, we have a basic validation in place and the user gets immediate feedback if something is wrong. But there's still one problem: the error messages are not removed when the user fixes the error.

To fix this, we'll add an `onBlur` handler to our input fields. This handler will reset the error message when the user leaves the input field:

```jsx
<input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => setNameError('')} />
```

Now, when the user leaves the input field, the error message will be removed. Try it out!

Great job! You've now created a fully functional form with React.

> **Note (注释):** 验证通常包括：必填检查、格式检查（如邮箱正则）、密码强度等。使用内联错误消息（而不是 `alert`）能提升用户体验。`onBlur` 事件在输入框失去焦点时触发，适合用于清除或验证错误。正则表达式 `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` 是常见的邮箱格式验证。
