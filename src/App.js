import React, { useState } from 'react';
import './App.css';
import  Nav  from "./components/Nav"
import { Menu } from "./components/Menu"
import menuItems from "./components/MenuApi";

function App() {
  const [menuData, setMenuData] = useState(menuItems)


  function filterItem(e){

    const updatedList = menuItems.filter((currElem) => {
      return currElem.category === e;
    });
    setMenuData(updatedList);
  }
  return (
    <>
      <Nav menuData={menuData} filterItem={filterItem} />
      <Menu menuData={menuData}  />

    </>

  );
}

export default App;
