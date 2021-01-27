function costlyAnagram(stringA, stringB) {
    return [...stringA].sort().join("") == [...stringB].sort().join("");
}

function linearAnagram(a, b) {
    if (a.length != b.length) {
        return false;
    }

    freq = {};

    for (let c of a) {
        freq[c] = (freq[c] || 0) + 1;
    }

    console.log(freq);

    for (let c of b) {
        if (!freq[c]) {
            return false;
        }
        freq[c] -= 1;
    }


    return true;
}

console.log(linearAnagram("iceman", "cinema"));