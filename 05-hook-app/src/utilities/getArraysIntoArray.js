export default function getArraysIntoArray(
    array, 
    {
        minElementsByArray, 
        maxElementsByArray, 
        cols
    } = {
        minElementsByArray: 2, 
        maxElementsByArray: 3, 
        cols: 4
    }
) {
    const newArray = [];
    let prevInitialPosition = 0;

    for (let i = 0; i < cols; i++) {
        const elementsByArray = Math.random() < 0.5 ? minElementsByArray:maxElementsByArray;
        const initPosition = prevInitialPosition;
        const endPosition = initPosition + elementsByArray;
        prevInitialPosition = endPosition;
        newArray[i] = array.slice(initPosition, endPosition);
    }

    return newArray;
}