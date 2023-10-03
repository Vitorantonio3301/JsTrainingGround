//String methods//
const string = 'Yeah, i am a string';

function testing (){
    const sizeUp = string.toUpperCase();
    const sizeDown = string.toLowerCase();
    const lengthShow= string.length;
    const splitString= string.split('');
    
    console.log( `${string} and i have ${lengthShow} characters and can be split into ${splitString}` );

};

testing();