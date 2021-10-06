import ReactDOM from "react-dom";
import React from "react";
import "./index.css"
import Counter from "./components/counter/counter"
const App = () => {
 return (
   <div className = "root-wrapper">
      <Counter/>
   </div>
  )
 }
ReactDOM.render(<App />, document.getElementById('app'));