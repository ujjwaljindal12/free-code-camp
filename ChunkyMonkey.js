
function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var array2=[];
  var array= arr.length;
  for(var i=0;i<array;i+=size) {
  
    array2.push(arr.slice(i,i+size));
    
  }
  
return array2;
}

chunkArrayInGroups([0,1,2,3,4,5], 2);
