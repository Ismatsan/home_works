

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
    const companyNameElement = document.querySelector('#companyName')
    const userPositionElement = document.querySelector('#userPosition')
    const monthSalaryElement = document.querySelector('#monthSalary')
    const quarterSalaryElement = document.querySelector('#quarterSalary')
    const productNameElement = document.querySelector('#productName')
    const goodsPriceElement = document.querySelector('#goodsPrice')
    const goodsAmountElement = document.querySelector('#goodsAmount')
    const loanAmountElement = document.querySelector('#loanAmount')
    const loanTypeElement = document.querySelector('#loanType')
    const loanTermElement = document.querySelector('#loanTerm')
    const pick_upPointElement = document.querySelector('#pick_upPoint')



    console.log(userSurnameElement.value);
    console.log(userNameElement.value);
    console.log(userPatronymicElement.value);
    console.log(userBirthdayElement.value);
    console.log(userResidenceElement.value);
    console.log(serialNumberElement.value);
    console.log(identificationNumberElement.value);
    console.log(receivingDateElement.value);
    console.log(contactNumberElement.value);
    console.log(eMailElement.value);
    console.log(userBankElement.value);
    console.log(actualResidenceElement.value);
    console.log(companyNameElement.value);
    console.log(userPositionElement.value);
    console.log(monthSalaryElement.value);
    console.log(quarterSalaryElement.value);
    console.log(productNameElement.value);
    console.log(goodsPriceElement.value);
    console.log(goodsAmountElement.value);
    console.log(loanAmountElement.value);
    console.log(loanTypeElement.value);
    console.log(loanTermElement.value);
    console.log(pick_upPointElement.value);
})


document.getElementById('next').onclick = function(){
    window.location.href = 'form2.html';
};