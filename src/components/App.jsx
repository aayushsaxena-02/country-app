import React from "react";
import Title from "./Title";
import Body from "./Body";
import Searchbox from "./Searchbox";

function App(){
  return (
    <div>
    
    <Title />
    <Searchbox  handleChange={(e) => console.log(e.target.value)} />  
    <Body />
    </div>  
  );
};

export default App;
