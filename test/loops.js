const userList = [
    
        { id: 1, name: 'Vitor', age: '20', country: 'Brazil', Language: 'Portuguese', },
        
        { id: 2, name: 'Ozi', age: '44', country: 'France', Language: 'French', },
        
        { id: 3, name: 'Marcus', age: '25', country: 'EUA', Language: 'English', },

        { id: 4, name: 'Sonny', age: '31', country: 'Italy', Language: 'Italian', },
        
        { id: 5, name: 'Vinci', age: '18', country: 'India', Language: 'Hindu', },

];

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

callTest();
//console.log( personObject(), objectArray[0].languages);
