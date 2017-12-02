
function largestOfFour(arr) {
  // You can do this!
  var arr1=[];
  for(var i=0;i<arr.length;i++) {
    var num = arr[i][0];
    for(var j=0;j<arr[i].length;j++) {
    if(num<arr[i][j+1]) {
      num= arr[i][j+1];
    }
      //return arr1;
    }
    arr1[i]= num;
    
  }
  
  
  return arr1;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
