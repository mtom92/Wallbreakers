var myPow = function(x, n) {
    var map = new Map()

    function memoization(expo,num){

        if (num == 0) {
                return 1;
            } else if (num == 1) {
                return expo;
            } else if (num == -1) {
                return 1 / x;
            }

            if (map.has(num)) {
                return map.get(num);
            }

            var result = 0;
            if (num % 2 == 0) {

                result = memoization(expo, Math.floor(num / 2)) * memoization(expo, Math.floor(num / 2));
            } else {
                result = memoization(expo, Math.floor(num / 2)) * memoization(expo,num -  Math.floor(num / 2));
            }

            map.set(num, result);
            return result;
    }

    return memoization(x,n)
};
