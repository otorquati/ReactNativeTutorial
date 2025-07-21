import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "items 2",
    },
    {
      id: 3,
      checked: false,
      item: "items 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      { items.length ? (
      <ul>
        {items.map((items) => (
          <li className="items" key={items.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(items.id)}
              checked={items.checked}
            />
            <label
              style={items.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(items.id)}
            >
              {items.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(items.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul> ):(
           <p style={{marginTop: '2rem'}}>Your shopping list is empty.</p>
      )}
    </main>
  );
};

export default Content;
