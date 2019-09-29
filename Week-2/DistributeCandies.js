var distributeCandies = function(candies) {
    let store = {};
    let kind = 0;
    for (var i=0; i<candies.length;i++) {
        if (!store[candies[i]]) {
            store[candies[i]] = 1;
            kind ++;
        }
    }

    return Math.min(candies.length / 2, kind)
};
