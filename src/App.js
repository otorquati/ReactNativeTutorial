import Header from "./Components/Header";
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import SearchItem from "./Components/SearchItem";

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 10000);

  },[]);

  // Function to add a new item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {isLoading && <p style={{ marginTop: "2rem" }}>Loading items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        { !fetchError && !isLoading && <Content
        items={items.filter((item) =>
          ((item.item).toLowerCase()).includes(searchItem.toLowerCase())
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
