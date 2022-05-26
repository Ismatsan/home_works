/*
const whois = prompt('Кто пришел?', 'Админ');
if (whois ==='Админ'){
    const password = prompt('Пароль?');
    if (password ==='Черный Властелин'){
        alert('Добро пожаловать');
    } else if (password === null){
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if (whois === null){
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}*/

const test1 = true;
if (test1 != true){
    alert('Верно');
} else {
    alert('Неверно');
}

const test2 = true;
const result = test2 !==true ? 'Верно' : 'Неверно';
alert(result);