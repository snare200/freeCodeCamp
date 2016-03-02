function convert(num) {
  
  var numString = num.toString();
  var tens = 0;
  var output = "";
  var combo = {
    0 : '',
    1 : 'I',
    2 : 'II',
    3 : 'III',
    4 : 'IV',
    5 : 'V',
    6 : 'VI',
    7 : 'VII',
    8 : 'VIII',
    9 : 'IX',
    10 : 'X',
    20 : 'XX',
    30 : 'XXX',
    40 : 'XL',
    50 : 'L',
    60 : 'LX',
    70 : 'LXX',
    80 : 'LXXX',
    90 : 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
  };
  
  if(numString.length === 1)
    {
      output = combo[numString];
    }
  if(numString.length === 2)
    {
      output = combo[numString.charAt(0)+"0"] + combo[numString.charAt(1)];
    }
  if(numString.length === 3)
    {
      output = combo[numString.charAt(0)+"00"];
      
      if(numString.charAt(1) != 0)
        {
          output += combo[numString.charAt(1)+"0"];
        }
      if(numString.charAt(2) != 0)
        {
         output += combo[numString.charAt(2)];
          
        }     
    }
  if(numString.length === 4)
    {
      output = combo[numString.charAt(0)+"000"];
      if(numString.charAt(1) != 0)
        {
          output += combo[numString.charAt(1)+"00"];
        }
        if(numString.charAt(2) != 0)
        {
          output += combo[numString.charAt(2)+"0"];
        }  
        if(numString.charAt(3) != 0)
        {
          output +=combo[numString.charAt(3)];
        }  
   
    }
 return output;
}
convert(500);
