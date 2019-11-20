var numSpecialEquivGroups = function(A) {
    var odd;
    var even;
    var key;
    var count = 0;
    var map = {};
    for (var i = 0; i < A.length; i++) {
        console.log("corte")
        odd = [];
        even = [];
        for (var j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                even.push(A[i][j]);
            } else {
                odd.push(A[i][j]);
            }
        }
        console.log(odd.sort())
        console.log(even.sort())

        even.sort();
        odd.sort();

        key = even.join("") + odd.join("");
        if (!map[key]) {
            map[key] = true;
            count++;
        }
    }

    return count;
};
