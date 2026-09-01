
# Introduction to React Hooks

## 1. Introduction to React Hooks

React Hooks are a feature introduced in React 16.8. They let you use state and other React features without writing a class. This was a big step towards making React more functional and less class-oriented. But why was this needed? Let's explore.

In traditional class components, managing state and lifecycle methods can get complex as the component grows. Logic might be scattered across different lifecycle methods, and related code could be separated, making it harder to understand and maintain.

Also, class components don't lend themselves well to code reusability. You can't easily extract a piece of stateful logic from a component and reuse it across your application.

React Hooks were introduced to solve these problems. They allow you to write your components in a more intuitive way, concentrating related logic in one place, and making it easy to test and reuse.

> **Note (注释):** Hooks 是 React 16.8 引入的特性，允许在函数组件中使用状态和其他 React 特性，避免了类组件的复杂性。类组件中逻辑分散在不同生命周期方法，难以复用；Hooks 将相关逻辑集中在一起，提高了代码的可维护性和可测试性。

Let's dive into a couple of fundamental hooks - `useState` and `useEffect`.

### useState

The `useState` hook is used to add state to functional components. The syntax of `useState` is simple.

Here's an example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

In this example, `useState` is called with the initial state as an argument (0 in this case). It returns an array of two elements: the current state (`count`), and a function to update the state (`setCount`).

### useEffect

The `useEffect` hook lets you perform side effects in function components, like data fetching, setting up a subscription, or manually changing the DOM.

In class components, you'd have to use different lifecycle methods for these. With `useEffect`, you can handle all these side effects in one place.

Here's a basic usage of `useEffect`:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
```

In this example, `useEffect` will run after the render is committed to the screen (similar to `componentDidMount` and `componentDidUpdate`). Whenever `count` changes, React will update the document title.

We'll dive deeper into these hooks in the following sections. As you learn more about them, you'll see how they help make your components more intuitive and easier to manage.

---

## 2. useState Hook

In React, the `useState` hook is a built-in function that allows us to add state to our functional components. Prior to hooks, state was only available in class components. Let's explore how we can use this hook in our React components.

### Basic Usage of useState

Let's take a look at the syntax and usage of `useState`:

```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
```

In the code above, `useState(0)` is how we declare a new state variable in a functional component. `useState` returns a pair: the current state value and a function that lets you update it. You can call this function (`setCount` in this case) from an event handler or somewhere else.

The `useState` hook accepts one argument, which is the initial state, and it's set to `0` in this example. Whenever you want to update the state, you use the second element returned by `useState`, which is a function — in this case, `setCount`.

> **Note (注释):** `useState` 返回一个数组，第一个元素是当前状态，第二个是更新函数。命名约定通常为 `[state, setState]`。与类组件的 `setState` 不同，Hook 的更新函数不会自动合并对象，而是直接替换。

In class components, state updates are merged. However, with hooks, the state update replaces the state.

### Functional State Update

What if the new state is computed using the previous state? This is where functional updates come in. When you need to update the state based on the previous state, you can pass a function to the state setter function.

Let's see an example of a counter where we update the state based on the previous state:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={increment}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

In this example, the `increment` function uses the previous state to compute the new state. Here `prevCount` represents the previous state.

This is beneficial in cases where the state update is asynchronous and ensures we are always working with the correct state.

> **Note (注释):** 函数式更新（functional update）在更新依赖于前一个状态时非常重要，避免因异步更新导致的状态过期问题。例如 `setCount(prev => prev + 1)` 总是基于最新值。

In the next lesson, we'll talk about the rules of Hooks, which will guide us on how we can use Hooks properly. But for now, let's focus on exercises and apply the knowledge we've gained so far on the `useState` hook.

---

## 3. Rules of Hooks

While Hooks are powerful and make our lives as developers easier, they do come with some rules that we need to follow. Breaking these rules could lead to bugs that are hard to detect and diagnose.

Let's explore these rules:

### Rule #1: Only call Hooks from React functions

You can only call Hooks from React functions. This means you can call them from within functional components or from custom Hooks.

Let's take a look at an example:

```jsx
import React, { useState } from 'react';

function Example() {
  // Correct - useState is being called from a React function
  const [count, setCount] = useState(0);

  return (
    // ...
  );
}

export default Example;
```

You cannot call Hooks from regular JavaScript functions. The following example would not be allowed:

```jsx
import React, { useState } from 'react';

function notAReactFunction() {
  // Incorrect - useState is not being called from a React function
  const [count, setCount] = useState(0);
  // ...
}

function Example() {
  // ...
}

export default Example;
```

### Rule #2: Only call Hooks at the top level

Hooks should always be used at the top level of your React functions. You should not call Hooks inside loops, conditions, or nested functions.

Here is an example of incorrect usage of a Hook inside a conditional:

```jsx
import React, { useState } from 'react';

