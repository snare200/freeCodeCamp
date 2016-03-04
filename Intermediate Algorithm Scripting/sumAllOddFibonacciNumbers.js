function sumFibs(num) {

  var fib = [1];
  for (var i =1; i <=num;)
    {
      fib.push(i);
      i = fib[fib.length-1]+ fib[fib.length-2]; 
    }
  var output = fib.reduce(function(prev,curr){
    if(curr%2 !== 0)
    {
      return prev + curr;
    }
    else
      {
        return prev;  
      }
  });
    return output;
  }

sumFibs(6);
