function telephoneCheck(str) {
  // Good luck!
  var toggle1 = 0, toggle2 = 0;

if(str.charAt(0) == '-')   //if string begins with a negative, false
{
    return false;  
} 
     
str= str.replace(/[^0-9)(]/g,'');  //removes all non-numerical characters except for parenthesis
 
if(str.indexOf('(') < 0 && str.indexOf(')') < 0) // begins tests for strings without parenthesis 
{
  if(str.length === 11) //tests for country code length
    {
     if(str.charAt(0) !== '1')  //false if country code is not 1 
       {
         return false;
       }  
    }
  if(str.length > 11 || str.length < 7 || str.length === 8 || str.length === 9 ) //returns false based on an invalid length
    {
    return false;
    }
}//end tests for strings without parenthesis
  
 //--------------------If only contains one parenthesis, false
if (str.indexOf('(') >= 0 && str.indexOf(')') < 0 || str.indexOf('(') < 0 && str.indexOf(')') >= 0)
{
  return false;
}
  //---------------------------------------
if(str.length === 13) //tests for country code length
{
   if(str.charAt(0) !== '1') //false if country code is not 1 
   {
       return false;
   }
}
if (str.indexOf('(') >= 0 && str.indexOf(')') >= 0) // if 2 parenthesis 
  {
    if (str.indexOf('(') > 2)  //tests location of parenthesis
    {
    return false;  
    }
    if(str.indexOf(')') < 4 || str.indexOf(')') > 5)  //tests location of parenthesis
      {
        return false; 
      }
  }
 return true; 
}

telephoneCheck("1 555-555-5555");