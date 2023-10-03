//var, let e const//
{
    var unused = true; //Doesn't respect global scope.
    let variable = true;
    const unvariable = true;
};
console.log(unused); // Return the "var" variable since it doesn't respect local scopes.
console.log(variable); //Return a error for trying to call a local variable in a global scope.

