function sumAll(arr) {
 var sum = 0;
  if(arr[0] > arr[1])
    {
      for(var i = arr[1]; i <= arr[0]; i++)
        {
          sum += i;
        }
   }
  else if(arr[0] < arr[1])
   {
      for(var j = arr[0]; j <= arr[1]; j++)
        {
          sum += j;
        }
    }
  return sum;
}

sumAll([1, 4]);