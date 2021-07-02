exports.winRule = (turn, stoneArr, max) => { 
    //i,j 는 2차원 배열의 index, turn은 흑인지 백인지, 
    //sonteArr 는 판의 상태(2차원 배열), max 는 판의 최대 크기 
    const winCheckArr = stoneArr;
    // console.log(winCheckArr);
    if(turn == 0){//흑돌 차례일 때 승리조건 판단
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                if(// RIGHT
                    winCheckArr[i][j]==1 && 
                    winCheckArr[i][j+1]==1 && 
                    winCheckArr[i][j+2]==1 && 
                    winCheckArr[i][j+3]==1 && 
                    winCheckArr[i][j+4]==1){
                        console.log(winCheckArr);
                        if(winCheckArr[i][j+5]==1){ // 6목 판단
                            console.log("t!!!!!!!!!");
                            return "prohibitRule"
                        }
                    alert("흑 승리!")
                    return "blackWin"
                }else if( // RIGHT DOWN
                    winCheckArr[i][j]==1 && 
                    winCheckArr[i+1][j+1]==1 && 
                    winCheckArr[i+2][j+2]==1 && 
                    winCheckArr[i+3][j+3]==1 && 
                    winCheckArr[i+4][j+4]==1){
                    alert("흑 승리!")            
                    return "blackWin"
                }else if( // DOWN
                    winCheckArr[i][j]==1 && 
                    winCheckArr[i+1][j]==1 && 
                    winCheckArr[i+2][j]==1 && 
                    winCheckArr[i+3][j]==1 && 
                    winCheckArr[i+4][j]==1){
                    alert("흑 승리!")
                    return "blackWin"
                }else if( // LEFT DOWN
                    winCheckArr[i][j]==1 && 
                    winCheckArr[i+1][j-1]==1 && 
                    winCheckArr[i+2][j-2]==1 && 
                    winCheckArr[i+3][j-3]==1 && 
                    winCheckArr[i+4][j-4]==1){
                    alert("흑 승리!")
                    return "blackWin"
                }else{ // winrule 에 걸리지 않을 경우
                    return "continue"
                }          
            }
        }
    }else if(turn == 1){//백돌 차례일 때 승리조건 판단
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                if(// LEFT
                    winCheckArr[i][j]==-1 && 
                    winCheckArr[i][j+1]==-1 && 
                    winCheckArr[i][j+2]==-1 && 
                    winCheckArr[i][j+3]==-1 && 
                    winCheckArr[i][j+4]==-1){
                    alert("백 승리!")
                    return "whiteWin"
                }else if( // LEFT DOWN
                    winCheckArr[i][j]==-1 && 
                    winCheckArr[i+1][j+1]==-1 && 
                    winCheckArr[i+2][j+2]==-1 && 
                    winCheckArr[i+3][j+3]==-1 && 
                    winCheckArr[i+4][j+4]==-1){
                    alert("백 승리!")
                    return "whiteWin"            
                }else if( // DOWN
                    winCheckArr[i][j]==-1 && 
                    winCheckArr[i+1][j]==-1 && 
                    winCheckArr[i+2][j]==-1 && 
                    winCheckArr[i+3][j]==-1 && 
                    winCheckArr[i+4][j]==-1){
                    alert("백 승리!")
                    return "whiteWin"
                }else if( // RIGHT DOWN
                    winCheckArr[i][j]==-1 && 
                    winCheckArr[i+1][j-1]==-1 && 
                    winCheckArr[i+2][j-2]==-1 && 
                    winCheckArr[i+3][j-3]==-1 && 
                    winCheckArr[i+4][j-4]==-1){
                    alert("백 승리!")
                    return "whiteWin"
                }          
            }
        }
    }
}

function checkAround(i, j, turn, checkArr){ // 돌을 놓는 곳을 기준으로 8방향에서 돌이 존재하는 확인하는 부분
    // turn 은 흑,백돌을 판단하는 부분, checkArr 는 확인할 배열
    // checkArr[i-1][j-1]==turn 
    // checkArr[i][j-1]==turn 
    // checkArr[i+1][j-1]==turn 
    // checkArr[i-1][j]==turn 
    // checkArr[i+1][j]==turn 
    // checkArr[i-1][j+1]==turn 
    // checkArr[i][j+1]==turn 
    // checkArr[i+1][j+1]==turn 
}

exports.test = ()=>{
    console.log("test");
}