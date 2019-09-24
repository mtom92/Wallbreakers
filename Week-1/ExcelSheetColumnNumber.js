var titleToNumber = function(s) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var counter = s.length-1, result = 0;
    for(var letter of s){
       letter = letter.toLowerCase()
       result +=  (alphabet.indexOf(letter) +1)*(26**counter)
       counter--
    }
    return result
};
