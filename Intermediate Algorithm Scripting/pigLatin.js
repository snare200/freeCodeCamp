function translate(str) {
  var newStr = '';
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelStart = false;
  var vowelIndex = 0, i = 0 ;
  
  vowels.forEach(function(vowel){
      if(str.charAt(0) === vowel)
         {
           vowelStart = true;
         }
    });
  if(vowelStart === true)
    {
      newStr = str + "way";
    }
   else
     {
       while(vowelIndex === 0)
         {
           for(var j =0; j < vowels.length; j++)
             {
               if(str.charAt(i) == vowels[j])
                 {
                   vowelIndex = i;
                 }
             }
           i++;
         }
        newStr = str.substr(vowelIndex,str.length-vowelIndex) + str.substr(0,vowelIndex)+ 'ay';
     } 
  return newStr;
}

translate("glove");
