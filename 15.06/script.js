/*** 1st task***/
// Заполните массив 10-ю иксами с помощью цикла.    [x,x...]

let arr = []

for (i= 0; i < 10; i++){
    arr[i] ='x';
}
document.write(arr);
console.log(arr);



/*** 2nd task***/
// У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
// С помощью цикла for и оператора if нужно проверить есть ли в массиве число
// со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'

let mass = [1, 2, 115, 4, 58, 5 ,7 ,99];
for (i =0; i < mass.length; i++){
    if (mass[i] == 4){
        alert('Есть!!!');
    }
}