function unite(arr1, arr2, arr3) {
  
  var arr4 = [];
  var toggle =1;
  var i = 1;
  for(i = 0; i < arguments.length; i++)
    {
  arguments[i].forEach(function(num){
    arr4.forEach(function(num2){
      if (num === num2)
        {
          toggle = 0;
        }
    });
    if (toggle === 1)
      {
        arr4.push(num);
      }
    toggle = 1;
  });
    }   