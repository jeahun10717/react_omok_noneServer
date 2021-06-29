exports.winRule = (i, j, turn, stoneArr, max) => { 
    //i,j 는 2차원 배열의 index, turn은 흑인지 백인지, 
    //sonteArr 는 판의 상태(2차원 배열), max 는 판의 최대 크기 
    const ruleCheckArr = stoneArr;
    if(turn === 1){//백돌 차례일 때 승리조건 판단

    }else{//흑돌 차례일 때 승리조건 판단

    }
}

function checkAround(i, j, turn, checkArr){ // 돌을 놓는 곳을 기준으로 8방향에서 돌이 존재하는 확인하는 부분
    // turn 은 흑,백돌을 판단하는 부분, checkArr 는 확인할 배열
    // checkArr[i-1][j-1]===turn 
    // checkArr[i][j-1]===turn 
    // checkArr[i+1][j-1]===turn 
    // checkArr[i-1][j]===turn 
    // checkArr[i+1][j]===turn 
    // checkArr[i-1][j+1]===turn 
    // checkArr[i][j+1]===turn 
    // checkArr[i+1][j+1]===turn 
}

exports.test = ()=>{
    console.log("test");
}