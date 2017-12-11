
function mutation(arr) {
  
  
  var array1 = arr[1].toLowerCase();
  var array = arr[0].toLowerCase();
    for(var j=0;j<array1.length;j++) {
      
      if(array.indexOf(array1[j]) == -1){
        return false;
      }   
     
    }
 return true;
}

mutation(["hello", "hey"]);
