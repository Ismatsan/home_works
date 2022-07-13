/*** 1st task ****/
function imagefun() {
    let image_Id = document.getElementById('getImage');
    let user = (prompt('Как тебя зовут?'));
    alert('Привет, ' + user);

    if (Image_Id.src.match("./image/sad-emoticon.jpg")) {


        Image_Id.src = "./image/lucky.jpg";
    }    else {
        Image_Id.src = "./image/sad-emoticon.jpg";
    }
}
//imagefun()

/***  2nd task**/
// let myAudio = new Audio("./audio/02611mp3");
// myAudio.load();
// myAudio.play();

let sek = 59
let min = 59
let hour = 23
let r = 0; let tt = 0;

function timer()
    {sek -= 1;
    if(sek < 0) sek = 59, min -= 1;
    if(min < 0) min = 59, hour -= 1;
    if(hour < 0) hour = 23
    if(sek + min + hour == 0)stop()
    sek = sek+"";
    min = min+"";
    hour = hour+"";
    if (sek.length < 2) sek = "0"+sek;
    if (min.length < 2) min = "0"+min;
    if (hour.length < 2) hour = "0"+hour;
    clock.innerHTML = hour+":"+min+":"+sek }

function start()
    {if( !r){r = 1; counter()}}

function counter()
    {if(sek + min + hour == 0) sek = 59, min = 59, hour = 23;
    tt = setInterval("timer()",1000)
    clock.className="danger"}

function stop()
    {clearInterval(tt);r = 0
    clock.className="stp"}





