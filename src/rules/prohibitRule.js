const {
    unstable_renderSubtreeIntoContainer
} = require('react-dom');
const copyArr = require('../rules/arrayCopy')

exports.prohibit3by3 = (plateArr, lineNum, i, j) => {
    let tmpArr;
    tmpArr = copyArr.arrayCopy(plateArr, tmpArr, lineNum);
    let check3By3Arr = [];
    for (let i = 0; i < 4; i++) {
        check3By3Arr[i] = 1;
    }
    for (let depth = 1; depth < 4; depth++) {
        if (i - depth >= 0) {
            if (tmpArr[i - depth][j] === 1) {
                check3By3Arr[0] = check3By3Arr[0] + tmpArr[i - depth][j] // Up
            }

        }
        if (i + depth <= 14) {
            if (tmpArr[i + depth][j] === 1) {
                check3By3Arr[0] = check3By3Arr[0] + tmpArr[i + depth][j] // Down
            }

        }
        if (i - depth >= 0 && j + depth <= 14) {
            if (tmpArr[i - depth][j + depth] === 1) {
                check3By3Arr[1] = check3By3Arr[1] + tmpArr[i - depth][j + depth] // Right Up
            }

        }
        if (i + depth <= 14 && j - depth >= 0) {
            if (tmpArr[i + depth][j - depth] === 1) {
                check3By3Arr[1] = check3By3Arr[1] + tmpArr[i + depth][j - depth] // Left Down
            }

        }
        if (j + depth <= 14) {
            if (tmpArr[i][j + depth] === 1) {
                check3By3Arr[2] = check3By3Arr[2] + tmpArr[i][j + depth] // Right
            }

        }
        if (j - depth >= 0) {
            if (tmpArr[i][j - depth] === 1) {
                check3By3Arr[2] = check3By3Arr[2] + tmpArr[i][j - depth] // Left
            }

        }
        if (i + depth <= 14 && j + depth <= 14) {
            if (tmpArr[i + depth][j + depth] === 1) {
                check3By3Arr[3] = check3By3Arr[3] + tmpArr[i + depth][j + depth] // Right Down           
            }

        }
        if (i - depth >= 0 && j - depth >= 0) {
            if (tmpArr[i - depth][j - depth] === 1) {
                check3By3Arr[3] = check3By3Arr[3] + tmpArr[i - depth][j - depth] // Left Up
            }

        }
        // const check3Num = check3By3Arr.filter(i=>3 === i).length;
        // console.log("test!!!!!!!!!!1", check3By3Arr);
    }
    let threeCnt = check3By3Arr.filter(element => element >= 3).length;

    let threeState = Array.from(Array(4).fill(false))
    if (threeCnt > 1) {
        // 3 라인일 때
        for (let q = 0; q < 4; q++) {
            if (check3By3Arr[q] === 3) {
                if (threeLineChk(tmpArr, q, i, j) === "3By3") {
                    threeState[q] = true
                } else if (threeLineChk(tmpArr, q, i, j) === "none3By3") {
                    threeState[q] = false
                }
            }
        }
        // 4 라인일 떄 
    }
    // console.log(threeState);
    if (threeState.filter(i => i === true).length >= 2) {
        return "prohibit"
    }
    // if(threeCnt>1) {
    //     
    //     // console.log(threeState);
    //     // console.log(threeState.find(element=>element===0));
    //     if(threeState.find(element=>element===0)){

    //     }else if(threeState.find(element=>element===0)){

    //     }else if(threeState.find(element=>element===0)){

    //     }else if(threeState.find(element=>element===0)){

    //     }
    // }
}

