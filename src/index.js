exports.min = function min(array) {
    if (array && array.length) {
        let min = array[0];
        array.forEach((item) => {
            if (item < min) min = item;
        })
        return min;
    } else return 0;
}

exports.max = function max(array) {
    if (array && array.length) {
        let max = array[0];
        array.forEach((item) => {
            if (item > max) max = item;
        })
        return max;
    } else return 0;
}

exports.avg = function avg(array) {
    if (array && array.length) {
        return array.reduce((acc, curr) => acc + curr) / array.length;
    } else return 0;
}
