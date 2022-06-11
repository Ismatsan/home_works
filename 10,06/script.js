/** first task **/
let array = [1, 2, 3, 4, 5, 6];

function doubling() {
    for (let i = 0; i < array.length; i++){
        doubling =array[i]*2;
        console.log(doubling); //2,4,6,8,10,12

}
}
doubling();



/** second task **/
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function even() {
    for (let i = 0; i < 20; i++) {

        if (i % 2 != 0) continue;

        alert(i); //0,2,4,6,8,10,12,14,16,18,20
    }
}
even();


/** 3th task **/
function hello() {
    let hello = '«Привет, JavaScript!»';
        console.log(hello); //«Привет, JavaScript!»
    }
hello();

/** 4th task **/

function cube() {
    $num =prompt('Введите число');
   cube = $num * $num * $num
alert(cube)
}
cube();

/** 5th task **/

function getName() {
    let name =prompt('Кто Вы?');
    if (name !== 'undefined'){
       alert('Привет ' + name);
    }else alert('Привет, гость');

}
getName();

