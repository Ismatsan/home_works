/*** filter ****/

const users = [
    {name:'Maks', isProgrammer:true },
    {name: 'Sasha', isProgrammer: true},
    {name: 'Ulan', isProgrammer: false },
    {name: 'Jenya', isProgrammer: false}
];
const filteredUsers = users.filter(item => item.isProgrammer);
console.log(filteredUsers);

/**** 1st task
 * Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
 Оставьте в нем только отрицательные числа.
 ****/

const array = [-5, 10, 5, 55, -1, 22, -4 , 36, -45];
const filtered = array.filter(item => item < 0);

console.log(filtered);

/*** 2nd task
 * Дан массив с числами. Сделайте из него массив,
 состоящий из квадратов этих чисел.
 ***/

const arr =[2,5,41,23,9,8];
const mapped = arr.map(items => items * items);

console.log(mapped);