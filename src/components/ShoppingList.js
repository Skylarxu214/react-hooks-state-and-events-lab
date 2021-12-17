import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelected] = useState("All")
  

  function handleEventchanges(event){
    setSelected(event.target.value)
  }

  function displays(){
    const newItems = items.filter(item => item.category === selectedCategory)

    if(selectedCategory === "All"){
      return items 
  
    }else{  
      return newItems
      
    }
  }
    return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleEventchanges}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displays().map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
