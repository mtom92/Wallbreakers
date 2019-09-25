var hammingDistance = function(x, y) {
    return  (x^y).toString(2).split("").filter(n => n == 1).length
};
