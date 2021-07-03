const copyArr = require('../rules/arrayCopy')

exports.prohibit3by3 = (plateArr, lineNum) => {
    let tmpArr;
    tmpArr = copyArr.arrayCopy(plateArr, tmpArr, lineNum);
    let check3By3Arr = [];
    for (let i = 0; i < lineNum; i++) {
        for (let j = 0; j < lineNum; j++) {
            for (let depth = 0; ;depth++) {
                const element = array[depth];
                
            }
        }        
    }
    check3By3Arr[0]=tmpArr[i- depth ][j]+tmpArr[i+ depth ][j]
    check3By3Arr[1]=tmpArr[i- depth ][j+ depth ]+tmpArr[i+ depth ][j- depth ]
    check3By3Arr[2]=tmpArr[i][j+ depth ]+tmpArr[i][j- depth ]
    check3By3Arr[3]=tmpArr[i+ depth ][j+ depth ]+tmpArr[i- depth ][j- depth ]
    
    
    
}