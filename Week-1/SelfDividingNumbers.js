var selfDividingNumbers = function(left, right) {
    var result = [],toString;

    for(var i=left;i<=right;i++){
        if(check(i)){
             result.push(i)
           }
    }

    function check(numberC){
        var nString = numberC.toString();
        var nLength = nString.length;
        var counter = 0;
        for(var number of nString){
            number = parseInt(number,10)
            if(numberC%number === 0){
                counter++
               }
        }

        if(counter == nLength) return true
        return false

    }

    return result
};
