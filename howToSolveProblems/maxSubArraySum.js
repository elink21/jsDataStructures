function maxSubArraySumNaive(array, size) {
    let maxSubSet = [];
    let maxSum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((i + size) < array.length) {
            let subSet = array.slice(i, i + size);
            let actualSum = subSet.reduce(function (a, b) { return a + b });
            if (actualSum > maxSum) {
                maxSubSet = subSet;
                maxSum = actualSum;
            }
        }
    }

    return [maxSubSet, maxSum];
}

function maxSubArraySumEfficient(arr, n) {
    if (arr.length < n) {
        return undefined;
    }
    let right = n-1, left = 0;
    let maxSum = 0;
    let lastSum = 0;

    for (let i = 0; i < n; i++) {
        lastSum += arr[i];
    }
    console.log("Initial sum:",lastSum);

    while (right < arr.length-1) {
        right += 1;
        left += 1;

        let actualSum = lastSum;
        actualSum -= arr[left - 1];
        actualSum += arr[right];

        if (actualSum > maxSum) {
            maxSum = actualSum;
        }

        console.log("Actual bounds: ",arr[left],"-",arr[right],"|",actualSum);
        lastSum = actualSum;
    }

    return maxSum;
}


console.log(maxSubArraySumEfficient([1, 2, 5, 2, 8, 1, 5], 2))