function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfLowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfLowest]) { indexOfLowest = j; }
        }
        if (indexOfLowest != i)
            [arr[i], arr[indexOfLowest]] = [arr[indexOfLowest], arr[i]];
    }
    return arr;
}

let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10000));
console.log(selectionSort(arr));