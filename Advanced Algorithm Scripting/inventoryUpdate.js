function inventory(arr1, arr2) {
   
   arr2.forEach(function(item){      //Itterates through each array in the second argument 
       
       if(isInArray(item[1],arr1))    //if the inventory is already present 
       {
      
          arr1 = addInventoryNum(item[0],item[1],arr1);  //add the number to the inventory
       }
       else
       {
           arr1 = addInventoryName(item[0],item[1],arr1);  //else add the inventory item + num in alphabetical order
       }
   });
   
function isInArray(value,array)                   //determines if the item in the second argument is found in the first argument
{
    array = [].concat.apply([],array);  //flattens array
    return array.indexOf(value) > -1;
}

function addInventoryNum(num, name, array)      //adds inventory number 
{
   array = [].concat.apply([],array);  //flattens array
   
   var addTo = array.indexOf(name) -1;
   array[addTo] += num;
   var j;
   var newArray = [];                      //--BEGIN un-flatten array
   for(var i=0; i < array.length; i+=2)
   {
       j = i+1;
       newArray.push([array[i],array[j]]);
       
   }                                        //--ENB un-flattten array
   return newArray;
}
   
function addInventoryName(num, name, array)    //adds inventory name and number in alphabetical order
{
    var numOnlyArray = [], nameOnlyArray = [], finalArray = [];
    
     array = [].concat.apply([],array);  //flattens array
     
     for(var i=1; i < array.length; i+=2)   //creates an array of the item names only
     {
         nameOnlyArray.push(array[i]);
     }
     for(var j=0; j < array.length; j+=2)   //creates an array of the numbers only 
     {
         numOnlyArray.push(array[j]);
     }
     
     nameOnlyArray.push(name);            //pushes the new item name to the name only array
     nameOnlyArray.sort();                //sorts the name only array alphabetically
     var pos = nameOnlyArray.indexOf(name);     //stores the position that the new item name is at
     numOnlyArray.splice(pos,0,num);            //splices in the number to the same position in the number only array
     
     for(var z=0; z < nameOnlyArray.length; z++)    //combines the numbers and names into arrays within a final array
     {
         finalArray.push([numOnlyArray[z],nameOnlyArray[z]]);
     }
     
     return finalArray
}
  return arr1;
}

inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])