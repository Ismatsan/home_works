const form = document.querySelector('#form');
const surnameField = document.querySelector('#userSurname');
const nameField = document.querySelector('#userName');
const patronymicField = document.querySelector('#userPatronymic');
const birthdayField = document.querySelector('#userBirthday');
const residenceField = document.querySelector('#userResidence');
const sNumberField = document.querySelector('#serialNumber');
const personalNumberField = document.querySelector('#personalNumber');
const receivingDateField = document.querySelector('#receivingDate');
const phoneField = document.querySelector('#contactNumber');
const emailField = document.querySelector('#eMail');
const bankField = document.querySelector('#userBank');
const actualField = document.querySelector('#actualResidence');

//находит потомков инпут с тегом "р" и если у него есть атрибут 'text-error' то удаляет его
const findErrorElem =() => {
    const errorElem = document.querySelectorAll('input > p:last-child');
    for (let i = 0; i < errorElem.length; i++) {
        if (errorElem[i].hasAttribute('text-error')) {
            // errorElem[i].classList.remove('text-error');
            errorElem[i].document.querySelector('.p_teg > p').remove();
        }
    }
}

const createErrorElem =() =>{
    const elem = document.createElement('p');
    elem.className ='text-error';
    elem.innerText = 'Обязательное поле';
    return elem;
}

const checkElem =(event) =>{
    if (event.target.value !==''){
        event.target.classList.remove('empty-field');
        event.target.nextElementSibling.remove();
    }
}

form.addEventListener('submit', () =>{
    const elements = document.querySelectorAll('#form input, #form select, #form textarea');
    for(let i = 0; i < elements.length; i++){
        if(elements[i].hasAttribute('data-required')){
            if (elements[i].value === '') {
                elements[i].classList.add('empty-field');
              findErrorElem()
                elements[i].after(createErrorElem())
                elements[i].addEventListener('input', checkElem)
                // return
            }
        }
    }
})

surnameField.addEventListener('change', () =>{
    console.log(surnameField.value);
})
surnameField.addEventListener('focus', () => {
    surnameField.classList.add('box-shadow');
})

nameField.addEventListener('input', ()=>{
    console.log(nameField.value);
})
nameField.addEventListener('focus', () => {
    nameField.classList.add('box-shadow');
})

patronymicField.addEventListener('change', () =>{
    console.log(patronymicField.value);
    patronymicField.classList.add('box-shadow');
})

birthdayField.addEventListener('change', () =>{
    console.log(birthdayField.value);
    birthdayField.classList.add('box-shadow');
})

residenceField.addEventListener('change', () =>{
    console.log(residenceField.value);
    residenceField.classList.add('box-shadow');
})

sNumberField.addEventListener('change', () =>{
    console.log(sNumberField.value);
    sNumberField.classList.add('box-shadow');
})

personalNumberField.addEventListener('input', () =>{
    console.log(personalNumberField.value);
    personalNumberField.classList.add('box-shadow');
})

receivingDateField.addEventListener('input', () =>{
    console.log(receivingDateField.value);
    receivingDateField.classList.add('box-shadow');
})

phoneField.addEventListener('change', () =>{
    console.log(phoneField.value);
})
phoneField.addEventListener('focus', () => {
    phoneField.classList.add('box-shadow');
})

emailField.addEventListener('input', () =>{
    console.log(emailField.value);
   emailField.classList.add('box-shadow');
})

bankField.addEventListener('input', () =>{
    console.log(bankField.value);
    bankField.classList.add('box-shadow');
})

actualField.addEventListener('input', () =>{
    console.log(actualField.value);
    actualField.classList.add('box-shadow');
})


//window.location.href = 'form2.html';
// localStorage.userSurname = userSurname.value;
// localStorage.userName = userName.value;
// localStorage.userPatronymic = userPatronymic.value;
// localStorage.userBirthday = userBirthday.value;
// localStorage.userResidence = userResidence.value;
// localStorage.serialNumber = serialNumber.value;
// localStorage.personalNumber = personalNumber.value;
// localStorage.receivingDate = receivingDate.value;
// localStorage.contactNumber = contactNumber.value;
// localStorage.eMail = eMail.value;
// localStorage.userBank = userBank.value;
// localStorage.actualResidence = actualResidence.value;