const form = document.querySelector('#form2');

form.addEventListener('submit', () => {
    const elements1 = document.querySelectorAll('#form input, #form select, #form textarea');

    for(let i = 0; i < elements1.length; i++){
        // console.log(elements1[i].value);
        if (elements1[i].hasAttribute('required')){
            if(elements1[i].value === '') {
                // elements1[i].style.boxShadow = `"0 0 10px red";`
                console.log('Поле пустое');
            }
        }

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

        const credit = {};

        localStorage.companyName = companyNameElement.value;
        localStorage.userPosition = userPositionElement.value;
        localStorage.monthSalary = monthSalaryElement.value;
        localStorage.quarterSalary = quarterSalaryElement.value;
        localStorage.productName = productNameElement.value;
        localStorage.goodsPrice = goodsPriceElement.value;
        localStorage.goodsAmount = goodsAmountElement.value;
        localStorage.loanAmount = loanAmountElement.value;
        localStorage.loanType = loanTypeElement.value;
        localStorage.loanTerm = loanTermElement.value;
        localStorage.pick_upPoint = pick_upPointElement.value;


        //  let userInfo = (localStorage);
        // const totalInfo = {...credit, ...userInfo};
        // console.log(totalInfo);

    }
})
console.log(localStorage);