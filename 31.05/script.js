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

