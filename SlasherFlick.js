
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
 var array= arr.splice(0,howMany);
  var array1 = arr.slice(array);
  return array1;
}

slasher([1, 2, 3], 2);
