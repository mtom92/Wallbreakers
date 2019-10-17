var findMinArrowShots = function(points) {
     points =  points.sort(function(a,b){return a[1]-b[1]})
    var min = -Infinity
    var res = 0
    for(var coordinates of points){
        if(min < coordinates[0]){
            res++
            min = coordinates[1]
           }
        else{
            min = Math.min(min,coordinates[1])
        }
    }
    return res
};
