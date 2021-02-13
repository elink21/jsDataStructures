function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let noSwaps=true;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
                noSwaps=false;
            }
        }
        if(noSwaps==true)
        {
            return arr;
        }
    }


}

let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000))
console.log(bubbleSort(arr));