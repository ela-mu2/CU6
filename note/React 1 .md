
# Intro to React, ReactDOM and JSX

## I. Introduction

Welcome to today's lesson! Today, we'll be learning about React and how to build a simple one-page portfolio site using it with Vite as our build tool.

Our goal today is to create a one-page portfolio site. This is a single webpage where you can showcase your projects, skills, and contact information. By the end of the lesson, you'll have a solid starting point for a portfolio that you can continue to customize and expand.

### What is React?

First, let's talk about React. React is a JavaScript library created by Facebook for building user interfaces, especially for single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes.

Here's a very basic example of what a component in React might look like:

```jsx
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};
```

> **Note (注释):** React 是一个用于构建用户界面的 JavaScript 库，特别适合单页应用（SPA）。它主要负责视图层（view layer），通过组件化开发提高代码复用性和可维护性。

### Why Use React?

You might be wondering why we're choosing to use React for our portfolio site. There are a few reasons:

- **It's efficient:** React uses a virtual DOM (more on this later), which makes it incredibly efficient at updating only the parts of the webpage that need to change.
- **It's modular:** React uses components, which are like building blocks for your site. This makes it easier to code and manage.
- **It's widely used:** Many large companies (like Facebook, Airbnb, and Uber) use React, so understanding it can be a valuable skill for a web developer.

> **Note (注释):** React 的三大优势：高效（虚拟 DOM）、模块化（组件化）、生态丰富（大厂使用）。虚拟 DOM 是 React 性能优化的核心，它通过在内存中模拟真实 DOM，减少直接操作 DOM 的次数。

### What is Vite?

Vite (pronounced "veet") is a modern build tool that provides a faster and leaner development experience for modern web projects. Created by Evan You (who also created Vue.js), Vite has become the go-to tool for React development since Create React App was deprecated in 2025.

Vite offers several advantages:

- **Instant server start:** Vite serves files via native ES modules, resulting in near-instant startup times
- **Lightning-fast Hot Module Replacement (HMR):** Changes to your code are reflected almost instantly
- **Optimized production builds:** Uses Rollup for efficient bundling with code splitting and tree-shaking

> **Note (注释):** Vite 是一个现代构建工具，利用浏览器原生 ES 模块实现快速冷启动和热更新（HMR）。自 2025 年起 Create React App 被弃用后，Vite 成为 React 项目首选。

### How Is React Different?

There are many JavaScript frameworks out there, so you might be wondering what makes React stand out.

One of the main differences is how React works with the DOM. Traditional JavaScript has to interact with the actual DOM, which can be slow and inefficient. React, on the other hand, uses a **virtual DOM** to make changes faster and more efficiently.

React also emphasizes the use of **components**. This can make your code easier to maintain and reuse, since each component is responsible for its own functionality and can be used in multiple places.

In the next sections, we'll be diving deeper into how to set up React with Vite, how to import React into your project, and how to start building your portfolio site. Let's get started!

---

## II. Setting Up React with Vite

Alright, now that we have a basic understanding of what React and Vite are, it's time to get our hands dirty and start creating our first React App with Vite.

### Installation

Before we can create our React app, we need to make sure we have Node.js and npm (node package manager) installed on our computers. These are necessary to run the commands that will set up and launch our app.

You can check if you have Node and npm installed by opening your terminal (Command Prompt on Windows, Terminal on macOS) and typing:

```bash
node -v
npm -v
```

If these commands return a version number, that means you have them installed. If they don't, you'll need to download Node.js and npm. Make sure you have Node.js version 18 or higher for best compatibility with Vite.

Once you have Node and npm installed, you're ready to create your React app with Vite!

> **Note (注释):** Node.js 是运行 JavaScript 的环境，npm 是包管理器。Vite 要求 Node 版本 18+，因为 Vite 使用了较新的 ES 模块和 API。

### Creating a React App with Vite

In your terminal, navigate to the directory where you want to create your project. Then, you can create a new React app by running the following command:

```bash
npm create vite@latest my-portfolio-app -- --template react
```

This command will create a new React project using Vite with the JavaScript template. You can replace `my-portfolio-app` with any name you prefer for your project.

If you prefer to create the project in the current directory, you can use:

```bash
npm create vite@latest . -- --template react
```

The `.` tells the command to set up the new app in the current directory.

This command will take just a few seconds to run (much faster than the old Create React App!). It's setting up a new React project with all the files you need to get started.

