import React from "react"
import Plate from "./components/Plate"

const max = 15;
const plateStateArr = Array.from(Array(max), () => Array(max).fill(0))


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      plateState: plateStateArr,
      turn: 1, // turn 1 은 흑돌, turn -1 은 백돌
      stoneState: 0,
      stoneColor: " "
    }
    this.turnChange=this.turnChange.bind(this)
  }

  turnChange(i, j){
    console.log(i, j);
    const row = i;
    const col = j;
    // console.log(this.state.plateState);
    // console.log(this.state.plateState[i][j]);
    // if(this.state.plateState[row][col]===0){
    //   console.log("taldjalfgjkdalfj");
    // }
    console.log(this.state.plateState.Array[0]);
    // if(this.state.plateState[i][j]===0){
    //   if(this.state.turn===1){
    //     this.setState({
    //       plateState.[i][j]: -1
    //     })
    //   }else if(this.state.turn===-1){ 
        
    //   }
    // }
  }

  render(){
    return (
      <div>
        <Plate change={this.turnChange} />
      </div>
    );
  }
}


export default App;
