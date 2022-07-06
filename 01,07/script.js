const showModal = () => {
    alert('Ездовая собака в заснеженных лесах Норвегии');
    return false;
}

}

const info_btn = document.querySelector('#nature');

info_btn.onclik = showModal;


const showModal1= () => {
    alert('Водопад в штате Орегон');
    return false;
}

}

const info_btn1 = document.querySelector('#water');

info_btn1.onklik = showModal1;