function Example({ condition }) {
  // Incorrect - useState is being called inside a condition
  if (condition) {
    const [count, setCount] = useState(0);
  }

  return (
    // ...
  );
}

export default Example;
```

The reason for this rule is that Hooks rely on the order of calls to keep track of their states. If you call a Hook inside a condition or loop, the order could change on each render, leading to bugs.

> **Note (注释):** Hook 的调用顺序必须保持一致，React 依靠调用顺序来关联状态。如果在条件或循环中调用 Hook，渲染顺序改变会导致状态错乱。这是最重要的 Hook 规则。

The correct way to use Hooks is to call them at the top level of your component, like so:

```jsx
import React, { useState } from 'react';

function Example({ condition }) {
  // Correct - useState is being called at the top level
  const [count, setCount] = useState(0);

  if (condition) {
    // You can use 'count' and 'setCount' inside conditionals, loops, etc.
  }

  return (
    // ...
  );
}

export default Example;
```

These rules help to ensure that Hooks are used correctly and that their behavior is predictable. In the next lesson, we'll talk about the `useEffect` hook, which allows you to handle side effects in your components.

---

## 4. useEffect Hook

The `useEffect` hook allows us to perform side effects in our functional components. Side effects are basically anything that interacts with the world outside of returning React elements from the render method — like making an API request, setting up a subscription, manually changing the DOM, and so forth.

In class components, you'd use different lifecycle methods for these. With `useEffect`, you can consolidate all these side effects in one place.

### Basic Usage of useEffect

Here's how you would use the `useEffect` hook:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
```

In this example, `useEffect` runs after the component has rendered — this is the "effect". Here, the effect is updating the document title, which is a side effect because it reaches out of the component to interact with the browser.

### Dependency Array

`useEffect` takes an optional second argument: an array of dependencies. The effect will only re-run if the values in this array change between renders.

For instance, if we want our effect to run only once (when the component mounts), we can pass an empty array (`[]`):

```jsx
useEffect(() => {
  // This runs ONCE after initial rendering
  console.log('Component mounted');
}, []);
```

If we want the effect to run whenever a certain value changes, we can pass that value in the array:

```jsx
useEffect(() => {
  // This runs whenever 'count' changes
  console.log(`You clicked ${count} times`);
}, [count]);
```

### Undefined Dependencies

If you leave out the dependency array, the effect will run after every render. This could be problematic if your effect includes state-setting operations, as it could lead to an infinite loop of updates.

For example, the following code will result in an infinite loop:

```jsx
useEffect(() => {
  // This runs after EVERY render
  setCount(count + 1);  // Updating state inside an effect without dependencies
});
```

> **Note (注释):** 不传依赖数组时，effect 在每次渲染后都执行。如果在 effect 中更新 state，会触发重新渲染，再次执行 effect，形成无限循环。务必正确设置依赖数组。

### Empty Dependencies

If you pass an empty array (`[]`) as the dependency list, the effect will only run once after the initial render, similar to `componentDidMount` in class components.

This is useful when you want to perform a side effect that only needs to happen once, like fetching data or subscribing to an event.

```jsx
useEffect(() => {
  // This runs ONCE after initial rendering
  fetchData().then(data => setData(data));
}, []);
```

In the next lesson, we will learn about `useMemo`, a hook that can be used to optimize performance by memoizing expensive computations. But first, let's ensure we've understood `useEffect` through some exercises.

---

## 5. useMemo Hook

Sometimes, we have computations in our component that are expensive, meaning they use a lot of resources and can slow down our application. If these computations are being re-run every time our component re-renders, that can cause performance issues.

This is where the `useMemo` hook comes in handy. It allows you to memorize the output of a function, so that you can avoid repeating an expensive computation if the dependencies haven't changed.

### Basic Usage of useMemo

Here's the basic syntax and usage of `useMemo`:

```jsx
import React, { useMemo } from 'react';

function Example({ list }) {
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b);
  }, [list]);

  // render something with sortedList
}
```

In this example, we're sorting a list of numbers. Sorting can be an expensive operation if the list is large, so we don't want to do it on every render unless we have to. By using `useMemo`, we ensure that the sorting operation only happens when the `list` prop changes.

Just like `useEffect`, `useMemo` takes an array of dependencies as the second argument. The memoized value is only recomputed when one of these dependencies changes.

Without `useMemo`, the list would be sorted on every render, even if it hadn't changed. This would be a waste of resources and could slow down our application.

### Practical Demonstration

Let's compare performance with and without `useMemo`:

