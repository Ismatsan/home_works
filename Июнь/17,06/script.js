/***  1st Task
 * Дан массив с элементами [2, 3, 4, 5, 6, 7].
 С помощью цикла for найдите произведение элементов этого массива.
 Общий результат сохранить в объекте с соответствующим свойством.
 Например: 2 * 3 = 6 -> 6 * 4 и.т.д.***/

let array =[2, 3, 4, 5, 6, 7];
product = 1;
for (i = 0; i < array.length; i++) {
    product = product * array[i];
}
document.write( product );




/** 2nd task
 * Напишите функцию, которая разворачивает массив в обратном порядке
 и затем ее возвращает.  Функция наша  принимает массив любых элементов.
 Например:
 const data = [1, 2, 3];
 myFunc(data);  // [3, 2, 1];**/

function rev() {
    const data =[1, 2, 3, 4, 5, 6, 7, 8, 9];
   data.reverse();
    console.log( data );
}
rev();