var transpose = function(A) {
var transpo=[], m=A.length , n=A[0].length;

    for(var a=0;a<n;a++){
        transpo[a]=[]
        for(var b=0;b<m;b++){
            transpo[a][b]=0
        }
    }

    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            [A[i][j],transpo[j][i]]=[transpo[j][i],A[i][j]]
        }
    }

    return transpo

};
