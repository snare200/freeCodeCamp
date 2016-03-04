function find(arr, func) {
  var num = 0;
  
  var newArray = arr.filter(func);
  
 return newArray[0];
}

find([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
