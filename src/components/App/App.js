import React from "react";
import "./App.css";
import { Input } from "../Input";
import { Item } from "../Item";
import { useState } from "react";


function App() {

  const [text, setText] = useState("");
    
  function handleChange(e) {
    setText(e.target.value) 
  }

  return (
    <main className="App">
      <h1>Font Viewer</h1>
      <Input theValue={handleChange}/>
      
      <Item theText = {text} font={'Verdana'} />
      <Item theText = {text} font={'Times New Roman'} />
      <Item theText = {text} font={'san-serif'}/>
      <Item theText = {text} font={'Comic Sans'}/>
      <Item theText = {text} font={'Arial'}/>
      <Item theText = {text} font={'Monaco'}/>
      <Item theText = {text} font={'Roboto Mono'}/>
    </main>
  );
}

export default App;
