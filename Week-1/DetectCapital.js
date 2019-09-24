var detectCapitalUse = function(word) {
    var capitals="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var counter = 0, first=false;

    for(var i=0;i<word.length;i++){

        if(capitals.includes(word[i])){
            counter++;
            if(i==0){
                first = true;
            }
        }
    }

    if(counter === 0) return true
    else if(counter === word.length){
             return true
            }
    else if(counter === 1 && first){
            return true
            }
    else{
        return false
    }
};
