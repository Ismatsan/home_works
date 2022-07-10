/*** solved 2nd task**/
let s = 59
let m = 59
let h = 23
let r = 0; let tt = 0;

function timer()
    {s -= 1;
    if(s < 0) s = 59, m -= 1;
    if(m < 0) m = 59, h -= 1;
    if(h < 0) h = 23
    if(s + m + h == 0)stop()
    s = s+"";
    m = m+"";
    h = h+"";
    if (s.length < 2) s = "0"+s;
    if (m.length < 2) m = "0"+m;
    if (h.length < 2) h = "0"+h;
    time.innerHTML = h+":"+m+":"+s }

function start()
{if(!r){r = 1;T2()}}

function T2()
{if(s + m + h == 0) s = 59, m = 59, h = 23;
    tt = setInterval("timer()",1000)}

function stop()
{clearInterval(tt);r = 0}