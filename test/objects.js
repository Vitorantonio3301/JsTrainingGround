
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

person.email = 'Vitorantonion3301@gmail.com';
person.telephone = '+55 991508715';
person.hobbie.push( 'Exercise' );
console.log( person.aboutMe.age );
const { aboutMe: firstName, secondName, age } = person;
console.log(person);
