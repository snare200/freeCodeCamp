function sumPrimes(num) {
  var primeArray = [2];
  var toggle, output;
  for(var i = 3; i <=num; i++)
  {
      toggle = 0;
    for(var j = i-1; j > 1; j--)
    {
        if(i%j === 0)
        {
           toggle = 1; 
        }
    }
    if(toggle ===0)
    {
        primeArray.push(i);
    }
  }
  output = primeArray.reduce(function(a,b){
    return a+b;
  });
return output; 
}
sumPrimes(977);