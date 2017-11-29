
function palindrome(str1) {
  str1= str1.replace(/[\W_]/g,'').toLowerCase().split('').reverse().join('');// Good luck!
  var i;
 for(i=0;i<str1.length;i++){ 
  if (str1[i] !== str1[(str1.length-1)-i]) {
  return false;
}
 }
  return true;

}



palindrome("_eye");
