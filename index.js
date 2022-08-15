import React from "react";
import ReactDOM  from "react-dom/client";
import TitleCard from "./components/Header"
import SearchBar from "./components/Searchbar"
import Items from "./items"
const root = ReactDOM.createRoot(
    document.getElementById('root')
  ); 
    const element = [<TitleCard/>,<SearchBar/>,<Items/>];
    root.render(element);