import React from "react"
import Plate from "./components/Plate"

const max = 15;
const plateStateArr = Array.from(Array(max), () => Array(max).fill(0))


class App extends React.Component{
  state = {
    plateState: plateStateArr
  }
  
  render(){
    return (
      <div>
        <Plate/>
      </div>
    );
  }
}


export default App;
