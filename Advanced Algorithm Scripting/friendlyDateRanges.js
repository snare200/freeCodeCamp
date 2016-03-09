function friendly(arr) {

var arr1 = arr[0].split('-');
var arr2 = arr[1].split('-');
var output = [];

if(arr[0] === arr[1])  //if range is identical
{
    output = [monthConvert(arr1) + " " + numConvert(arr1) + ", " + arr1[0]];
}
else if(arr1[0] === arr2[0] && arr1[1] === arr2[1])     //if range is in the same month and same year
{
    output = [monthConvert(arr1) + " " + numConvert(arr1), numConvert(arr2)];
}
else if(arr1[0] === '2016' && parseInt(arr2[0]) - parseInt(arr1[0]) === 1 && parseInt(arr1[1]) > parseInt(arr2[1])) // if date range begins in current year and ends within a year 
{
     output = [monthConvert(arr1) + " " + numConvert(arr1), monthConvert(arr2) + " " + numConvert(arr2)];
}
else if(arr1[0] === arr2[0] || parseInt(arr2[0]) - parseInt(arr1[0]) === 1 && parseInt(arr1[1]) >= parseInt(arr2[1]) && parseInt(arr2[2]) < parseInt(arr1[2])) //if date range is not in current year (see above) but range is within a year
{
    output = [monthConvert(arr1) + " " + numConvert(arr1) + ", " + arr1[0], monthConvert(arr2) + " " + numConvert(arr2)];
}
else
{
    output = [monthConvert(arr1) + " " + numConvert(arr1) + ", " + arr1[0], monthConvert(arr2) + " " + numConvert(arr2) + ", " + arr2[0]];
}

function numConvert(arr)    //converts cardinal days to ordinal 
{
    switch (arr[2]){
        case '01':
        case '21':
        case '31':
            arr[2] += "st";
            break;
        case '02':
        case '22':
            arr[2] += "nd";
            break;
        case '03':
        case '23':
            arr[2] += "rd";
            break;
        default:
            arr[2] += "th";
    }
    if(arr[2].charAt(0) === "0")
    {
        arr[2] = arr[2].slice(1);
    }
    return arr[2];
}

function monthConvert(arr)   //converts month numbers to month names
{
    switch (arr[1]){
        case '01': arr[1] = 'January';
        break;
        case '02': arr[1] = 'February';
        break;
        case '03': arr[1] = 'March';
        break;
        case '04': arr[1] = 'April';
        break;
        case '05': arr[1] = 'May';
        break;
        case '06': arr[1] = 'June';
        break;
        case '07': arr[1] = 'July';
        break;
        case '08': arr[1] = 'August';
        break;
        case '09': arr[1] = 'September';
        break;
        case '10': arr[1] = 'October';
        break;
        case '11': arr[1] = 'November';
        break;
        case '12': arr[1] = 'December';
    }
        return arr[1];
}
return output;
}
friendly(["2022-09-05", "2023-09-04"])