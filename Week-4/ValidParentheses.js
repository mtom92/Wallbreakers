var isValid = function(s) {
    if(!s.length) return true
    var stack=[]

    var map = {
        '{':'}',
        '(':')',
        '[':']'
    }

    for(var i=0; i<s.length; i++){
        if(map[s[i]]){
            stack.unshift(s[i])
        }
        else{
            if(map[stack.shift()] != s[i]){
                return false
               }
        }
    }

    return !stack.length

};
