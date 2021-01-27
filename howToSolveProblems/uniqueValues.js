function countUniqueValues(array) {
    let lastDiff = 0;
    let actual = 0;
    let count = 0;
    if(array.length>0)
    {
        count+=1;
    }
    while (actual < array.length) {
        if (array[actual] != array[lastDiff]) {
            count += 1;
            lastDiff = actual;
        }

        else {
            actual += 1;
        }
    }
    return count;
}

console.log(countUniqueValues([]));