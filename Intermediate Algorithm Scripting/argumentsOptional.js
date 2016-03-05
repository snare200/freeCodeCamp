function add() {

  function isNum(num)
  {
    if( typeof num !== 'number')
      {
        return undefined;
      }
    else
      {
        return num;
      }
  }//close function isNum
  
  if(arguments.length === 2)
    {
      if(isNum(arguments[0]) === undefined || isNum(arguments[1]) === undefined)
         {
         return undefined;
         }
      else
        {
          return arguments[0]+ arguments[1];
        }
    } 
  else
    {
      var given = arguments[0];
        if(isNum(given))
           {
           return function(arg)
           {
             if(given === undefined || isNum(arg) === undefined)
             {
               return undefined;
             }
             else
               {
                 return given + arg;
               }
           };
      }
  } 
}

add(2)([3]);
