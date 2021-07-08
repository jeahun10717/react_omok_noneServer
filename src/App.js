import React from "react"
import Plate from "./components/Plate"
const winRule = require('./rules/winRule')
const prohibitRule = require('./rules/prohibitRule')
const arrayCopy = require('./rules/arrayCopy')

const max = 15;
const plateStateArr = Array.from(Array(max), () => Array(max).fill(0))
const emptyPlate = Array.from(Array(max), () => Array(max).fill(0))

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      plateState: plateStateArr,// 0 은 안놓아진 상태 , 1은 흑돌 -1 은 백돌
      turn: 0 // 0 일 때 흑돌차례, 1일 때 백돌차례
    }
    this.turnChange=this.turnChange.bind(this)
  }

  turnChange(i, j){// i, j 는 받아오는 좌표값
    let tmpArr;
	tmpArr = arrayCopy.arrayCopy(this.state.plateState, tmpArr, max);
    let winResult, prohibit3By3, prohibit4By4;
    if(this.state.plateState[i][j]===0){
      if(this.state.turn===0){
        tmpArr[i][j]=1
		// console.log(tmpArr);
        winResult = winRule.winRule(this.state.turn, tmpArr, max)
		prohibit3By3 = prohibitRule.prohibit3by3(tmpArr, max, i, j)
		prohibit4By4 = prohibitRule.prohibit4By4(tmpArr, max, i, j)
        console.log(prohibit4By4);
		// console.log(winResult);
		if(prohibit3By3 === "prohibit"){
			tmpArr[i][j] = 0;
			this.setState({turn:0})
		}else if(prohibit4By4 === "prohibit"){
			tmpArr[i][j] = 0;
			this.setState({turn:0})
		}else if(winResult==="prohibitRule"){ // 6목 이상일 때
          console.log("6목 금지");
          tmpArr[i][j]=0
          this.setState({turn:0})
        }else if(winResult==="blackWin"){
          window.location.href = "http://localhost:3000/"
        }else if(winResult==="continue"){
        this.setState({
          plateState:tmpArr,
          turn:1
        })}
    
      }else{
        tmpArr[i][j]=-1
        winResult = winRule.winRule(this.state.turn, tmpArr, max)
        if(winResult==="long"){
			
		}else if(winResult==="whiteWin"){
          window.location.href = "http://localhost:3000/"
          // this.setState({
          //   plateState:emptyPlate.map(v=>v.slice()),
          //   turn:1
          // })
        }
        this.setState({
          plateState:tmpArr,
          turn:0
        }) 
      }
    }else{
      return;
    }
  }

  render(){
    return (
      <div>
        <Plate change={this.turnChange} plateArr={this.state.plateState} turn={this.state.turn}/>
      </div>
    );
  }
}


export default App;
