var isHappy = function(n) {
    if(n<0) return 0
    var results={}

    function square(num){
        var result = 0
        num = num.toString().split("")

        num.forEach(nu=>{
            result += nu**2
        })

        if(result ===1){
            return true
           }

        else if(results[result]){
            return false
                }
        else{
            results[result]=1
            return square(result)
        }
    }



    return square(n)

};
