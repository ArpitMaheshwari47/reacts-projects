import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  
  const inputRef = useRef(null);

  // using useMemo for avoid uncessary re render for this calculation

  const filteredItem = useMemo(()=>{
   return items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  })},[items,query])

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  };

  return (
    <>
      Search:
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="search" />
        <button type="submit">Add</button>
      </form>
      <h1>Items:</h1>
      {filteredItem.map((item) => {
        return <div>{item}</div>;
      })}
    </>
  );
}

export default App;
