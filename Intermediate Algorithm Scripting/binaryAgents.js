function binaryAgent(str) {

var data = str.split(" ");   //string is split into array elements
var unicode = [];
var output = "";

data.forEach(function(binary)  //callback converts each binary array to a unicode number and pushes that number to unicode array
{
   var uniLetter = 0;
    for( var i= 0; i < 8 ; i++)
    {
        if(binary.charAt(i) === '1')
            {
              switch(i){
                case 0: uniLetter += 128;
                  break;
                case 1: uniLetter += 64;
                  break;
                case 2: uniLetter += 32;
                  break;
                case 3: uniLetter += 16;
                  break;
                case 4: uniLetter += 8;
                  break;
                case 5: uniLetter += 4;
                  break;
                case 6: uniLetter += 2;
                  break;
                case 7: uniLetter += 1;
                  break;
              }//close switch
            }//close if
    }//close for-i loop
    unicode.push(uniLetter);
});//closeforeach

unicode.forEach(function(num){         //callbacks takes each num element in the unicode array, converts to english, adds to ouput string
//console.log(typeof num);
   output += String.fromCharCode(num);
});

return output;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");