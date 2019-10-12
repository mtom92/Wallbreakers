var isSubsequence = function(s, t) {
    var i=0;
    var j=0;
    var count = 0;

    while(i !=s.length && j != t.length){
          if(s[i] == t[j]){
             count++
             i++
             j++
             }
                else{
                    j++
                 }
      }
    return count == s.length ? true : false
};