function threeLineChk(arr, line, i, j) { // line 은 방향
    if (line === 0) {
        let blackCnt = 0;
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        for (let x = 0; x < 7; x++) { // 위에서부터 차례로
            if (i - 3 + x >= 0 && i - 3 + x <= 14) { // 7개를 차례로 보되 인덱스가 0 이하 14 이상은 배열이 없으므로 패스

                if (arr[i - 3 + x][j] === 1) {
                    blackCnt++
                }
                if (blackCnt === 1 && arr[i - 3 + x][j] === 1) {
                    firstBlack = [i - 3 + x, j]
                }
                if (blackCnt === 3 && arr[i - 3 + x][j] === 1) {
                    lastBlack = [i - 3 + x, j]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0] + y][firstBlack[1]]
        }
        if (tmpBlackArr.length <= 4) { // 4칸 이
            if (tmpBlackArr.filter(i => i === -1).length === 1) {
                return "none3By3"
            } else {
                if (firstBlack[0] - 1 < 0 || lastBlack[0] + 1 > 14) { // 3개 놓은 돌 중에 위아래가 벽인 경우
                    return "none3By3"
                } else if (arr[firstBlack[0] - 1][firstBlack[1]] === -1 || arr[lastBlack[0] + 1][lastBlack[1]] === -1) {
                    return "none3By3"
                } else if (arr[firstBlack[0] - 1][firstBlack[1]] === 0 && arr[lastBlack[0] + 1][lastBlack[1]] === 0) {
                    return "3By3"
                }
            }
        } else {
            return "none3By3"
        }
    } else if (line === 1) {
        let blackCnt = 0;
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        for (let x = 0; x < 7; x++) { // 위에서부터 차례로
            if (i - 3 + x >= 0 && i - 3 + x <= 14 && j + 3 - x >= 0 && j + 3 - x <= 14) { // 7개를 차례로 보되 인덱스가 0 이하 14 이상은 배열이 없으므로 패스

                if (arr[i - 3 + x][j + 3 - x] === 1) {
                    blackCnt++
                }
                if (blackCnt === 1 && arr[i - 3 + x][j + 3 - x] === 1) {
                    firstBlack = [i - 3 + x, j + 3 - x]
                }
                if (blackCnt === 3 && arr[i - 3 + x][j + 3 - x] === 1) {
                    lastBlack = [i - 3 + x, j + 3 - x]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0] + y][firstBlack[1] - y]
        }
        if (tmpBlackArr.length <= 4) { // 4칸 이
            if (tmpBlackArr.filter(i => i === -1).length === 1) {
                return "none3By3"
            } else {
                if ((firstBlack[0] - 1 < 0 && firstBlack[1] + 1 > 14) || (lastBlack[0] + 1 > 14 && lastBlack[0] - 1 < 0)) { // 3개 놓은 돌 중에 위아래가 벽인 경우
                    return "none3By3"
                } else if (arr[firstBlack[0] - 1][firstBlack[1] + 1] === -1 || arr[lastBlack[0] + 1][lastBlack[1] - 1] === -1) {
                    return "none3By3"
                } else if (arr[firstBlack[0] - 1][firstBlack[1] + 1] === 0 && arr[lastBlack[0] + 1][lastBlack[1] - 1] === 0) {
                    return "3By3"
                }
            }
        } else {
            return "none3By3"
        }
    } else if (line === 2) {
        let blackCnt = 0;
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        for (let x = 0; x < 7; x++) { // 위에서부터 차례로
            if (j + 3 - x >= 0 && j + 3 - x <= 14) { // 7개를 차례로 보되 인덱스가 0 이하 14 이상은 배열이 없으므로 패스

                if (arr[i][j + 3 - x] === 1) {
                    blackCnt++
                }
                if (blackCnt === 1 && arr[i][j + 3 - x] === 1) {
                    firstBlack = [i, j + 3 - x]
                }
                if (blackCnt === 3 && arr[i][j + 3 - x] === 1) {
                    lastBlack = [i, j + 3 - x]
                }
            }
        }
        for (let x = 0; x < (firstBlack[1] - lastBlack[1]) + 1; x++) {
            tmpBlackArr[x] = arr[firstBlack[0]][firstBlack[1] - x]
        }
        if (tmpBlackArr.length <= 4) { // 4칸 이
            if (tmpBlackArr.filter(i => i === -1).length === 1) {
                return "none3By3"
            } else {
                if (firstBlack[1] + 1 > 14 || lastBlack[1] - 1 < 0) { // 3개 놓은 돌 중에 위아래가 벽인 경우
                    return "none3By3"
                } else if (arr[firstBlack[0]][firstBlack[1] + 1] === -1 || arr[lastBlack[0]][lastBlack[1] - 1] === -1) {
                    return "none3By3"
                } else if (arr[firstBlack[0]][firstBlack[1] + 1] === 0 && arr[lastBlack[0]][lastBlack[1] - 1] === 0) {
                    return "3By3"
                }
            }
        } else {
            return "none3By3"
        }
    } else if (line === 3) {
        let blackCnt = 0;
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        for (let x = 0; x < 7; x++) { // 위에서부터 차례로
            if (i + 3 - x >= 0 && i + 3 - x <= 14 && j + 3 - x >= 0 && j + 3 - x <= 14) { // 7개를 차례로 보되 인덱스가 0 이하 14 이상은 배열이 없으므로 패스

                if (arr[i + 3 - x][j + 3 - x] === 1) {
                    blackCnt++
                }
                if (blackCnt === 1 && arr[i + 3 - x][j + 3 - x]) {
                    firstBlack = [i + 3 - x, j + 3 - x]
                }
                if (blackCnt === 3 && arr[i + 3 - x][j + 3 - x]) {
                    lastBlack = [i + 3 - x, j + 3 - x]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0] - y][firstBlack[1] - y]
        }
        if (tmpBlackArr.length <= 4) { // 4칸 이
            if (tmpBlackArr.filter(i => i === -1).length === 1) {
                return "none3By3"
            } else {
                if ((firstBlack[0] + 1 > 14 && firstBlack[1] + 1 > 14) || (lastBlack[0] - 1 < 0 && lastBlack[0] - 1 < 0)) { // 3개 놓은 돌 중에 위아래가 벽인 경우
                    return "none3By3"
                } else if (arr[firstBlack[0] + 1][firstBlack[1] + 1] === -1 || arr[lastBlack[0] - 1][lastBlack[1] - 1] === -1) {
                    return "none3By3"
                } else if (arr[firstBlack[0] + 1][firstBlack[1] + 1] === 0 && arr[lastBlack[0] - 1][lastBlack[1] - 1] === 0) {
                    return "3By3"
                }
            }
        } else {
            return "none3By3"
        }
    }
}

