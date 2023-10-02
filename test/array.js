//Using "new" constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers)

//Using brackets 
function validation (){  

    const array = ['JavaScript', 'Cpp', 'Java', 'Python', 'Assembly'];

    array.push('Rust');
    const indexValue = array.indexOf('Rust');
    const size = array.length;

    console.log(size);
    console.log(indexValue);

}

validation ();