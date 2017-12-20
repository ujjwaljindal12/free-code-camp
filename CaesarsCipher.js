
function rot13(str) { // LBH QVQ VG!
  
  return str = str.split(' ').map.call(str, function(char) {
     x = char.charCodeAt(0);
    if (x<65 || x>90) {
      return String.fromCharCode(x);
    }
    else if (x<78) {
      return String.fromCharCode(x+13);
    }
    else return String.fromCharCode(x-13);
  } ).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
