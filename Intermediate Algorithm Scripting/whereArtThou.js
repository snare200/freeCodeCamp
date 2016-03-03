function where(collection, source) {
  var arr = [];
  collection.forEach(function(myObject){
    var toggle = 1;
    for(var key in source){
      if(myObject.hasOwnProperty(key) == false || source[key] != myObject[key])
        {
          toggle = 0;
        }
    }
    if(toggle == 1)
      {
        arr.push(myObject);
      }
  });
  return arr;
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });