exports.winRule = (turn, stoneArr, max) => { 
    //i,j 는 2차원 배열의 index, turn은 흑인지 백인지, 
    //sonteArr 는 판의 상태(2차원 배열), max 는 판의 최대 크기 
    const winCheckArr = stoneArr;

    console.log(winCheckArr);
    if(turn === 0){//흑돌 차례일 때 승리조건 판단
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                if(winCheckArr[i][j] === 0) {
                    continue;
                }
                else if(// RIGHT
                    winCheckArr[i][j]===1 && 
                    winCheckArr[i][j+1]===1 && 
                    winCheckArr[i][j+2]===1 && 
                     winCheckArr[i][j+3]===1 && 
                    winCheckArr[i][j+4]===1){
                        if(winCheckArr[i][j+5]===1){ // 6목 판단
                            return "prohibitRule"
                        }
                        if(winCheckArr[i][j+5]===1 && winCheckArr[i][j+6]===1){
                            return "prohibitRule"
                        }
                        if(winCheckArr[i][j+5]===1 && winCheckArr[i][j+6]===1 && winCheckArr[i][j+7]===1){
                            return "prohibitRule"
                        }
                        if(winCheckArr[i][j+5]===1 && winCheckArr[i][j+6]===1 && winCheckArr[i][j+7]===1 && winCheckArr[i][j+8]===1){
                            return "prohibitRule"
                        }
                        alert("흑 승리!")
                        return "blackWin"
                }else if( // RIGHT DOWN
                    i+4<=14 && j+4<=14 &&
                    winCheckArr[i][j]===1 && 
                    winCheckArr[i+1][j+1]===1 && 
                    winCheckArr[i+2][j+2]===1 && 
                    winCheckArr[i+3][j+3]===1 && 
                    winCheckArr[i+4][j+4]===1){
                    if(i+5<=14 && j+5<=14){
                        if(winCheckArr[i+5][j+5]===1){ // 6목 판단
                            return "prohibitRule"
                        }
                    }
                    if(i+6<=14 && j+6<=14){
                        if(winCheckArr[i+5][j+5]===1 && winCheckArr[i+6][j+6]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+7<=14 && j+7<=14){
                        if(winCheckArr[i+5][j+5]===1 && winCheckArr[i+6][j+6]===1 && winCheckArr[i+7][j+7]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+8<=14 && j+8<=14){
                        if(winCheckArr[i+5][j+5]===1 && winCheckArr[i+6][j+6]===1 && winCheckArr[i+7][j+7]===1 && winCheckArr[i+8][j+8]===1){
                            return "prohibitRule"
                        }
                    }
                    alert("흑 승리!")            
                    return "blackWin"
                }else if( // DOWN
                    i+4<=14 &&
                    winCheckArr[i][j]===1 && 
                    winCheckArr[i+1][j]===1 && 
                    winCheckArr[i+2][j]===1 && 
                    winCheckArr[i+3][j]===1 && 
                    winCheckArr[i+4][j]===1){
                    if(i+5<=14){
                        if(winCheckArr[i+5][j]===1){ // 6목 판단
                            return "prohibitRule"
                        }
                    }
                    if(i+6<=14){
                        if(winCheckArr[i+5][j]===1 && winCheckArr[i+6][j]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+7<=14){
                        if(winCheckArr[i+5][j]===1 && winCheckArr[i+6][j]===1 && winCheckArr[i+7][j]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+8<=14){
                        if(winCheckArr[i+5][j]===1 && winCheckArr[i+6][j]===1 && winCheckArr[i+7][j]===1 && winCheckArr[i+8][j]===1){
                            return "prohibitRule"
                        }
                    }
                    alert("흑 승리!")
                    return "blackWin"
                }else if( // LEFT DOWN
                    i+4<=14 && j-4>=0 &&
                    winCheckArr[i][j]===1 && 
                    winCheckArr[i+1][j-1]===1 && 
                    winCheckArr[i+2][j-2]===1 && 
                    winCheckArr[i+3][j-3]===1 && 
                    winCheckArr[i+4][j-4]===1){
                    if(i+5<=14 && j-5>=0){
                        if(winCheckArr[i+5][j-5]===1){ // 6목 판단
                            return "prohibitRule"
                        }
                    }
                    if(i+6<=14 && j-6>=0){
                        if(winCheckArr[i+5][j-5]===1 && winCheckArr[i+6][j-6]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+7<=14 && j-7>=0){
                        if(winCheckArr[i+5][j-5]===1 && winCheckArr[i+6][j-6]===1 && winCheckArr[i+7][j-7]===1){
                            return "prohibitRule"
                        }
                    }
                    if(i+7<=14 && j-7>=0){
                        if(winCheckArr[i+5][j-5]===1 && winCheckArr[i+6][j-6]===1 && winCheckArr[i+7][j-7]===1 && winCheckArr[i+8][j-8]===1){
                            return "prohibitRule"
                        }
                    }
                    alert("흑 승리!")
                    return "blackWin"
                }
                // else{ // winrule 에 걸리지 않을 경우
                //     return "continue"
                // }          
            }
        }
    }else if(turn === 1){//백돌 차례일 때 승리조건 판단
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                if(winCheckArr[i][j] === 0) {
                    continue;
                }
                if(// RIGHT
                    winCheckArr[i][j]===-1 && 
                    winCheckArr[i][j+1]===-1 && 
                    winCheckArr[i][j+2]===-1 && 
                    winCheckArr[i][j+3]===-1 && 
                    winCheckArr[i][j+4]===-1){
                        console.log(winCheckArr);
                        if(winCheckArr[i][j+5]===-1){ // 6목 판단
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1){
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1 && winCheckArr[i][j+7]===-1){
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1 && winCheckArr[i][j+7]===-1 && winCheckArr[i][j+8]===-1){
                            return "long"
                        }
                        alert("백 승리!")
                        return "whiteWin"
                }else if(// RIGHT
                    winCheckArr[i][j]===-1 && 
                    winCheckArr[i][j+1]===-1 && 
                    winCheckArr[i][j+2]===-1 && 
                     winCheckArr[i][j+3]===-1 && 
                    winCheckArr[i][j+4]===-1){
                        if(winCheckArr[i][j+5]===-1){ // 6목 판단
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1){
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1 && winCheckArr[i][j+7]===-1){
                            return "long"
                        }
                        if(winCheckArr[i][j+5]===-1 && winCheckArr[i][j+6]===-1 && winCheckArr[i][j+7]===-1 && winCheckArr[i][j+8]===-1){
                            return "long"
                        }
                        alert("백 승리!")
                        return "whiteWin"
                }else if( // RIGHT DOWN
                    i+4<=14 && j+4<=14 &&
                    winCheckArr[i][j]===-1 && 
                    winCheckArr[i+1][j+1]===-1 && 
                    winCheckArr[i+2][j+2]===-1 && 
                    winCheckArr[i+3][j+3]===-1 && 
                    winCheckArr[i+4][j+4]===-1){
                    if(i+5<=14 && j+5<=14){
                        if(winCheckArr[i+5][j+5]===-1){ // 6목 판단
                            return "long"
                        }
                    }
                    if(i+6<=14 && j+6<=14){
                        if(winCheckArr[i+5][j+5]===-1 && winCheckArr[i+6][j+6]===-1){
                            return "long"
                        }
                    }
                    if(i+7<=14 && j+7<=14){
                        if(winCheckArr[i+5][j+5]===-1 && winCheckArr[i+6][j+6]===-1 && winCheckArr[i+7][j+7]===-1){
                            return "long"
                        }
                    }
                    if(i+8<=14 && j+8<=14){
                        if(winCheckArr[i+5][j+5]===-1 && winCheckArr[i+6][j+6]===-1 && winCheckArr[i+7][j+7]===-1 && winCheckArr[i+8][j+8]===-1){
                            return "long"
                        }
                    }
                    alert("백 승리!")            
                    return "whiteWin"
                }else if( // DOWN
                    i+4<=14 &&
                    winCheckArr[i][j]===-1 && 
                    winCheckArr[i+1][j]===-1 && 
                    winCheckArr[i+2][j]===-1 && 
                    winCheckArr[i+3][j]===-1 && 
                    winCheckArr[i+4][j]===-1){
                    if(i+5<=14){
                        if(winCheckArr[i+5][j]===-1){ // 6목 판단
                            return "long"
                        }
                    }
                    if(i+6<=14){
                        if(winCheckArr[i+5][j]===-1 && winCheckArr[i+6][j]===-1){
                            return "long"
                        }
                    }
                    if(i+7<=14){
                        if(winCheckArr[i+5][j]===-1 && winCheckArr[i+6][j]===-1 && winCheckArr[i+7][j]===-1){
                            return "long"
                        }
                    }
                    if(i+8<=14){
                        if(winCheckArr[i+5][j]===-1 && winCheckArr[i+6][j]===-1 && winCheckArr[i+7][j]===-1 && winCheckArr[i+8][j]===-1){
                            return "long"
                        }
                    }
                    alert("백 승리!")
                    return "whiteWin"
                }else if( // LEFT DOWN
                    i+4<=14 && j-4>=0 &&
                    winCheckArr[i][j]===-1 && 
                    winCheckArr[i+1][j-1]===-1 && 
                    winCheckArr[i+2][j-2]===-1 && 
                    winCheckArr[i+3][j-3]===-1 && 
                    winCheckArr[i+4][j-4]===-1){
                    if(i+5<=14 && j-5>=0){
                        if(winCheckArr[i+5][j-5]===-1){ // 6목 판단
                            return "long"
                        }
                    }
                    if(i+6<=14 && j-6>=0){
                        if(winCheckArr[i+5][j-5]===-1 && winCheckArr[i+6][j-6]===-1){
                            return "long"
                        }
                    }
                    if(i+7<=14 && j-7>=0){
                        if(winCheckArr[i+5][j-5]===-1 && winCheckArr[i+6][j-6]===-1 && winCheckArr[i+7][j-7]===-1){
                            return "long"
                        }
                    }
                    if(i+7<=14 && j-7>=0){
                        if(winCheckArr[i+5][j-5]===-1 && winCheckArr[i+6][j-6]===-1 && winCheckArr[i+7][j-7]===-1 && winCheckArr[i+8][j-8]===-1){
                            return "long"
                        }
                    }
                    alert("백 승리!")
                    return "whiteWin"
                }
                // else{ // winrule 에 걸리지 않을 경우
                //     return "continue"
                // }          
            }
        }
    }
                    return "continue"

}