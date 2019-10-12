var findContentChildren = function(g, s) {
    if(g.length == 0 || s.length == 0) return 0

    s.sort(function(a,b){return a-b});
    g.sort(function(a,b){return a-b});

        var i = 0;
        var j = 0;
        var count = 0;

        while (i != g.length && j != s.length) {
            if (g[i] <= s[j]) {
                count++;
                i++;
                j++;
            } else {
                j++;
            }
        }

        return count;
};
