var reverseWords = function(s) {
    var result = ""
    var transition
    var help

        transition = s.split(" ");
        for(var i=0;i<transition.length;i++){
            help= transition[i].split("")
            help = help.reverse().join("")
            if(i != 0 && i < transition.length){
                 result += " "+ help
            }else{
                result += help
            }

        }
    console.log(result)
    return result

};
