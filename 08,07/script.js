let dives = document.createElement('div');
dives.className = "alert";
document.body.prepend(dives);
dives.innerHTML = 'Мы создали див.Вставляем prepend';
dives.before('Вставляем before');
dives.after('Вставляем after');


