function drawer(price, cash, cid) {
    
  var drawerTotal = 0;
  var changeDueTotal = (cash - price);
  var changeDueArray = [];
  var counter = 0;

//---------------------------------If total in drawer (cid) === total change due, returns "Closed"
for(var i=0; i < cid.length; i++)  //Calculates drawer total
{
    drawerTotal += cid[i][1];
}
console.log(drawerTotal);
drawerTotal = drawerTotal.toFixed(2);    //Sets drawer total to 2 decimal places
drawerTotal = Number(drawerTotal);

if(drawerTotal === changeDueTotal)   //Compares drawer total to change due
{
    return "Closed";
}
//-----------------------------------END "Closed"
while(changeDueTotal >=100.000 && cid[8][1] > 0)
{
    counter += bigBoy(100.000,8);
}
if (counter > 0)
{
    changeDueArray.push([cid[8][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 20.000 && cid[7][1] >0)
{
    counter += bigBoy(20.000,7);
}
if (counter > 0)
{
    changeDueArray.push([cid[7][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 10.000 && cid[6][1] >0)
{
    counter += bigBoy(10.000,6);
}
if (counter > 0)
{
    changeDueArray.push([cid[6][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 5.000 && cid[5][1] >0)
{
    counter += bigBoy(5.000,5);
}
if (counter > 0)
{
    changeDueArray.push([cid[5][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 1.000 && cid[4][1] >0)
{
    counter += bigBoy(1.000,4);
}
if (counter > 0)
{
    changeDueArray.push([cid[4][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 0.250 && cid[3][1] >0)
{
    counter += bigBoy(0.250,3);
}
if (counter > 0)
{
    changeDueArray.push([cid[3][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 0.100 && cid[2][1] >0)
{
    counter += bigBoy(0.100,2);
}
if (counter > 0)
{
    changeDueArray.push([cid[2][0],counter]);
    counter = 0;
}
while(changeDueTotal >= 0.050 && cid[1][1] >0)
{
    counter += bigBoy(0.050,1);
}
if (counter > 0)
{
    changeDueArray.push([cid[1][0],counter]);
    counter = 0;
}
while(changeDueTotal > 0.010 && cid[0][1] >0)
{
    counter += bigBoy(0.010,0);
}
if (counter > 0)
{
    if(changeDueTotal > 0)
    {
    changeDueArray.push([cid[0][0],counter+.01]);
    }
    else
    {
     changeDueArray.push([cid[0][0],counter]);
    }
    counter = 0;
}
               
function bigBoy(num,a)
{
    changeDueTotal -= num;
    cid[a][1] -= num;
    return num;
}

if(changeDueTotal > 0.01)   
{
    return "Insufficient Funds";
}
 
return changeDueArray;
}

drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);