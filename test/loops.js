const objectArray = [

    {
        languages:{
            id: 1,
            portuguese: 'Native',
            french: 'Begginer',
            spanish: 'Advanced',
            english: 'Fluent',
        },

    },

    {
        cars:{
            id: 2,
            Toyota: 'Family car',
            Honda: 'Sports car',
            bmw: 'Branding car',
            tesla: 'Future car',
        },

    },

];

for( let i = 0; i <= objectArray.length; i++ ){

    console.log( `The object for this array is: ${objectArray[i]}` );

};

let i = 0;

while( i < objectArray.length ){

    console.log( `The object for this array is: ${objectArray[i]}` );
    
}


//console.log( personObject(), objectArray[0].languages);