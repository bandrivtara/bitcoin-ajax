const getExchangeData = () => {
    fetch('https://blockchain.info/pl/ticker/')
    .then(resp=>resp.json())
    .then(json=>{

        const priceContainer = document.getElementById('exchange-rate');
        const currentPriceContainer = document.getElementById('current-price');
        const icon = document.querySelector('#exchange-rate i');

        let currentPrice = parseFloat(currentPriceContainer.innerText);

        let list = document.getElementById('valute');
        let listValue =list.options[list.selectedIndex].value;

        let newPrice;
        let symbol;

        if (listValue == 'USD') {
            newPrice = json.USD.last;
            symbol = json.USD.symbol;
        } else if (listValue == 'EUR') {
            newPrice = json.EUR.last;
            symbol = json.EUR.symbol;
        } else if (listValue == 'GBP') {
            newPrice = json.GBP.last;
            symbol = json.GBP.symbol;
        } else if (listValue == 'PLN') {
            newPrice = json.PLN.last; 
            symbol = json.PLN.symbol;
        } else if (listValue == 'RUB') {
            newPrice = json.RUB.last;
            symbol = json.RUB.symbol;
        }


        priceContainer.className = '';
        icon.className = '';

        if(currentPrice === newPrice || isNaN(currentPrice)) {
            icon.className = 'fas fa-minus';
            priceContainer.classList.add('blue'); 
        } else if(currentPrice>newPrice) {
            icon.className = 'fas fa-sort-down';
            priceContainer.classList.add('red');
        } else {
            icon.className = 'fas fa-sort-up';
            priceContainer.classList.add('green');
        }
        currentPriceContainer.innerText = newPrice + ' ' + symbol;
    });
}

getExchangeData();

let interval = setInterval(getExchangeData, 1000);




