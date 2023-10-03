//Loops test//
const userList = [
    
        { id: 1, name: 'Vitor', age: '20', country: 'Brazil', Language: 'Portuguese', valid: true },
        
        { id: 2, name: 'Ozi', age: '44', country: 'France', Language: 'French', valid: true },
        
        { id: 3, name: 'Marcus', age: '25', country: 'EUA', Language: 'English', valid: false },

        { id: 4, name: 'Sonny', age: '31', country: 'Italy', Language: 'Italian', valid: false },
        
        { id: 5, name: 'Vinci', age: '18', country: 'India', Language: 'Hindu', valid: true },

]; // Main loop used for test

 function for_while_test(){ //Function - call when needed 

        function forLoop (){
        
        for( let i = 0; i <= userList.length; i++ ){

        console.log( `The id for this array is: ${userList[i].id}` );
        
        };
    };

    function whileLoop(){

        let i = 0;
        
        while( i < userList.length ){
        
            console.log( `The object for this array is: ${userList[i].id}` );
            
        };

    };

    function callTest (){

        console.log( forLoop() );
        console.log( whileLoop() );
    };

 };

function map_Foreach_Filter_Test (){ //Function - call when needed 
    
    const userListEach = userList.forEach(function(userId){
        return userId.id;
    });

    const userListMap = userList.map(function(usersName) {
        return usersName.name;
    });

    const userListFilter = userList.filter(function(userValidation) {
        return userValidation.valid === true;
    });

    console.log(userListEach, userListFilter, userListMap);
    
};

const ifElseTest = {

    id: 1,
    
    firstMethod: function (){
        let test;

        if( test === true ){
            console.log(`Your value is ${test}`);
        }
        else if( test === false ){ 
            console.log('Your value is not true');
        }
        else{ 
            console.log('Your value is undefined');
        };

    },

    secondMethod: function (){
        let test = 4;

        if( test === 10 || 0 ){
            console.log( 'Your value is 10 or 0' );
        }
        else{ 
            console.log('Your value is not 10 or 0');
        };
        
    },

    thirdMethod: function (){
        const testOne = 10;
        const testTwo =  5;
        const allTest = [testOne, testTwo];

        for (i = 0; i < allTest.length; i++){
                if( allTest[i] === 10 && 5 ){
                    console.log('Your test value is a valid number.');
                }
                else{
                    console.log('Your test value is not a valid number');
                };
        
            };
        
        },

};

console.log(ifElseTest.thirdMethod());
//console.log( personObject(), objectArray[0].languages);
