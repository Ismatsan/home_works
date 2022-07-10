/** first task **/
const userSalaries ={
    Ella: 5000,
    Sophia: 7000,
    Ellie: 8000,
}
delete userSalaries.Ella;
console.log(userSalaries);

/** second task **/
let object ={
    a: 5,
    b: 6,
    c: 10,
}
let sum =0;
for (let key in object) {
    sum += object[key];
}
alert(`Всего ${sum}`);
console.log(`Всего ${sum}`);

/** third task **/
let number = (31 === true) ? number =3 : number = 5;


/** forth task **/

const userSalaries = {
    Asankozhoev: 100000,
    Babanov: 15000,
    Matraimov: 1000000,
    Atambaev: 150000,
    Keldibekov: 545212,
    Akaev: 100000,
    Jeenbekov: 90000,
    Sariev: 70000,
    Motuev: 40000,
    Japarov: 200000,


}
let sum =0;
for (let key in userSalaries) {
    sum += userSalaries[key];
}

alert(`Всего ${sum} сомов`);
console.log(`Всего ${sum} сомов`);