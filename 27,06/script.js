/** 1st task
 * Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду,
 но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”,
 после чего процесс завершится.
 При решении данной задачи нельзя вызывать setTimeout.**/


for (let i = 1; i <= 5; ++i  ){
    const intervalId = setInterval(() => {
        console.log('Hello World');
    }, 1000);
    console.log('Done');
    clearInterval(intervalId);
}


/** 2nd task
 *  Составьте программу, которая принимает с клавиатуры числа,
 пока не будет введено значение 999. Программа должна подсчитать,
 сколько чисел было введено с клавиатуры, чему равна сумма этих чисел
 (не считая значения 999), и вывести эту информацию на экран.
 ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290**/

let amount = 0;
let sum = 0;
let number = parseFloat(prompt('Введите число'));
while (number !== 999) {
    amount += 1;
    sum += number;
    number = parseFloat(prompt('Введите число'));
}
document.write(('Количество чисел - ') + amount );

document.write((';Сумма = ') + sum);