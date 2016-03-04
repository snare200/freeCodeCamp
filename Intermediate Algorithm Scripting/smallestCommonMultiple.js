function smallestCommons(arr) {
  
  var start, finish, mult, output;
  var endloop = 0, toggle = 0;
  if(arr[0] < arr[1])
    {
      start = arr[0];
      finish = arr[1];
    }
  else
    {
      start = arr[1];
      finish = arr[0];
    }
  mult = finish;

 do{
    toggle = 0;
    for(var i = start; i <= mult; i += start)
      {
       if(i === mult)
         {
           //endloop = mult;
           for(var j = start+1; j < finish; j++)
             {
               if(mult%j !== 0)
                 {
                   toggle = 1;
                 }
               
             }
           if(toggle === 0)
             {
               endloop = mult;
             }
         }
      }
      mult += finish;
 }while(endloop === 0);
  
   

  return endloop;
}


smallestCommons([1,13]);