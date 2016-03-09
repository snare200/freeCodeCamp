function pairwise(arr, arg) {
var sum =0;
var out = [];

if(arr == 0)
{
    return 0;
}
for(var i = 0; i < arr.length; i++)
{
    for(var j = i+1; j < arr.length; j++)
    {
        if(arr[i]+arr[j] === arg && out.indexOf(i) === -1 && out.indexOf(j) === -1)
        {
            sum += i;
            sum += j;
            out.push(i);
            out.push(j);
        }
    }
}
return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1)