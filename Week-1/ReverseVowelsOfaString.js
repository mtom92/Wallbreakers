var reverseVowels = function(s) {
var vowels ='aeiouAEIOU';
sHelp = s.split("");
var left = 0
var right = sHelp.length
    
    while(left<=right){
          if(vowels.includes(sHelp[left])){
                 if(vowels.includes(sHelp[right])){
                         [sHelp[left],sHelp[right]]=[sHelp[right],sHelp[left]]
                          left++
                          right--
                                   }
                 else{
                     right--
                      }

               }
                   else{
                       left++
                        }
          }
    return sHelp.join("")
};
