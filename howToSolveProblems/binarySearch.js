function binarySearch(arr, element) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        let current=arr[middle];

        if(current<element)
        {
            min=middle+1;
        }
        else if(current>element)
        {
            max=middle-1;
        }
        else{
            return middle;
        }
    }
    return -1;
}


console.log(binarySearch([1, 2, 2, 2, 3, 4, 110, 12213], 1));
