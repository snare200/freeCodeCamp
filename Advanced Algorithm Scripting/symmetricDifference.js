function sym(args) {
    
var aNew = [];  
  
function filterMe(aOne, aTwo){
    var aJoined = aOne.concat(aTwo);               //JOINS BOTH ARGUMENENTS INTO A SINGLE ARRAY AJOINED    
    var aFiltered = aJoined.filter(function(item,pos,self){  //CREATES AN ARRAY OF THE DUPLICATE NUMBERS IN THE ARRAY TO SERVE AS A LIST OF NUMBERS TO FILTER OUT OF AJOINED ARRAY
        return self.indexOf(item) !== pos;
    });
    
    var testAOne = aOne.toString();         //CREATES A STRING TYPE OF THE FIRST ARGUMENT 
    var testATwo = aTwo.toString();         //CREATES A STRING TYPE OF THE SECOND ARGUMENT
    
    for(var i =0; i < aFiltered.length; i ++)  //IF THE DUPLICATE IS ONLY A DUPLICATE IN WITHIN A SINGLE ARGUMENT, WE DON'T NEED TO FILTER THIS OUT OF AJOINEDARRAY, SO WE REMOVE IT FROM A FILTERED ARRAY
    {   
        if(testAOne.indexOf(aFiltered[i]) === -1 || testATwo.indexOf(aFiltered[i]) === -1)
        {
          aFiltered.splice(i,1);
          i--;
        }    
    }
  
    aNew = aJoined;
   
    for(var i =0; i < aFiltered.length; i++)  //TAKES THE NUMBERS IN AFILTERED AND TAKES THEM OUT OF ANEW ARRAY
    {
        for(var j =0; j < aJoined.length; j++)
        {
            if(aFiltered[i] == aJoined[j])
            {
               aNew.splice(j,1);
               if(i > 0);
               {
                   i--;
               }
            }
        }
    }
   return aNew;
}  

filterMe(arguments[0],arguments[1]);  //CALLS FILTERME ON ARG 1 AND 2

for(var i=2; i < arguments.length; i++)  //CALLS FILTERME ON ANY REMAINING ARGUMENTS, IF ANY
 {
     filterMe(aNew, arguments[i]);  
 }

function uniq(a) {                      //FUNCTION REMOVES DUPLICATES
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

return uniq(aNew);  //RETURN ANEW WITH DUPLICATES REMOVED
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);