exports.prohibit4By4 = (plateArr, lineNum, i, j) => {
    let tmpArr;
    tmpArr = copyArr.arrayCopy(plateArr, tmpArr, lineNum);
    let check4By4Arr = [];
    for (let x = 0; x < 4; x++) {
        check4By4Arr[x] = fourBlackCnt(tmpArr, x, i, j);
    }
    let fourState = Array.from(Array(4).fill(false))
    if (check4By4Arr.filter(element => element === 4).length >= 2) { // 1줄에 4인개 2개 이상일 때
        for (let x = 0; x < 4; x++) {
            if (check4By4Arr[x] === 4) { // 4개인 부붙의 인덱스를 확인하기 위한 for 문
                let fourChk = fourCheck(tmpArr, x, i, j);
                console.log(fourChk, "hhhhhhhhhhhhh");
                if (fourChk === "4By4") {
                    fourState[x] = true;
                } else if (fourChk === "none4By4") {
                    fourState[x] = false;
                }
            }
        }
    } else if (check4By4Arr.filter(element => element === 5).length === 1) {
        for (let x = 0; x < 4; x++) {
            if(check4By4Arr[x] === 5){
                let fourFiveChk = five4By4Check(tmpArr, x, i, j);
                if(fourFiveChk === "4By4"){
                    return "prohibit";
                }
            }
        }
    } else if (check4By4Arr.filter(element => element === 6).length === 1) {

    } else if (check4By4Arr.filter(element => element === 7).length === 1) {

    }
    console.log(fourState);
    if (fourState.filter(element => element === true).length >= 2) {
        return "prohibit"
    }
}

