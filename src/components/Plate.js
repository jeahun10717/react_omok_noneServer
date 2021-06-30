import React from "react";
import "./Plate.css"

const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]



class Plate extends React.Component{
    render(){
        return <div>
           <div>
               {
                    (function () {
                        if(this.props.turn===0){
                            return <div>⚫️ 흑돌차례입니다 ⚫️</div>
                        }else{
                            return <div>⚪️ 백돌차례입니다 ⚪️</div>
                        }     
                    }).bind(this)()
               }
           </div>
            <table key="omokPlate" className="omokPlate">
                <tbody>
                {arr.map((i)=>(
                    <tr key = {i} className={i}>
                        {
                            arr.map((j)=>(
                                <td key={j} className={j}>
                                    <button onClick={()=>(this.props.change(i, j))}>
                                        {
                                            (function() {
                                                if(this.props.plateArr[i][j]===0) return(<div></div>)
                                                if(this.props.plateArr[i][j]===1) return(<div>⚫️</div>)
                                                if(this.props.plateArr[i][j]===-1) return(<div>⚪️</div>)
                                            }).bind(this)()
                                        }
                                    </button>
                                </td>
                            ))
                        }
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    }
}

export default Plate; 