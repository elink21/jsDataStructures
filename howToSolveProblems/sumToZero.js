function sumZeroNaive(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const elementB = array[j];
            if (element + elementB == 0) {
                return [element, elementB];
            }
        }
    }
    return undefined;
}

function sumZeroEfficient(arr)
{
    let right=arr.length-1;
    let left= 0;
    while(right>left)
    {
        let sum= arr[left]+arr[right]
        if(sum==0)
        {
            return [arr[left],arr[right]]
        }
        if(sum>0)
        {
            right-=1;
        }
        else{
            left+=1;
        }
    }
    return undefined;
}


console.log(sumZeroEfficient([-3, -2, -1, 0, 10, 20, 10]));