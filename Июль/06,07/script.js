
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
}