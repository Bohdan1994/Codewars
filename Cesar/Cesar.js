function rot13(str) {
  let result = '';
  let pair = 0;

  for(let i = 0; i < str.length; i++) {
  	if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
  	pair = str.charCodeAt(i) + 13;
  	if(pair > 90) { 
  		pair = 64 + pair % 90;
  	}
  	result += String.fromCharCode(pair);
 }else result += str[i];
}
return result;
}


rot13("SERR CVMMN!");
