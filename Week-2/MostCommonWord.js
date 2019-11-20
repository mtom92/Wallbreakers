var mostCommonWord = function(paragraph, banned) {

    paragraph = paragraph.toLowerCase().split(/\W/);
    var maParagraph = map(paragraph)
    var popedBanned, max=0, wordR='';

    function map(arr){
       var result = {}
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

    delete maParagraph['']

    while(banned.length>0){
        popedBanned = banned.pop()
         delete maParagraph[popedBanned]
          }

    for(var word in maParagraph){
        if(maParagraph[word] > max){
            max = maParagraph[word]
            wordR= word

        }
    }

    return wordR
};