function five4By4Check(arr, line, i, j) {
    if (line === 0) {
        if (i - 3 >= 0 && i + 3 <= 14) {
            if( arr[i-3][j]===1 && arr[i-2][j]===0 &&
                arr[i-1][j]===1 && arr[i][j]===1 && 
                arr[i+1][j]===1 && arr[i+2][j]===0 && arr[i+3][j]===1 ){return "4By4"}
            else{ return "none4By4"}
        }
    } else if (line === 1) {
        if (i + 3 <= 14 && j - 3 >= 0 && i - 3 >= 0 && j + 3 <= 14) {
            if(arr[i+3][j-3]===1 && arr[i+2][j-2]===0 && 
                arr[i+1][j-1]===1 && arr[i][j]===1 && arr[i-1][j+1]===1 && 
                arr[i-2][j+2]===0 && arr[i-3][j+3]===1){return "4By4"}
            else{ return "none4By4"}
        }
    } else if (line === 2) {
        if (j+3<=14 && j-3>=0){
            if(arr[i][j-3] === 1 && arr[i][j-2] === 0 && arr[i][j-1] === 1 &&
                 arr[i][j] === 1 && arr[i][j+1] === 1 && arr[i][j+2] === 0 && arr[i][j+3] === 1){return "4By4"}
            else{ return "none4By4"}
        }
    } else if (line === 3) {
        if(i+3<=14 && j+3<=14 && i-3>=0 && j-3>=0){
            if(arr[i-3][j-3]===1 && arr[i-2][j-2]===0 && arr[i-1][j-1]===1 && 
                arr[i][j]===1 && arr[i+1][j+1]===1 && arr[i+2][j+2]===0 && arr[i+3][j+3]===1){return "4By4"}
            else{ return "none4By4"}
        }
    }
}


function fourCheck(arr, line, i, j) {
    if (line === 0) {
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i + k >= 0 && i + k <= 14) { // UP to DOWN : i 의 범위는 0~14까지만 가능
                if (arr[i + k][j] === 1) {
                    blackCnt++;
                }
                if (blackCnt === 1 && arr[i + k][j] === 1) {
                    firstBlack = [i + k, j]
                }
                if (blackCnt === 4 && arr[i + k][j] === 1) {
                    lastBlack = [i + k, j]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0] + 1); y++) {
            tmpBlackArr[y] = arr[firstBlack[0] + y][firstBlack[1]]
        }
        if (tmpBlackArr.length <= 5) {
            if (tmpBlackArr.filter(element => element === -1).length === 1) {
                return "none4By4"
            } else {
                return "4By4"
            }
        }
    } else if (line === 1) {
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i + k >= 0 && i + k <= 14 && j - k >= 0 && j - k <= 14) { // RIGHT_UP to LEFT_DOWN : i 의 범위는 0~14까지만 가능
                if (arr[i + k][j - k] === 1) {
                    blackCnt++;
                }
                if (blackCnt === 1 && arr[i + k][j - k] === 1) {
                    firstBlack = [i + k, j - k]
                }
                if (blackCnt === 4 && arr[i + k][j - k] === 1) {
                    lastBlack = [i + k, j - k]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0] + y][firstBlack[1] - y]
        }
        if (tmpBlackArr.length <= 5) {
            if (tmpBlackArr.filter(element => element === -1).length === 1) {
                return "none4By4"
            } else {
                return "4By4"
            }
        }
    } else if (line === 2) {
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (j + k >= 0 && j + k <= 14) { // DOWN TO UP : i 의 범위는 0~14까지만 가능
                if (arr[i][j - k] === 1) {
                    blackCnt++;
                }
                if (blackCnt === 1 && arr[i][j - k] === 1) {
                    firstBlack = [i, j - k]
                }
                if (blackCnt === 4 && arr[i][j - k] === 1) {
                    lastBlack = [i, j - k]
                }
            }
        }
        for (let x = 0; x < (firstBlack[1] - lastBlack[1]) + 1; x++) {
            tmpBlackArr[x] = arr[firstBlack[0]][firstBlack[1] - x]
        }

        if (tmpBlackArr.length <= 5) {
            if (tmpBlackArr.filter(element => element === -1).length === 1) {
                return "none4By4"
            } else {
                return "4By4"
            }
        }
    } else if (line === 3) {
        let firstBlack = [];
        let lastBlack = [];
        let tmpBlackArr = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i - k >= 0 && i - k <= 14 && j - k >= 0 && j - k <= 14) { // RIGHT_DOWN to LEFT_UP : i 의 범위는 0~14까지만 가능
                if (arr[i - k][j - k] === 1) {
                    blackCnt++;
                }
                if (blackCnt === 1 && arr[i - k][j - k] === 1) {
                    firstBlack = [i - k, j - k]
                }
                if (blackCnt === 4 && arr[i - k][j - k] === 1) {
                    lastBlack = [i - k, j - k]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0] - y][firstBlack[1] - y]
        }
        console.log(tmpBlackArr, "asdlkfjaldsfjlasdjkfladjsadslfjalsdkfjasljk");
        if (tmpBlackArr.length <= 5) {
            if (tmpBlackArr.filter(element => element === -1).length === 1) {
                return "none4By4"
            } else {
                return "4By4"
            }
        }

    }
}

