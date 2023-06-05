## Phonebook App - with Redux Toolkit and Flowbite

A simple CRUD application that allows you to store your friends' phone numbers. 

<img width="385" alt="Screenshot 2023-06-04 at 9 34 51 PM" src="https://github.com/nxabdullah/react-playground/assets/90593598/4965e4b8-ea05-4736-9001-524fd11e27e5">


### Purpose
The purpose for building this simple application was to get a hang of how  [Redux Toolkit](https://redux-toolkit.js.org/) and [Redux](https://redux.js.org/) works. Additionally, I was able to play around with the [Flowbite](https://flowbite.com/) which is a component library built on top of [TailwindCSS](https://tailwindcss.com/).

My goal is that anyone reading through through this project will be able to get a high level overview of how Redux Toolkit works. 

Note: This is a really simple application and it does not really make sense to use Redux for an application of such small scale (check out You '[When should I use Redux?](https://redux.js.org/faq/general#when-should-i-use-redux)' from the Redux Docs if interested in learning more). You can easily use `useContext` and `useReducer` to achieve the same state management as I have here. However, this still demonstrates how react toolkit works pretty well (in my opinion).

### Explaination

In this section, I will explain how this project works. I recommend you clone this project and follow along. I left a lot of comments so that it is easier to understand what is going on. 

#### Typical Structure
Here's a typical structure for a React application using Redux Toolkit:

```
/my-app
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── store.js
│   ├── features
│   │   ├── feature1
│   │   │   ├── Feature1.js
│   │   │   ├── feature1Slice.js
│   │   ├── feature2
│   │   │   ├── Feature2.js
│   │   │   ├── feature2Slice.js
│   ├── components
│   │   ├── Component1.js
│   │   ├── Component2.js
│   ├── App.js
│   ├── index.js
├── package.json
```

Now I did not completely follow this structure (and I might update this repo later to do that) but note the following: 

- `app`: This folder contains your Redux store configuration.
- `store.js`: This file configures the Redux store, middleware, and reducers.
- `features`: In Redux Toolkit, reducers and actions are typically grouped by 'feature' or domain of the application. Each feature might have its own folder, with a file for its slice.
- `feature1Slice.js`, `feature2Slice.js`: These files are where you define the reducers and actions for a given feature using Redux Toolkit's - `createSlice` function.
- `Feature1.js`, `Feature2.js`: These files are the React components that are connected to the Redux store and dispatch actions to it.
- `components`: This is where the rest of your React components live. They receive data from the Redux store via props and dispatch actions, but they don't know anything about Redux themselves. They should be mainly concerned with UI and not business logic.
- `App.js`: This is the main React component that wraps your entire application and includes the Redux Provider.
- `index.js`: This is the JavaScript entry point file. It usually contains just a few lines to render the App component.

#### How does this app work?

First, check out `index.js` -- Here we wrap our entire app with the store

Then, check out `store.js` itself -- this is our store. Here we define our reducer. 

Then, check out `FriendsSlice.js` -- Here we define our one and only slice. Note how we define reducers for each of our action(s). This is what makes state management "predictable" with Redux

The rest of the application is a trivial react application with one difference. We "dispatch" an "action" whenever we need to update our state (which re-renders the application). 

For example, this is (roughly) how we add a friend into the state. 

```
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
  
dispatch(
  addFriend({
    id: 0,
    name: "John Doe",
    phoneNumber: "647 777 1111",
  })
```

And this is (roughly) how we access the friends state:

```
import { useSelector } from "react-redux";

const friends = useSelector((state) => state.friends.value);

{friends.map((friend) => (
  <FriendCard friend={friend} key={friend.id} />
))}
```


### Why use Redux? 

TBD

### Key Concepts 

#### Store 

In Redux, the store is a JavaScript object that holds the state of your entire application. The store is the single source of truth for your state, meaning that any piece of state in your application should only be represented in one way in your store.

#### Slices

We have one store for our entire application but we can divide the store into slices, each slice managed by a different reducer.

#### Reducers

A reducer is a pure function that describes how an action transforms the state into the next state. Given the current state and an action, a reducer returns the next state.

Reducers are designed to be predictable and pure, meaning for a given input (current state and action), they will always produce the same output (new state), without causing any side effects.

Also, note how `configureStore` takes only one reducer. So what do we do when our app needs multiple reducers? 

In Redux, you usually have multiple reducers to manage different parts of the state, and you use Redux's combineReducers function to combine them into a single root reducer.
