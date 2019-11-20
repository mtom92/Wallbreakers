var peakIndexInMountainArray = function(A) {

 var binarySearch = function(A, left, right) {
       var middle = Math.floor((left + right) / 2);
        if (A[middle] > A[middle - 1] && A[middle] > A[middle + 1]) {
            return middle;
        }
        else if (A[middle] > A[middle - 1] && A[middle] < A[middle + 1]) {
            return binarySearch(A, middle, right);
        }
        else {
            return binarySearch(A, left, middle);
        }
    }

    return binarySearch(A, 0, A.length - 1);
};
