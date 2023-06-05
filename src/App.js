import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">
        {" "}
        Phonebook App - with Redux Toolkit and Flowbite
      </h1>
      <AddFriend />
      <FriendsList />
    </div>
  );
}

export default App;
