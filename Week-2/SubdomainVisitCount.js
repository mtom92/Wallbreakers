var subdomainVisits = function(cpdomains) {
    var mapResult = {}
    var result = []

    for(var i=0;i<cpdomains.length;i++){
        mapping(cpdomains[i])
    }

    function mapping(string){
        string = string.split(" ")
        var number = Number(string.shift(),10)
        var totalUrl = string.pop()

        while(totalUrl != ""){
              if(!mapResult[totalUrl]){
                 mapResult[totalUrl] = number
                 }
             else{
                 mapResult[totalUrl] += number
             }
             var help1 = totalUrl.split(".")
             help1.shift()
             totalUrl = help1.join(".")

              }
        return
    }


    for(var url in mapResult){
        result.push(mapResult[url] + " " + url)
    }

    return result
};
