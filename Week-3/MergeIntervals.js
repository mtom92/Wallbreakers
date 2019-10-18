var merge = function(intervals) {
     if (!intervals || intervals.length == 0) return intervals;
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });

    var ans = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        var start = intervals[i][0];
        var end = intervals[i][1];
        var len = ans.length - 1;
        var end_a = ans[len][1];
        if (end_a >= start) {
            ans[len][1] = Math.max(end, end_a);
        } else {
            ans.push(intervals[i]);
        }
    }
    return ans;
};