```jsx
import React, { useState } from 'react';

function WithoutMemo() {
  const [count, setCount] = useState(0);
  const list = [/* a large list */];

  const sortedList = list.sort((a, b) => a - b); // This will run every render

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function WithMemo() {
  const [count, setCount] = useState(0);
  const list = [/* a large list */];

  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b); // This will only run when 'list' changes
  }, [list]);

  return (
    <div className="d-flex justify-content-center">
    <p>You clicked {count} times</p>
      <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

You would see that the `WithMemo` component is faster and smoother as it avoids unnecessary computations.

> **Note (注释):** `useMemo` 用于缓存计算结果，避免每次渲染都进行高开销计算。但要注意不要过度使用，因为 `useMemo` 本身也有开销，只在确实需要优化时才使用。

---

## 6. Review

Today we explored three important hooks in React: `useState`, `useEffect`, and `useMemo`.

- **useState**: This hook lets you add state to your function components. With `useState`, you can manage data that changes over time and affects your component rendering.
- **useEffect**: This hook lets you perform side effects in your components. Side effects could be data fetching, setting up a subscription, or manually changing the DOM, among other things. We also discussed the dependency array and how it controls when the effect runs.
- **useMemo**: This hook lets you optimize your app by avoiding expensive computations on every render. It "remembers" the previous result of a function and only re-computes it when one of its dependencies changes.

We also went over the rules of hooks. Remember, you can only call hooks at the top level of your React function and they must only be called from React functions.

### Common Pitfalls and Best Practices

- Don't forget the dependency array in `useEffect`. Leaving it off can lead to infinite loops if you're updating state within the effect.
- Be aware of stale closures in the `useEffect` hook. If you reference state or props inside your effect, make sure they're included in the dependency array.
- Use `useMemo` sparingly. It does come with its own overhead, so it's not free optimization. Use it when you know a computation is particularly expensive.
- Follow the rules of hooks strictly. Violating these rules can lead to bugs that are hard to trace.

---

# Working with Local Storage and Session Storage in React

## 1. Introduction to Local Storage and Session Storage

Welcome to our lesson on local storage and session storage in React! These are two powerful tools that allow us to store data right in the user's browser, and they're especially useful for maintaining state between different sessions or page reloads. Let's dive in!

### What are Local Storage and Session Storage?

Local storage and session storage are part of the Web Storage API, a set of mechanisms that allow web applications to store data in a user's web browser.

- **Local Storage**: This is used to store data with no expiration date. That means the data stored in local storage persists even when the browser is closed and reopened.
- **Session Storage**: This is similar to local storage, but it keeps the data only for one session. The data is deleted when the user closes the specific browser tab.

Both local storage and session storage store data in the form of key-value pairs.

Here's an example of how you can set and get items from local storage and session storage:

```jsx
import React from 'react';

const StorageExample = () => {
  // Set items in local storage and session storage
  localStorage.setItem('username', 'JohnDoe');
  sessionStorage.setItem('username', 'JohnDoe');

  // Get items from local storage and session storage
  const localUsername = localStorage.getItem('username');
  const sessionUsername = sessionStorage.getItem('username');

  return (
    <div>
      <h2>Web Storage Example</h2>
      <p>Local Storage Username: {localUsername}</p>
      <p>Session Storage Username: {sessionUsername}</p>
    </div>
  );
};

export default StorageExample;
```

In this example, we're storing a username in both local storage and session storage, then retrieving it and displaying it on the screen.

### Differences Between Local Storage and Session Storage

The main difference between local storage and session storage lies in their lifespan and scope:

- **Lifespan**: Local storage data has no expiration time, while session storage data gets cleared when the page session ends — that is, when the page is closed.
- **Scope**: Both local storage and session storage are scoped to the document origin, but session storage is also scoped to the current tab. This means that two tabs with the same site will have two separate session storages, but they share the same local storage.

> **Note (注释):** Local Storage 持久化存储，关闭浏览器后仍保留；Session Storage 仅在当前标签页会话期间有效，关闭标签页即清除。两者均以字符串键值对存储，不同源（origin）之间隔离。

In the next section, we'll dive deeper into how to work with local storage, including how to handle more complex data types like arrays. Stay tuned!

---

## 2. Working with Local Storage

Now that we've introduced local storage and session storage, let's dive deeper into how to work with local storage in a React application.

### Setting and Getting Items in Local Storage

Local storage allows us to store data in key-value pairs. We can set items in local storage using the `setItem` method, and we can get items using the `getItem` method.

Here's an example of how to set and get a simple string value:

```jsx
import React from 'react';

const LocalStorageExample = () => {
  // Set item in local storage
  localStorage.setItem('username', 'JohnDoe');

  // Get item from local storage
  const username = localStorage.getItem('username');

  return <p>Username: {username}</p>;
};

