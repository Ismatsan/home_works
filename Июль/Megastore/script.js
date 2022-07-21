

const form = document.querySelector('#form');

form.addEventListener('submit', () =>{
    const userSurnameElement = document.querySelector('#userSurname');
    const userNameElement = document.querySelector('#userName');
    const userPatronymicElement = document.querySelector('#userPatronymic');
    const userBirthdayElement = document.querySelector('#userBirthday');
    const userResidenceElement = document.querySelector('#userResidence');
    const serialNumberElement = document.querySelector('#serialNumber')
    const personalNumberElement = document.querySelector('#personalNumber')
    const receivingDateElement = document.querySelector('#receivingDate')
    const contactNumberElement = document.querySelector('#contactNumber')
    const eMailElement = document.querySelector('#eMail')
    const userBankElement = document.querySelector('#userBank')
    const actualResidenceElement = document.querySelector('#actualResidence')

    localStorage.userSurname = userSurnameElement.value;
    localStorage.userName = userNameElement.value;
    localStorage.userPatronymic = userPatronymicElement.value;
    localStorage.userBirthday = userBirthdayElement.value;
    localStorage.userResidence = userResidenceElement.value;
    localStorage.serialNumber = serialNumberElement.value;
    localStorage.personalNumber = personalNumberElement.value;
    localStorage.receivingDate = receivingDateElement.value;
    localStorage.contactNumber = contactNumberElement.value;
    localStorage.eMail = eMailElement.value;
    localStorage.userBank = userBankElement.value;
    localStorage.actualResidence = actualResidenceElement.value;

    function check(){
    let surname = document.getElementById('userSurname').value;
    let name = document.getElementById('userName').value;
    let patronymic = document.getElementById('userPatronymic').value;
    let birth = document.getElementById('userBirthday').value;
    let residence = document.getElementById('userPatronymic').value;
    let serialNumber = document.getElementById('serialNumber').value;
    let personalNumber = document.getElementById('personalNumber').value;
    let receivingDate = document.getElementById('receivingDate').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let eMail = document.getElementById('eMail').value;
    let bank = document.getElementById('userBank').value;
    let actual = document.getElementById('actualResidence').value;
    let button = document.getElementById('next');
    button.disabled = true;
    if (surname.length != 0 && name.length != 0 && patronymic.length != 0 && birth.length != 0 && residence.length != 0
    && serialNumber.length != 0 && personalNumber.length != 0 && receivingDate.length != 0 && contactNumber.length !=0
    && eMail.length != 0 && bank.length != 0 && actual.length != 0) {
        button.disabled = false;
    }
}
check();

function send() {
    let sur = document.getElementById('userSurname').value;
    let name = document.getElementById('userName').value;
    let patronymic = document.getElementById('userPatronymic').value;
    let birth = document.getElementById('userBirthday').value;
    let residence = document.getElementById('userPatronymic').value;
    let serialNumber = document.getElementById('serialNumber').value;
    let personalNumber = document.getElementById('personalNumber').value;
    let receivingDate = document.getElementById('receivingDate').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let eMail = document.getElementById('eMail').value;
    let bank = document.getElementById('userBank').value;
    let actual = document.getElementById('actualResidence').value;
    if (sur == "") {
        alert("Вы не указали Фамилию");
    } else if (name == "") {
        alert("Вы не указали Имя");
    } else if (patronymic == "") {
        alert("Вы не указали Отчество");
    } else if (birth == "") {
        alert("Вы не указали день рождения");
    } else if (residence == "") {
        alert("Вы не указали прописку");
    } else if (serialNumber == "") {
        alert("Вы не указали серийный номер");
    } else if (personalNumber == "") {
        alert("Вы не указали ИНН");
    } else if (receivingDate == "") {
        alert("Вы не указали дату получения");
    } else if (contactNumber == "") {
        alert("Вы не указали контактный номер");
    } else if (eMail == "") {
        alert("Вы не указали электронный адресс");
    } else if (bank == "") {
        alert("Вы не выбрали банк");
    } else if (actual == "") {
        alert("Вы не указали фактический адресс");
    } else {
        window.location.href = 'form2.html';
    }
}

})
