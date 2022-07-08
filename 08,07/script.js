let div = document.createElement('div');
div.className = "alert";
document.body.prepend(div);
div.innerHTML = 'Мы создали див.Вставляем prepend';
div.before('Вставляем before');
div.after('Вставляем after');


