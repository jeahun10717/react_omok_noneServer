exports.arrayCopy = (copiedArray, array, max) => { // array=copiedArray 이다. 배열복사임
    array = Array.from(Array(max), () => Array(max).fill(0))
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < max; j++) {
            array[i][j] = copiedArray[i][j];            
        }        
    }
    return array;
    // console.log(array);
}