var plusOne = function(digits) {
    var last = digits[digits.length-1]+1
    if(last == 10){
       adding(digits,digits.length-1)
    }
    else{
        digits[digits.length-1]=last
    }

    function adding(numbers,pos){
        if(pos< 0){
         digits = [1].concat(numbers)
            return
           }
        else if(numbers[pos]+1 != 10){
              numbers[pos]++
              return
           }
        else{
            numbers[pos]=0;
            adding(numbers,pos-1);
        }
    }



    return digits
};
