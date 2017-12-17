
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var result = arr.sort(function(a,b) {
    return a-b;
  });
  
  for (var i=0; i<result.length; i++) {
   
    
    if (num <= result[i]) {
      return i;
    } 
  }
  
  return result.length;
}

getIndexToIns([40, 60], 50);
