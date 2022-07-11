import React, { useRef } from "react";
import "../styles/App.css";
import Content from "./Content";
import Header from "./Header";
import SearchBar from "./SearchBar";



const App = () => {
  const totalContent = useRef();
  const inputRef = useRef();

 

  const onInputChange = () => {
    
  };

  return (
    <div id="main" ref={totalContent}>
      <Header />
      <div className="content">
        <SearchBar/>
        <Content />
      </div>
    </div>
  );
};

export default App;
