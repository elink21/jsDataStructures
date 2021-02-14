function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1])
                //Swap
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
    return arr;
}

let arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
console.log(insertionSort(arr));