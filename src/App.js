import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Common/Navbar/Navbar';
import Items from './Component/Pages/Items';
import AddTOcart from './Component/Pages/Add to Card/AddTOcart';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {

    // event.emit("onSearch", search)
  setSearchTerm(term)
  }

  
  return (
   <>
   <Navbar onSearch={handleSearch}/>
   <Items searchTerm={searchTerm}/>
   {/* <AddTOcart/> */}
   </>
  );
}

export default App;
