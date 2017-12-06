
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length>num && num<=3){
  var str1= str.slice(0,num);
  return str1+"...";
  
  } else if (str.length>num && num>3){
     var str2 = str.slice(0,num-3);
  return str2+"...";

  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
