var isPalindrome = function(s) {
    s = s.toLowerCase()
    var left=0;
    var right = s.length-1;

    while(left < s.length-1 && right > 0) {
      if(s[left].match(/^[0-9a-zA-Z]+$/)){
                if(s[right].match(/^[0-9a-zA-Z]+$/)){
                    console.log(s[left],left,s[right],right)
                       if(s[left]==s[right]){
                           left++;
                           right--;
                       }
                       else{
                           return false
                       }
                    }
                 else{
                     right--;
                 }
             }
        else{
            left++;
        }
  }
    return true
};
