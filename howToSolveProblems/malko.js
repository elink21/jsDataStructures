function same(arrA, arrB) {
    frequency = {};

    arrA.forEach(element => {
        if (!frequency.hasOwnProperty(element)) {
            frequency[element ** 2] = 1;
        }
        else {
            frequency[element ** 2] += 1;
        }
    });

    for (let i = 0; i < arrB.length; i++) {
        const element = arrB[i];
        if (!frequency.hasOwnProperty(element)) {
            return false;
        }

        frequency[element] -= 1;
        if (frequency[element] < 0) {
            return false;
        }
    }



    keys = Object.keys(frequency);
    for (let i = 0; i < keys.length; i++) {
        if (frequency[keys[i]] != 0) {
            return false;
        }
    }

    return true;
}


arrA = [1, 2, 1];
arrB = [1, 4, 4];

console.log(same(arrA, arrB));