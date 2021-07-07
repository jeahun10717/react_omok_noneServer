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

    console.log(threeCnt, "123123123123123");
    let threeState = Array.from(Array(4).fill(false))
    if (threeCnt > 1) {
        // 3 라인일 때
        for (let q = 0; q < 4; q++) {
            if(check3By3Arr[q]===3){
                if(threeLineChk(tmpArr, q, i, j)==="3By3"){
                    threeState[q]=true
                }else if(threeLineChk(tmpArr, q, i, j)==="none3By3"){
                    threeState[q]=false
                }
            }            
        }
        // 4 라인일 떄 
    }
    console.log(threeState);
    if(threeState.filter(i=>i===true).length>=2){
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
                if (blackCnt === 1) {
                    firstBlack = [i - 3 + x, j]
                }
                if (blackCnt === 3) {
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
                if (blackCnt === 1) {
                    firstBlack = [i - 3 + x, j + 3 - x]
                }
                if (blackCnt === 3) {
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
                if (blackCnt === 1) {
                    firstBlack = [i, j + 3 - x]
                }
                if (blackCnt === 3) {
                    lastBlack = [i, j + 3 - x]
                }
            }
        }
        for (let y = 0; y < (lastBlack[0] - firstBlack[0]) + 1; y++) {
            tmpBlackArr[y] = arr[firstBlack[0]][firstBlack[1] - y]
        }
        if (tmpBlackArr.length <= 4) { // 4칸 이
            if (tmpBlackArr.filter(i => i === -1).length === 1) {
                return "none3By3"
            } else {
                if (firstBlack[1] + 1 > 14 || lastBlack[1] - 1 < 0) { // 3개 놓은 돌 중에 위아래가 벽인 경우
                    return "none3By3"
                } else if (arr[firstBlack[0]][firstBlack[1]+1] === -1 || arr[lastBlack[0]][lastBlack[1]-1] === -1) {
                    return "none3By3"
                } else if (arr[firstBlack[0]][firstBlack[1]+1] === 0 && arr[lastBlack[0]][lastBlack[1]-1] === 0) {
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
                if (blackCnt === 1) {
                    firstBlack = [i + 3 - x, j + 3 - x]
                }
                if (blackCnt === 3) {
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

function fourLineChk(arr, line, i, j) {
    if (line === 0) {

    } else if (line === 1) {

    } else if (line === 2) {

    } else if (line === 3) {

    }
}