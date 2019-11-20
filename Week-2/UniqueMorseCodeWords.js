var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    var morseWords={}
    var size=0
    var toMorse = ''

    for(var i=0;i<words.length;i++){
        for(var j=0;j<words[i].length;j++){
            toMorse += morse[words[i][j].charCodeAt(0)-97]
        }

        if(!morseWords[toMorse]){
            morseWords[toMorse]=true
            size++
           }

        toMorse=""
    }

    return size

};
