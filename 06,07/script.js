const cub1 = document.querySelector('#box1');
const cub2 = document.querySelector('#box2');
const cub3 = document.querySelector('#box3');
const container = document.querySelector('#boxes');

cub1.addEventListener('click', () =>{
    container.classList.add('background-red');
})

cub1.addEventListener('click', () => {
    container.classList.toggle('background-blue');
})

cub2.addEventListener('click', () =>{
    container.classList.add('background-black');
})

cub2.addEventListener('click', () => {
    container.classList.toggle('background-green');
})

cub3.addEventListener('click', () =>{
    container.classList.add('background-orange');
})

cub3.addEventListener('click', () => {
    container.classList.toggle('background-violet');
})

/*** 2nd task **/

function showNotification({html}) {
    let notification = document.createElement('div');
    notification.innerHTML = html;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        html: 'Добрый вечер!' + i++,
    });
}, 2000);