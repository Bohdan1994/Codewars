function palindrome(str) {

  var changedStr = (str.toLowerCase()).replace(/[^a-z0-9]/g, '');
  var reversedStr = changedStr.split('');
  reversedStr.reverse();
  
  if(reversedStr.join('') == changedStr) return true;

  else return false;
}
