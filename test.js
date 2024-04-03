console.log(1 == '1')
//true

console.log(1 === '1')
//false

console.log('10' + 10)
//1010

console.log(10 + 10)
//20

console.log('10' + 10 + 10)
//101010

//enkel '=' brukes for å tildele en verdi til en variabel


const arr = [{id:1, name:'John'}, {id:2, name:'Jane'}, {id:3, name:'Jim'}];
//const newArr = arr.filter((item) => item.id !== 3);
//console.log(newArr);
const personTwo = arr.find((person) => person.id === 2);
console.log(personTwo.name);

const arr2 = [1, 2, 3, 4, 5];
//denne gjør det samme som den under heh
/* const bool = arr.some((item) => item == 6);
console.log(bool); */
let bool = false;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == 6) {
        bool = true;
        break;
    }
}
console.log(bool);