var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"


function aclean(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (isAnagram(arr[i], arr[j])) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

    
 function isAnagram(wA, wB) {
   var tmp1 = wA.toLowerCase().split('');
   var tmp2 = wB.toLowerCase().split('');
    if (tmp1.length == tmp2.length) {
      var matchC = 0;
      for (var j = 0; j < tmp2.length; j++) {
        for (var k = 0; k < tmp2.length; k++) {
          if (tmp1[j] == tmp2[k]) {
            matchC++
            tmp2[k] = null;            
            break;
          }
        }
      }
      if (matchC == tmp1.length) {
        return true;
      }
    }
    return false;
    }

