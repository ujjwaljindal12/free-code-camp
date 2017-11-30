
function findLongestWord(str) {
  var wrd = 0;
  var str1 = str.split(' ');
  
  for(var i=0;i<str1.length;i++) {
    
    if(wrd<str1[i].length) {
      wrd = str1[i].length;
    }
  } 
  return wrd;

}
findLongestWord("The quick brown fox jumped over the lazy dog");
