// source: https://github.com/machadop1407/redux-crud-react
// useSelector is a hook that allows you to extract data from the Redux store state,
// using a selector function.
// in simpler terms, you use this whenever you want to read the current value of one of the
// states that you created in your store.
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateName } from "./features/Users";
import { useState } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // state.users is the users state that we created in the store.
  // .value is what we defined in the initialState of the users slice.
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h1 className="text-3xl">
        Phonebook App - with Redux Toolkit and Flowbite
      </h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>

      <div className="displayUsers">
        {userList.map((user) => (
          <div className="user" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <input
              type="text"
              placeholder="New Name"
              onChange={(event) => setNewName(event.target.value)}
            />
            <button
              onClick={() =>
                dispatch(updateName({ id: user.id, name: newName }))
              }
            >
              Update
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