function fourBlackCnt(arr, line, i, j) { // 착수지점 기준으로 4방향의 배열에서 흑돌이 갯수 측정
    if (line === 0) {
        let firstBlack = [];
        let lastBlack = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i + k >= 0 && i + k <= 14) { // UP to DOWN : i 의 범위는 0~14까지만 가능
                if (arr[i + k][j] === 1) {
                    blackCnt++;
                }
                //     if(blackCnt === 1 && arr[i + k][j]){
                //         firstBlack = [i + k, j]
                //     }
                //     if(blackCnt === 4 && arr[i + k][j]){
                //         lastBlack = [i + k][j]
                //     }
                // }
            }
            // if(blackCnt === 4){ // 검은돌이 4개 나왔을 때
            //     if(lastBlack[0]-firstBlack[0]===4){ // 검은돌이 5개 이하 일 때

            //     }else if(lastBlack[0]-firstBlack[0]===5){

            //     }
        }
        return blackCnt;
    } else if (line === 1) {
        let firstBlack = [];
        let lastBlack = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i + k >= 0 && i + k <= 14 && j - k >= 0 && j - k <= 14) { // RIGHT_UP to LEFT_DOWN : i 의 범위는 0~14까지만 가능
                if (arr[i + k][j - k] === 1) {
                    blackCnt++;
                }
            }
        }
        return blackCnt;
    } else if (line === 2) {
        let firstBlack = [];
        let lastBlack = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (j + k >= 0 && j + k <= 14) { // DOWN TO UP : i 의 범위는 0~14까지만 가능
                if (arr[i][j - k] === 1) {
                    blackCnt++;
                }
            }
        }
        return blackCnt;
    } else if (line === 3) {
        let firstBlack = [];
        let lastBlack = [];
        let blackCnt = 0;
        for (let k = -4; k <= 4; k++) {
            if (i - k >= 0 && i - k <= 14 && j - k >= 0 && j - k <= 14) { // RIGHT_DOWN to LEFT_UP : i 의 범위는 0~14까지만 가능
                if (arr[i - k][j - k] === 1) {
                    blackCnt++;
                }
            }
        }
        return blackCnt;
    }
}