### Installing Dependencies

After the scaffolding is complete, navigate into your project directory (if you didn't use `.`):

```bash
cd my-portfolio-app
```

Then install the dependencies:

```bash
npm install
```

### Starting React Development

Once the installation finishes, you can start your app! In the terminal, run:

```bash
npm run dev
```

This command starts Vite's development server and will display a URL (typically `http://localhost:5173`). Open this URL in your browser to see your React app running! Note that Vite uses port 5173 by default, not 3000 like the old Create React App.

Most changes to the code you make will be live-reloaded thanks to Vite's fast HMR, meaning you can see your changes in real-time as you work on your project!

> **Note (注释):** 开发服务器默认端口 5173，区别于旧版 Create React App 的 3000。HMR 允许在不刷新页面的情况下即时更新组件，提升开发效率。

---

## III. How to Import React Library

Great job setting up your React application with Vite! Now, let's dive a bit deeper into how we actually use React in our code.

### Importing Libraries in JavaScript

Before we can use any library in JavaScript, including React, we first have to import it. Importing a library is like telling our code, "Hey, we're going to use some tools from this toolbox, so get it ready."

To import a library in JavaScript, we use the `import` keyword, followed by what we want to import, and then the library we're importing from.

### How to Import React

With modern React (especially since React 17), you often don't need to import React explicitly in every component file when using JSX, thanks to the new JSX Transform. However, it's still good practice to understand how imports work.

When you do need to import React explicitly, you add this line at the top of your JavaScript file:

```jsx
import React from "react";
```

This line of code means that we're importing the entire React library and referring to it as `React` in our code.

When you created your new app with Vite, it automatically set up your `main.jsx` file with the necessary imports. Let's look at what's typically in that file:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Notice that we're importing `ReactDOM` from `'react-dom/client'` - this is the modern way to import ReactDOM as of React 18 and later.

> **Note (注释):** 自 React 17 起，由于新的 JSX 转换（JSX Transform），如果文件只包含 JSX 而不使用其他 React 特性（如 hooks），则不需要显式导入 `React`。但使用 hooks 或 `React.Fragment` 等时仍需导入。此外，`ReactDOM` 的导入路径已从 `'react-dom'` 变为 `'react-dom/client'`，以支持并发特性。

### Why Import the React Library?

Even though the new JSX Transform means we don't always need to import React explicitly, there are still cases where we need it:

- When using React hooks like `useState`, `useEffect`, etc.
- When accessing React features like `React.Fragment` or `React.memo`
- When working with older codebases or specific configurations

Without the proper imports, we wouldn't be able to use these React features in our code.

So, whenever we're working in a file that uses React features beyond basic JSX, we need to make sure we've imported what we need at the top of the file.

---

## IV. React DOM

Now that we have learned about importing the React library, let's move on to another important aspect of React: the ReactDOM.

### What is ReactDOM?

The term "DOM" stands for "Document Object Model." It's a structure that represents your web page in a way that programming languages like JavaScript can work with. You can think of the DOM as a tree of objects that make up your website, with each object being an HTML element on the page.

ReactDOM is a library that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing updates to the DOM. It acts as a glue between React, which is the heart of our app, and the DOM, which represents our app in the browser.

> **Note (注释):** DOM（文档对象模型）是网页的结构化表示，浏览器通过它来渲染页面。ReactDOM 库负责将 React 组件渲染成真实 DOM 元素，并将虚拟 DOM 的更新同步到浏览器。

### Importance and Role of ReactDOM in React

React uses a **virtual DOM** to keep track of changes in your application. However, those changes need to be reflected in the actual DOM that the browser uses to display your website. This is where ReactDOM comes in.

ReactDOM's primary responsibility is to take your React components and turn them into elements that can be inserted into the DOM. This process is often referred to as "rendering."

### How to Import ReactDOM in Modern React

With React 18 and later (which is what we're using with Vite in 2025), the way we import ReactDOM has changed slightly. At the top of your file, you now import it from `'react-dom/client'`:

```jsx
import ReactDOM from "react-dom/client";
```

This change was introduced to support React's new concurrent features and improved performance.

### The ReactDOM.createRoot() Method

The modern way to render React applications uses the `createRoot()` method. This is different from the older `ReactDOM.render()` method you might see in older tutorials.

The `createRoot()` method creates a root for your React app, and then you call `render()` on that root. Here's how it works:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Here's what's happening:

1. We call `ReactDOM.createRoot()` and pass it the DOM element where we want our React app to live (the element with id `'root'`)
2. This returns a root object
3. We call `render()` on that root object, passing in our main App component
4. We wrap our App in `React.StrictMode`, which helps catch common mistakes during development

This modern approach enables React's concurrent features and provides better performance for your applications.

> **Note (注释):** `createRoot` 替代了 React 17 的 `ReactDOM.render`。`React.StrictMode` 是一个开发模式包装器，它会额外检查潜在问题（如废弃 API、副作用等），不会影响生产构建。

---

## V. Introduction to JSX

In this section, we'll be diving into JSX, which is a fundamental part of writing React applications.

### What is JSX?

JSX stands for "JavaScript XML." It's a syntax extension for JavaScript, and it looks a lot like HTML. We use JSX in React to describe what the UI should look like.

### How is JSX Different from JavaScript and HTML?

Although JSX may look a lot like HTML, it's actually closer to JavaScript. You can think of it as a way to write HTML in your JavaScript code.

The key difference is that while HTML is a markup language used for structuring content on the web, JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript. This means we can mix the logic of JavaScript with the markup of HTML in the same file.

Here's an example of what JSX might look like:

```jsx
const element = <h1>Hello, world!</h1>;
```

In this example, `element` is not a string. It's a JSX element, and it's a fundamental part of React. We'll use JSX to build and structure our portfolio site.

### Syntax and Usage

The syntax of JSX is quite simple. You write HTML-like code as if you were writing a string, but you store it in a variable as a JavaScript object. The most important thing to remember about JSX is that it must always be closed. So if you have a tag, you must either have a closing tag or close it itself.

JSX also allows us to embed JavaScript expressions inside curly braces `{}`. Here's an example:

```jsx
const name = "John Doe";
const element = <h1>Hello, {name}</h1>;
```

In this example, `name` is a JavaScript variable. We're using curly braces to embed this JavaScript expression inside our JSX. When this component is rendered, it will display "Hello, John Doe."

### Important JSX Rules with Vite

When using JSX with Vite, there are a few important things to remember:

- **File extensions:** Files containing JSX must use the `.jsx` extension (not `.js`). For TypeScript, use `.tsx` instead of `.ts`.
- **Automatic JSX Runtime:** Vite is configured to use React's automatic JSX runtime, which means you don't always need to import React in files that only use JSX.
- **Fragment shorthand:** You can use `<>...</>` as a shorthand for `<React.Fragment>...</React.Fragment>`.

> **Note (注释):** JSX 必须闭合所有标签，属性名使用驼峰命名（`className` 代替 `class`）。使用 Vite 时，含 JSX 的文件必须使用 `.jsx` 扩展名，这是 Vite 的强制要求（不像某些工具可配置）。

---

## VI. Building the Portfolio with JSX

You've learned a lot so far! Now that we have an understanding of JSX, let's use it to build the structure of our portfolio site.

### How to Structure Your Portfolio Site

Your portfolio site is a chance to show off your projects and skills. A typical portfolio site might have several sections, such as:

- A brief "About Me" section
- A showcase of your projects or work
- A contact section where people can get in touch with you

We'll create a component for each section of our portfolio.

### Creating Sections in Your Portfolio (About, Projects, Contact, etc.)

Creating a section in your portfolio with JSX is straightforward. Remember, each component in React returns some JSX that defines how that component should render. Here's an example of what an "About Me" component might look like:

```jsx
const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Hello! My name is John Doe and I'm a web developer.</p>
    </div>
  );
};

export default AboutMe;
```

And here's an example of a "Contact" component:

```jsx
const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>Email: john.doe@example.com</p>
    </div>
  );
};

export default Contact;
```

Remember to export your components using `export default` so you can import them into other files.

### Children in JSX

Children in JSX refer to components or elements nested inside others. The child component can be accessed using the `props.children` expression.

```jsx
const Parent = (props) => {
  return <div>{props.children}</div>;
};

const App = () => {
  return (
    <Parent>
      <p>I am a child component!</p>
    </Parent>
  );
};
```

In the above code, the `Parent` component is rendering its children by referring to `props.children`. The `App` component uses the `Parent` component and passes a `p` element as a child.

> **Note (注释):** `props.children` 允许组件嵌套，类似 HTML 中的子元素。这是实现布局组件（如 `Card`、`Modal`）的常用模式。

### Parentheses in JSX

When writing multiline JSX, it's common to wrap the code in parentheses. This helps make the code more readable and avoids potential issues with automatic semicolon insertion by JavaScript.

```jsx
const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Hello! My name is John Doe and I'm a web developer.</p>
    </div>
  );
};
```

### Using JSX Fragments to Wrap Multiple Elements

Sometimes, you may need a component to render multiple elements. React requires that components return a single root element, but sometimes you might not want to add an unnecessary parent element to the DOM. This is where JSX fragments come in handy.

JSX fragments let you group a list of children without adding extra nodes to the DOM. Here's an example:

```jsx
const AboutMe = () => {
  return (
    <>
      <h2>About Me</h2>
      <p>Hello! My name is John Doe and I'm a web developer.</p>
    </>
  );
};
```

The `<>...</>` syntax is a shorthand for `<React.Fragment>...</React.Fragment>`.

> **Note (注释):** Fragment（片段）用于避免额外的 DOM 节点，尤其在表格、列表等结构中很重要，因为多余的 `<div>` 可能破坏布局或语义。

### Arrays in JSX

JSX can also represent arrays. If you need to render multiple elements, you can return them inside an array:

```jsx
const Projects = () => {
  const projects = ["Project 1", "Project 2", "Project 3"];
  return projects.map((project, index) => <p key={index}>{project}</p>);
};
```

Here, we're creating a `p` element for each project in our `projects` array. Note the `key` prop - this is important for React to efficiently update lists.

> **Note (注释):** 渲染列表时必须提供唯一的 `key` 属性，帮助 React 识别哪些项被修改、添加或删除，提升性能并避免状态错乱。

---

## VII. Styling the Portfolio Site

With your portfolio site now structured, it's time to add some style and make it visually appealing. React with Vite provides a few different ways to add styles to your components, and we'll focus on using CSS.

### Brief Introduction to CSS in React with Vite

CSS (Cascading Style Sheets) is a language used to style HTML elements, and it can also be used to style React components. In a Vite-powered React app, you have several options for styling:

- Regular CSS files (what we'll use in this tutorial)
- CSS Modules for scoped styles
- CSS-in-JS libraries
- CSS preprocessors like Sass or Less

For this lesson, we'll keep things simple and use regular CSS files.

### How to Import and Use CSS with Vite

To use CSS in a React component with Vite, first, create a new `.css` file in the same directory as your component. The convention is to give it the same name as your component. For example, if you have an `AboutMe` component, you would create an `AboutMe.css` file.

Inside the `.css` file, you can write your styles as you normally would in CSS. For example:

```css
/* AboutMe.css */

.about-section {
  padding: 2rem;
  background-color: #f5f5f5;
}

.about-section h2 {
  color: #333;
  margin-bottom: 1rem;
}

.about-section p {
  font-size: 18px;
  line-height: 1.6;
}
```

After writing your styles, you can import the `.css` file into your component file using the `import` keyword:

```jsx
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>Hello! My name is John Doe and I'm a web developer.</p>
    </div>
  );
};

export default AboutMe;
```

Notice that we use `className` instead of `class` in JSX (since `class` is a reserved word in JavaScript).

### Vite's CSS Handling Features

Vite provides some excellent features for handling CSS:

- **Hot Module Replacement (HMR):** When you change your CSS files, Vite instantly updates the styles in your browser without a full page reload.
- **CSS Code Splitting:** Vite automatically splits CSS used by async chunks, improving load performance.
- **PostCSS Support:** Vite has built-in support for PostCSS if you need to use modern CSS features.
- **CSS Preprocessors:** You can easily use Sass, Less, or Stylus by installing the corresponding package.

### Global Styles

For global styles that apply to your entire app, you can import a CSS file in your `main.jsx`:

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Now that you know how to style your React components with CSS in Vite, let's take some time to add styling to your portfolio site. Remember, the style is up to you! Don't be afraid to experiment and try different things. The fast refresh feature of Vite makes it easy to see your changes instantly.

---

# React Components and Props

## 1. Introduction

Welcome back to our React lessons! Let's quickly review what we've learned so far before we jump into today's project.

Up until this point, we've familiarized ourselves with the basics of React, set up our very first application using Vite (the modern build tool for React), and learned about React DOM and JSX. We've seen how JSX combines JavaScript and HTML to make our code more readable and efficient. Just to give you a quick refresher, here's an example of a JSX code snippet:

```jsx
const element = <h1>Hello, world!</h1>;
```

Today, we are going to apply these concepts and build a project titled "React Blog Site". It will give us hands-on experience with React Components and Props, which are fundamental concepts in React.

In this project, our goal is to create a simple blog site where each blog post is represented by a React component. Our blog site will have headers, posts, and comments - all created using React components.

For those who are new to the concept, a component in React is a reusable piece of code that controls a part of the UI. Components are like JavaScript functions. They accept inputs (called "props") and return React elements that describe what should appear on the screen.

To make our discussion more concrete, let's look at an example of a simple component:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

The `Welcome` component we just defined is a function that accepts a single "props" object argument and returns a React element. We can call it a "functional component" as it's literally a JavaScript function.

> **Note (注释):** React 组件是 UI 的构建块。函数组件接收 props（属性对象）并返回 React 元素。Props 是只读的，不能修改，确保了单向数据流。

Moving forward, the focus of our project will be on building and implementing these components, and passing and receiving props. Don't worry if these concepts aren't crystal clear just yet. As we go through the project, we'll have plenty of examples to work with which will make everything more concrete and easier to understand.

So, are you ready to build our React Blog Site? Let's dive in and get started with setting up our project!

---

## 2. Project Setup

To start our project, we'll be using Vite, a modern build tool that provides a faster and leaner development experience compared to older tools. Vite has become the standard for React development since Create React App was deprecated in 2025.

Before we begin, make sure you have Node.js and npm installed on your computer. If you haven't, you can download Node.js from the official website and npm will be installed alongside it. Make sure you have Node.js version 18 or higher for best compatibility with Vite.

Open your terminal or command prompt and navigate to the directory where you want to create your new React project. Then type in the following command:

```bash
npm create vite@latest react-blog-site -- --template react
```

This command will scaffold a new React project using Vite. It's much faster than the old Create React App method!

After the scaffolding is complete, navigate into your new project directory:

```bash
cd react-blog-site
```

Then install the dependencies:

```bash
npm install
```

You can start your application by running:

```bash
npm run dev
```

A message will appear in your terminal showing that the development server is running at `http://localhost:5173` (Vite uses port 5173 by default, not 3000). Open this URL in your browser to see your React app running.

Now let's take a look at our project structure. Vite sets up a slightly different structure than Create React App:

- `node_modules/`: This is where all of our project's dependencies live.
- `public/`: This directory contains static assets that will be served as-is.
- `src/`: This is where our React components and application logic will live. By default, Vite has created a `main.jsx` file (the entry point) and an `App.jsx` file here.
- `index.html`: Unlike Create React App, the HTML file is in the root directory, not in public.
- `package.json`: This file keeps track of our project's dependencies and scripts.
- `vite.config.js`: This is Vite's configuration file.

In the `src/` directory, you'll find the `App.jsx` file. Note that Vite uses `.jsx` extension for files containing JSX (not `.js`). This file is the main component of our application:

```jsx
// App.jsx
import "./App.css";

function App() {
  return <div className="App">{/* Your app content will go here */}</div>;
}

export default App;
```

Also, take a look at `main.jsx`, which is the entry point of our application:

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Notice how we import `ReactDOM` from `'react-dom/client'` and use `createRoot()` - this is the modern way to render React apps.

As we progress with our project, we'll be creating new components and importing them into the `App.jsx` file.

So, that's our basic project setup with Vite. Now that we have our workspace ready, we can start creating some React components!

---

## 3. Create Basic Components

Now that we have our project set up with Vite, it's time to start creating our first React components. We'll begin with creating two components: `Header` and `Post`.

### 3.1 Building a JSX Element vs a React Component

Before we begin, let's quickly recap the difference between a JSX element and a React component. A JSX element is simply a part of the UI that can be represented as a string, a number, a React element, or an array of these things. For example, the following is a JSX element:

```jsx
const element = <h1>Hello, world!</h1>;
```

A React component, on the other hand, is a function or a class which optionally accepts inputs (called props) and returns a React element. They represent a reusable part of the UI.

> **Note (注释):** JSX 元素是 UI 的静态描述，组件则是函数或类，可以接收 props 并返回 JSX，从而实现动态和可复用的 UI。

Let's start by creating a `Header` component.

### Create a simple Header component

In the `src` directory, create a new file called `Header.jsx` (remember to use the `.jsx` extension for files containing JSX when using Vite). In this file, we'll create a functional component named `Header`.

```jsx
// Header.jsx
function Header() {
  return (
    <header>
      <h1>Welcome to our React Blog Site</h1>
    </header>
  );
}

export default Header;
```

In the code above, we created a `Header` component that returns a JSX element, the `header` tag, which includes a heading for our blog site.

### Create a Post component

Next, let's create another component for our blog posts. Create a new file in the `src` directory and name it `Post.jsx`.

```jsx
// Post.jsx
function Post() {
  return (
    <div>
      <h2>Post Title</h2>
      <p>Post content...</p>
    </div>
  );
}

export default Post;
```

In this component, we have a `div` that includes a post title and some content. We'll learn to make this dynamic with props in the later part of our lesson.

### 3.2 Implementing Components in the Main App

Now that we have our `Header` and `Post` components, let's put them into action. We'll use these components in our main `App` component.

In the `App.jsx` file, import the `Header` and `Post` components at the top.

```jsx
// App.jsx
import "./App.css";
import Header from "./Header.jsx";
import Post from "./Post.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}

export default App;
```

Notice how we use the components just like any other HTML tag. React will replace `<Header />` and `<Post />` with the JSX returned by their respective components. Also note that we're importing with the full `.jsx` extension - this is optional with Vite but can be helpful for clarity.

Save your files and check your browser at `http://localhost:5173`. Thanks to Vite's fast Hot Module Replacement (HMR), you should see your changes instantly without refreshing the page!

So now we have a basic blog site structure set up with our `Header` and `Post` components. Each post on our blog site is a reusable `Post` component. Isn't that cool? And we're just getting started! We'll soon add more functionality to make our blog site interactive.

---

## 4. Implementing Props

Great job on creating our first React components! Now, let's make our blog site more dynamic by using props.

Props (short for properties) are inputs to a React component. They are data passed down from a parent component to a child component. Let's understand how we can use them.

### 4.1 Working with Multiple Props

We can start by modifying our `Post` component to accept multiple props, which would represent a blog post's title, author, and content.

Update the `Post.jsx` file like this:

```jsx
// Post.jsx
function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>By {props.author}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default Post;
```

In our `App.jsx` file, let's pass these props to the `Post` component:

```jsx
// App.jsx
// ... imports ...

function App() {
  return (
    <div className="App">
      <Header />
      <Post title="My First Blog Post" author="John Doe" content="This is my first blog post!" />
    </div>
  );
}
// ...
```

### 4.2 Working with Nested Props

Next, let's create a `Comment` component that will be a child of the `Post` component. The `Post` component will pass nested props (an array of comments) to the `Comment` component.

First, create a new file `Comment.jsx`:

```jsx
// Comment.jsx
function Comment(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

export default Comment;
```

In our `Post` component, we can import `Comment` and pass comments to it:

```jsx
// Post.jsx
import Comment from "./Comment.jsx";

function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>By {props.author}</p>
      <p>{props.content}</p>
      {props.comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
}

export default Post;
```

We can pass comments in the `App.jsx`:

```jsx
// App.jsx
// ... imports ...

function App() {
  return (
    <div className="App">
      <Header />
      <Post
        title="My First Blog Post"
        author="John Doe"
        content="This is my first blog post!"
        comments={["Great post!", "Thanks for sharing."]}
      />
    </div>
  );
}
// ...
```

### 4.3 Destructuring in Props

We can refactor our `Post` and `Comment` components to use destructuring for cleaner and more readable code.

```jsx
// Post.jsx
import Comment from "./Comment.jsx";

function Post({ title, author, content, comments }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{content}</p>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
}

export default Post;
```

```jsx
// Comment.jsx
function Comment({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
```

> **Note (注释):** 解构 props 可以让代码更简洁，直接提取需要的属性，避免重复使用 `props.xxx`。

### 4.4 Apply Default Value to Props

We can set default props in case no props are passed to the components:

```jsx
// Post.jsx
Post.defaultProps = {
  title: "Untitled",
  author: "Unknown",
  content: "No content provided",
  comments: [],
};

// Comment.jsx
Comment.defaultProps = {
  text: "No comment provided",
};
```

### 4.5 Using Spread Operator with Props

We can use the spread operator to pass props more efficiently:

```jsx
// App.jsx
function App() {
  const postProps = {
    title: "My First Blog Post",
    author: "John Doe",
    content: "This is my first blog post!",
    comments: ["Great post!", "Thanks for sharing."],
  };

  return (
    <div className="App">
      <Header />
      <Post {...postProps} />
    </div>
  );
}
// ...
```

> **Note (注释):** 使用展开运算符（spread operator）可以一次性传递对象中的所有属性，特别适用于 props 较多或动态构建 props 的场景。

### 4.6 Working with Children Props

Finally, we can create a `PostList` component that will render multiple `Post` components, passing different props to each. We can use the children prop to allow each `Post` to render its own `Comment` components.

Create a new file `PostList.jsx`:

```jsx
// PostList.jsx
import Post from "./Post.jsx";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
```

And in the `App.jsx`:

```jsx
// App.jsx
import "./App.css";
import Header from "./Header.jsx";
import PostList from "./PostList.jsx";

function App() {
  const posts = [
    {
      title: "My First Blog Post",
      author: "John Doe",
      content: "This is my first blog post!",
      comments: ["Great post!", "Thanks for sharing."],
    },
    {
      title: "My Second Blog Post",
      author: "Jane Doe",
      content: "This is my second blog post!",
      comments: ["Excellent post!", "Keep it up."],
    },
  ];

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
```

By now, you should have a basic understanding of how to use props in React. Remember, props help us create dynamic and reusable components. Great job on getting this far!

---

## 5. Review and Debug

Fantastic job on getting to this stage! We've successfully set up our React blog site with Vite, created multiple components, and used props to pass data around our application. Let's take a moment to review what we've accomplished and make sure everything is working as expected.

### Reviewing Our Code

Our `App` component currently looks something like this:

```jsx
// App.jsx
import "./App.css";
import Header from "./Header.jsx";
import PostList from "./PostList.jsx";

const posts = [
  {
    title: "My First Blog Post",
    author: "John Doe",
    content: "This is my first blog post!",
    comments: ["Great post!", "Thanks for sharing."],
  },
  {
    title: "My Second Blog Post",
    author: "Jane Doe",
    content: "This is my second blog post!",
    comments: ["Excellent post!", "Keep it up."],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
```

We have a `Header` component that displays the blog title, and a `PostList` component that maps through our array of post objects and renders a `Post` component for each one.

Each `Post` component looks like this:

```jsx
// Post.jsx
import Comment from "./Comment.jsx";

function Post({ title, author, content, comments }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{content}</p>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
}

Post.defaultProps = {
  title: "Untitled",
  author: "Unknown",
  content: "No content provided",
  comments: [],
};

export default Post;
```

And each `Comment` component looks like this:

```jsx
// Comment.jsx
function Comment({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

Comment.defaultProps = {
  text: "No comment provided",
};

export default Comment;
```

### Debugging

With our code review done, it's time to run our app and debug any issues.

In your terminal, make sure you're in the project directory and run:

```bash
npm run dev
```

Your application should start and be available at `http://localhost:5173`. Vite's development server will provide fast refresh, so any changes you make will be reflected instantly.

If you see any errors or issues, don't worry - this is a normal part of the process. Debugging is a vital part of programming. Here are some common issues and solutions when working with Vite:

- **File extension issues:** Make sure all component files use the `.jsx` extension when they contain JSX code.
- **Import path issues:** Double-check that your import paths are correct. You can optionally include the `.jsx` extension in imports.
- **Port already in use:** If port 5173 is already in use, Vite will automatically try the next available port.

Go through any errors in your console. They often give clear clues about what's causing the problem. Sometimes, it can be as simple as a typo in your variable names or forgetting to import a component. Other times, you may need to rethink some of your logic.

### Vite Dev Tools Tips

While debugging with Vite, take advantage of these features:

- **Fast Hot Module Replacement (HMR):** Your changes appear instantly without losing component state
- **Clear error overlay:** Vite shows detailed error messages directly in the browser
- **Source maps:** Click on error stack traces to jump directly to the problematic code

Try to solve any issues by yourself first. If you're stuck, don't hesitate to ask for help.

Once you've resolved any issues and your app is running smoothly, give yourself a pat on the back. You've successfully built a React blog site using modern tools like Vite, components, and props! You're making great progress on your journey to mastering React.
