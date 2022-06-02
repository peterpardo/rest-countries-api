import "./empty.css";
import React from 'react';
import Navbar from "../../components/navbar/Navbar";


const Empty = () => {
  return (
    <div>
      <Navbar/>

      <div className="emptyContainer">
        There's nothing here!
      </div>
    </div>
  )
}

export default Empty