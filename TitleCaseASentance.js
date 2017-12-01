
function titleCase(str) {
  var str1 = str.toLowerCase().split(' ');
  var wrd,wrd1;
  var str2 = str1.map(function(val) {
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
  });
  
  return str2.join(" ");
  //return str[i];
}
titleCase("I'm a little tea pot");
