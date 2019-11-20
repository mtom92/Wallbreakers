var wordPattern = function(pattern, str) {
    var arrPattern = unique(pattern.split(""))
    var arrStr = unique(str.split(" "))

    if(arrPattern.length === arrStr.length){
         var mapPattern = map(pattern.split(""))
         var mapStr = map(str.split(" "))

         for(var t=0; t<arrPattern.length;t++){

             if(mapPattern[arrPattern[t]].length != mapStr[arrStr[t]].length){
                     return false
                 }
             for(var s=0;s<mapPattern[arrPattern[t]].length;s++){
                  if(mapPattern[arrPattern[t]][s] != mapStr[arrStr[t]][s]){
                     return false
                     }
                 }
           }
        return true
    }

    return false
};

 function unique(arr){
     var result= []
     for(var j=0;j<arr.length;j++){
         if(!result.includes(arr[j])){
            result.push(arr[j])
            }
     }

   return result
 }

 function map(arr){
     result = {}
     for(var k=0;k<arr.length;k++){
         if(!result[arr[k]]){
            result[arr[k]] = [k]
            }
         else{
              result[arr[k]].push(k)
         }
     }
     return result
 }
