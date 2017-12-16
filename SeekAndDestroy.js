
function destroyer(arr) {
  // Remove all the values
  for(var i=1;i<arguments.length;i++) {
    var new1 = arguments[i];
    arr = arr.filter(function(value){
     return value!=new1;
    });

  }
    
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
