/** задача на метод reduce **/

/*const numbers = [1,2,23,5,45];

const result = numbers.reduce((sum, item)=>{
    return sum + item;
}, 0)
console.log(result);*/


/** Описание
1) (( sum = 1; item = 2) =>{
    return 1 + 2;
}, 3)

2) ((sum = 3; item =23) =>{
    return 3 + 23;
}, 26)

3) ((sum = 26; item =5) =>{
    return 26 + 5;
}, 31)

4)((sum = 31; item = 45) =>{
    return 31 + 45;
}, 76)
console.log(result)
**/

/** 1st task
 * Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
 произведение этих аргументов. **/
let n =prompt('введите значение n')
let m =prompt('введите значение m')

const mul = [n, m];

const product = mul.reduce((prod, item) =>{
    return prod * item;
}, )
document.write(product);
