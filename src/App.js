import { useState } from "react";
import "./App.scss";
import ProgressBar from "./components/ProgressBar";
import ListItem from "./components/ListItem";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function App() {
  const [listItems, setListItems] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeAddListItem, setActiveAddListItem] = useState(false);
  const [listItem, setListItem] = useState({
    completed: false,
    title: "",
    category: "",
    dueDate: [0, 0],
    // dueDate will  be a drop down menu, 1-31 days & 1-12 months
    reocurring: false,
  });
  return (
    <div className="container">
      {/* need to remove this class^ or at least replace  */}
      <div className="searchbar">
        <button
          onClick={() => {
            setActiveSearch(!activeSearch);
            setActiveAddListItem(false);
          }}
        >
          <FaSearch />
        </button>
        <button
          onClick={() => {
            setActiveAddListItem(!activeAddListItem);
            setActiveSearch(false);
            setListItem({
              completed: false,
              title: "",
              category: "",
              dueDate: [0, 0],
              reocurring: false,
            });
          }}
        >
          <IoMdAdd />
        </button>
        <ProgressBar totalCompleted={10} />
      </div>
      {activeSearch && <input />}
      {activeAddListItem && <input />}
      {/* ^^ this will render looking like a list item to fill out */}
      <ul>
        {listItems.map((item, index) => {
          return <ListItem key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
