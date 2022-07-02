const showModal = () => {
    alert('Ездовая собака в заснеженных лесах Норвегии');
    return false;
}

const test = () =>{

}

const info_btn = document.querySelector('#nature');

info_btn.onmouseenter = showModal;


const showModal1= () => {
    alert('Водопад в штате Орегон');
    return false;
}

const test1 = () =>{

}

const info_btn1 = document.querySelector('#water');

info_btn1.onmouseenter = showModal1;


let arguments = ['']