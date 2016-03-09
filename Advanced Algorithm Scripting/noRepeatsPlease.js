function permAlone(str) {

var permArr = [], usedChars = [], myPerms = [];

function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length === 0) 
    {
        permArr[permArr.length] = usedChars.join("");
    }
        
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;    //returns all permuations strings in an array
}

var output = 0, counter = 0;
myPerms = permute(str);

myPerms.forEach(function(perm){    //sums up those without duplicates
    var toggle = true;
    for(var j=0; j < perm.length; j++)
    {
        if(perm.charAt(j) === perm.charAt(j+1))
        {
           toggle = false;
        }
    }
    if(toggle === true)
    {
        output++;
    }
});
return output;
}

permAlone('aab');