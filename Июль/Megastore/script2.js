const form2 = document.querySelector('#form2');

form2.addEventListener('submit', () => {
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

    function check2() {
        let company = document.getElementById('companyName').value;
        let position = document.getElementById('userPosition').value;
        let monthSalary = document.getElementById('monthSalary').value;
        let quarterSalary = document.getElementById('quarterSalary').value;
        let product = document.getElementById('productName').value;
        let price = document.getElementById('goodsPrice').value;
        let amount = document.getElementById('goodsAmount').value;
        let loanAmount = document.getElementById('loanAmount').value;
        let loanType = document.getElementById('loanType').value;
        let term = document.getElementById('loanTerm').value;
        let pick_up = document.getElementById('pick_upPoint').value;
        let button = document.getElementById('next2');
        button.disabled = true;
        if (company.length != 0 && position.length != 0 && monthSalary.length != 0 && quarterSalary.length != 0 && product.length != 0
            && price.length != 0 && amount.length != 0 && loanAmount.length != 0 && loanType.length != 0
            && term.length != 0 && pick_up.length != 0) {
            button.disabled = false;
        }
    }

    check2();

    function send2() {
        let company = document.getElementById('companyName').value;
        let position = document.getElementById('userPosition').value;
        let monthSalary = document.getElementById('monthSalary').value;
        let quarterSalary = document.getElementById('quarterSalary').value;
        let product = document.getElementById('productName').value;
        let price = document.getElementById('goodsPrice').value;
        let amount = document.getElementById('goodsAmount').value;
        let loanAmount = document.getElementById('loanAmount').value;
        let loanType = document.getElementById('loanType').value;
        let term = document.getElementById('loanTerm').value;
        let pick_up = document.getElementById('pick_upPoint').value;
        if (company == "") {
            alert("Вы не указали наименование организации");
        } else if (position == "") {
            alert("Вы не указали должность");
        } else if (monthSalary == "") {
            alert("Вы не указали зароботную плату в месяц");
        } else if (quarterSalary == "") {
            alert("Вы не указали заработную плату за квартал");
        } else if (product == "") {
            alert("Вы не указали наименование товара");
        } else if (price == "") {
            alert("Вы не указали стоимость товара");
        } else if (amount == "") {
            alert("Вы не указали колличество товара");
        } else if (loanAmount == "") {
            alert("Вы не указали сумму кредита");
        } else if (loanType == "") {
            alert("Вы не указали вид кредита");
        } else if (term == "") {
            alert("Вы не указали срок кредита");
        } else if (pick_up == "") {
            alert("Вы не выбрали точку получения товара");
        } else {
            let userInfo = (localStorage);
            const totalInfo = {...credit, ...userInfo};
            console.log(totalInfo);
        }
    }

})
