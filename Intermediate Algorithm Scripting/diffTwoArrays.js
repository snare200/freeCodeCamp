function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
 
  arr1.forEach(function(num){
    var toggle = 0;
    for(var i=0; i < arr2.length; i++)
      {
        if(num === arr2[i])
          {
            toggle = 1;
          }
      }
    if(toggle === 0)
      {
        newArr.push(num);
      }
  });
   arr2.forEach(function(num){
    var toggle = 0;
    for(var i=0; i < arr1.length; i++)
      {
        if(num === arr1[i])
          {
            toggle = 1;
          }
      }
    if(toggle === 0)
      {
        newArr.push(num);
      }
    
  });
  return newArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
