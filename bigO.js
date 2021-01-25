//O(n) function for Gauss Series

function gaussSeries(n) {
    var res = 0;
    for (let i = 0; i <= n; i++) {
        res += i;
    }
    return res;
}

function gaussSeriesLinear(n) {
    return n * (n + 1) / 2;
}


console.log(gaussSeriesLinear(100));