function drop(arr, func) {
  // Drop them elements.

  var n =0;
  while(func(arr[0]) === false)
    {
      arr.shift();
      n++;
    }

  return arr;
  
}

drop([1, 2, 3, 9, 2], function(n) {return n > 2; });