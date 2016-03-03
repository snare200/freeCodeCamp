function myReplace(str, before, after) {

  var newStr = '';
  if (before.charAt(0) == before.charAt(0).toUpperCase())
    {
      newStr = after.charAt(0).toUpperCase() + after.slice(1);
    }
  else
    {
      newStr = after;
    }

  var output = str.replace(before,newStr);
  return output;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");