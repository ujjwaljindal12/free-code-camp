
function palindrome(str1) {
  str1= str1.replace(/[\W_]/g,'').toLowerCase().split('').reverse().join('');// Good luck!
  
 for(var i=0, len=str1.length-1;i<len/2;i++){ 
  if (str1[i] !== str1[len-i]) {
  return false;
}
 }
  return true;

}



palindrome("_eye");