export default LocalStorageExample;
```

In this example, we're storing a username in local storage, then retrieving it and displaying it on the screen.

### Handling Non-Existent Items

What happens if we try to get a value from local storage that doesn't exist? Let's find out:

```jsx
import React from 'react';

const LocalStorageExample = () => {
  // Try to get a non-existent item
  const username = localStorage.getItem('nonExistentKey');

  return <p>Username: {username}</p>; // Will display "Username: "
};

export default LocalStorageExample;
```

As you can see, if we try to get a non-existent item from local storage, it returns `null`.

### Storing and Retrieving Arrays

Local storage only supports string values. If we want to store more complex data types, like arrays or objects, we need to convert them to strings using `JSON.stringify`:

```jsx
import React, { useEffect, useState } from 'react';

const LocalStorageExample = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Store an array in local storage
    const fruitsArray = ['Apple', 'Banana', 'Orange'];
    localStorage.setItem('fruits', JSON.stringify(fruitsArray));

    // Retrieve the array from local storage
    const storedFruits = JSON.parse(localStorage.getItem('fruits'));
    setFruits(storedFruits);
  }, []);

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default LocalStorageExample;
```

In this example, we're storing an array of fruits in local storage, then retrieving it, parsing it back into an array with `JSON.parse`, and displaying it on the screen.

> **Note (注释):** Local Storage 只能存储字符串，存储对象或数组时必须先 `JSON.stringify`，读取时再 `JSON.parse` 转换回原类型。否则会得到字符串 `"[object Object]"` 或直接出错。

### Clearing Local Storage and Removing Specific Items

Finally, we can clear all items from local storage using the `clear` method, and we can remove specific items using the `removeItem` method:

```jsx
import React from 'react';

const LocalStorageExample = () => {
  // Set some items
  localStorage.setItem('username', 'JohnDoe');
  localStorage.setItem('email', 'john.doe@example.com');

  // Remove a specific item
  localStorage.removeItem('username');

  // Clear all items
  localStorage.clear();

  return <p>Check your browser's local storage!</p>;
};

export default LocalStorageExample;
```

In this example, we're setting some items, removing a specific item, and then clearing all items. You can check the result in your browser's local storage.

That's it for local storage! In the next section, we'll explore how to work with session storage, which is very similar but has some key differences. Stay tuned!

---

## 3. Working with Session Storage

After exploring local storage, let's now turn our attention to session storage. The operations for session storage are similar to those for local storage, but remember, the data in session storage gets cleared when the page session ends.

### Setting and Getting Items in Session Storage

Just like local storage, we can set items in session storage using the `setItem` method, and we can get items using the `getItem` method.

Here's an example of how to set and get a simple string value:

```jsx
import React from 'react';

const SessionStorageExample = () => {
  // Set item in session storage
  sessionStorage.setItem('username', 'JohnDoe');

  // Get item from session storage
  const username = sessionStorage.getItem('username');

  return <p>Username: {username}</p>;
};

export default SessionStorageExample;
```

In this example, we're storing a username in session storage, then retrieving it and displaying it on the screen.

### Handling Non-Existent Items

If we try to get a non-existent item from session storage, it behaves the same way as local storage and returns `null`.

### Storing and Retrieving Arrays

Just like local storage, session storage only supports string values. If we want to store arrays or objects, we need to convert them to strings using `JSON.stringify` and retrieve them using `JSON.parse`:

```jsx
import React, { useEffect, useState } from 'react';

const SessionStorageExample = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Store an array in session storage
    const fruitsArray = ['Apple', 'Banana', 'Orange'];
    sessionStorage.setItem('fruits', JSON.stringify(fruitsArray));

    // Retrieve the array from session storage
    const storedFruits = JSON.parse(sessionStorage.getItem('fruits'));
    setFruits(storedFruits);
  }, []);

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default SessionStorageExample;
```

In this example, we're storing an array of fruits in session storage, then retrieving it, parsing it back into an array with `JSON.parse`, and displaying it on the screen.

### Clearing Session Storage and Removing Specific Items

We can clear all items from session storage using the `clear` method, and we can remove specific items using the `removeItem` method:

```jsx
import React from 'react';

const SessionStorageExample = () => {
  // Set some items
  sessionStorage.setItem('username', 'JohnDoe');
  sessionStorage.setItem('email', 'john.doe@example.com');

  // Remove a specific item
  sessionStorage.removeItem('username');

  // Clear all items
  sessionStorage.clear();

  return <p>Check your browser's session storage!</p>;
};

export default SessionStorageExample;
```

In this example, we're setting some items, removing a specific item, and then clearing all items. You can check the result in your browser's session storage.

That's all for session storage! Remember, the main difference between local storage and session storage is that session storage data is lost as soon as the browser (or tab) is closed. This is not the case with local storage, which persists until explicitly cleared.
