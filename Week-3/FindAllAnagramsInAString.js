var findAnagrams = function(s, p) {
    var result = [];
		if(s == null || s.length == 0 || p.length > s.length) return result;

		var cp = p.split("");
		cp.sort();

		for(var i = 0; i < (s.length - p.length +1) ; i++) {
			var window = s.slice(i, i+p.length);
			var cw = window.split("")
			cw.sort()
			if(equal(cp,cw)) result.push(i);
		}

         function equal(arr1,arr2){
             if(arr1.length != arr2.length) return false
             for(var k=0; k<arr1.length;k++){
                 if(arr1[k] != arr2[k]){
                    return false
                    }
             }
             return true
         }

		return result;
 }
