var findAnagrams = function(s, p) {

    var start,end,currentMap;
    var result = []
    var pMap = map(p.split(""))

    for(var i=0;i<s.length-p.length+1;i++){
        start =i
        if(p.includes(s[start])){
        end = start+p.length-1

        currentMap = map(s.split("").slice(start,end+1))
        if(isAnagram(currentMap,pMap)){
            result.push(start)
           }
    }
  }
    return result
};

  function map(arr){
     var result={}
     for(var i=0;i<arr.length;i++){
         if(!result[arr[i]]){
            result[arr[i]]=1
            }
         else{
             result[arr[i]]++
         }
     }
      return result
  }


 function isAnagram(str1,str2){
     for(var letters in str1){
         if(!str2[letters] || str2[letters] != str1[letters]){
             return false
            }
     }
     return true
 }
