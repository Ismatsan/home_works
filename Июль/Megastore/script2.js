const form2 = document.querySelector('#form2');


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

const creditInformation = {};

localStorage.companyName = companyName.value;
localStorage.userPosition = userPosition.value;
localStorage.monthSalary = monthSalary.value;
localStorage.quarterSalary = quarterSalary.value;
localStorage.productName = productName.value;
localStorage.goodsPrice = goodsPrice.value;
localStorage.goodsAmount = goodsAmount.value;
localStorage.loanAmount = loanAmount.value;
localStorage.loanType = loanType.value;
localStorage.loanTerm = loanTerm.value;
localStorage.pick_upPoint = pick_upPoint.value;



let userInformation = (localStorage);


const generalInformation = {...creditInformation, ...userInformation};


console.log(generalInformation);