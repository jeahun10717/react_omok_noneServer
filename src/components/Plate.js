import React from "react";
import "./Plate.css"


const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

class Plate extends React.Component{

    render(){
        return <div>
            <table key="omokPlate" className="omokPlate">
                <tbody>
                {arr.map((i)=>(
                    <tr key = {i} className={i}>
                        {
                            arr.map((j)=>(
                                <td key={j} className={j}>
                                    <button onClick={()=>(this.props.change(i, j))}></button>
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