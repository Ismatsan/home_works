const form = document.querySelector('#form');
const nameField = document.querySelector('#userName');
const phoneField = document.querySelector('#userPhone');

form.addEventListener('submit', () =>{
    const elements = document.querySelectorAll('#form input, #form select, #form textarea');
    for(let i = 0; i < elements.length; i++){
        elements[i].value;
        if(elements[i].hasAttribute('required')){
            if (elements[i].value === '') {
                elements[i].classList.add('empty-field');
            }
        }

        nameField.addEventListener('change', () =>{

            console.log(nameField.value);
        })

        phoneField.addEventListener('input', ()=>{
            console.log(phoneField.value);
        })

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
        // window.location.href = 'form2.html';
    }
})
