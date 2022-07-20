

const form = document.querySelector('#form');

form.addEventListener('submit', () =>{
    const userSurnameElement = document.querySelector('#userSurname');
    const userNameElement = document.querySelector('#userName');
    const userPatronymicElement = document.querySelector('#userPatronymic');
    const userBirthdayElement = document.querySelector('#userBirthday');
    const userResidenceElement = document.querySelector('#userResidence');
    const serialNumberElement = document.querySelector('#serialNumber')
    const identificationNumberElement = document.querySelector('#identificationNumber')
    const receivingDateElement = document.querySelector('#receivingDate')
    const contactNumberElement = document.querySelector('#contactNumber')
    const eMailElement = document.querySelector('#eMail')
    const userBankElement = document.querySelector('#userBank')
    const actualResidenceElement = document.querySelector('#actualResidence')

    localStorage.userSurname = userSurname.value;
    localStorage.userName = userName.value;
    localStorage.userPatronymic = userPatronymic.value;
    localStorage.userBirthday = userBirthday.value;
    localStorage.userResidence = userResidence.value;
    localStorage.serialNumber = serialNumber.value;
    localStorage.identificationNumber = identificationNumber.value;
    localStorage.receivingDate = receivingDate.value;
    localStorage.contactNumber = contactNumber.value;
    localStorage.eMail = eMail.value;
    localStorage.userBank = userBank.value;
    localStorage.actualResidence = actualResidence.value;
    window.location.href = 'form2.html';
})

// document.getElementById('next').onclick = function() {
//     window.location.href = 'form2.html';
// };

console.log(eMail);


