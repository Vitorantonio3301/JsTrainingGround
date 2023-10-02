
const person = {
    aboutMe: {
        firstName: 'Vitor',
        secondName: 'Antonio',
        age: '20',
        ocuppation: 'Programmer',
        hobbie: ['Games', 'Music', 'Study', 'Movies'],
    },

    adress: { 
        country: 'Brazil',
        state: 'Rio de janeiro',
        city: 'Duque de Caxias',
    },
};

function personObject () {

    person.email = 'Vitorantonion3301@gmail.com';
    person.telephone = '+55 991508715';

    const { aboutMe: firstName, secondName, age } = person;

    console.log( person.aboutMe);

}

const objectArray = [

    {
        languages:{
            portuguese: 'Native',
            french: 'Begginer',
            spanish: 'Advanced',
            english: 'Fluent',
        },

    },

    {
        cars:{
            Toyota: 'Family car',
            Honda: 'Sports car',
            bmw: 'Branding car',
            tesla: 'Future car',
        },

    },

];

console.log( personObject(), objectArray[0].languages);
