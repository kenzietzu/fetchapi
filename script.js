const position = ['SQ', 'ABNB', 'PYPL', 'GOOG', 'U', 'TSM', 'QQQ', 'TSLA', 'AMZN'];
let price = [];
let date = [];
const sumValueText = document.getElementById('sumValue');
const leftValueText = document.getElementById('left-value');
const leftNtdText = document.getElementById('left-ntd');
const leftRateText = document.getElementById('left-rate');
let ntdRate = 0;
let rateUpdateTime = new Date;
const loader = document.getElementById('loader');

function buildData() {
    for (let i = 0; i < position.length; i++) {
        document.getElementById(`stock${i}`).textContent = position[i];
        document.getElementById(`price${i}`).textContent = price[i];
    }

    document.getElementById('stock9').textContent = position[6];
    document.getElementById('price9').textContent = price[6];
    document.getElementById('stock10').textContent = position[7];
    document.getElementById('price10').textContent = price[7];
    calculate();

    //date
    document.getElementById('date-container').textContent = date[0];
    //left-data
    leftValueText.textContent = `$${sumValueText.textContent}`;
    leftNtdText.textContent = `NT${Math.floor(Number.parseInt(sumValueText.textContent) * ntdRate)}`;
    leftRateText.textContent = `Rate = 1 : ${ntdRate}`;
    loader.hidden = true;
}

async function getData() {
    const apiURL = 'https://api.twelvedata.com';
    const key = '5877a14b53e9409f98bdd83275f7d6a3';

    try {
        for (let i = 0; i < position.length; i++) {
            console.log(`${apiURL}/time_series?symbol=${position[i]}&interval=1day&apikey=${key}`);
            const response = await fetch(`${apiURL}/time_series?symbol=${position[i]}&interval=1day&apikey=${key}`);
            const data = await response.json();
            price.push(Math.floor(data.values[0].close * 100) / 100);
            date.push(data.values[0].datetime);
        }
    } catch (err) {
        console.log(err);
    }

    buildData();
}

getData();

function calculate() {
    const table = document.getElementById('table');
    let profit0 = 0, profit1 = 0, profit2 = 0, profit3 = 0, profit4 = 0, profit5 = 0, profit6 = 0, profit7 = 0, profit8 = 0, profit9 = 0, profit10 = 0, profit11 = 0, profit12 = 0;

    profit0 = profit0 + Number.parseInt(((table.rows[1].cells[1].innerHTML) * (table.rows[1].cells[3].innerHTML)) - ((table.rows[1].cells[2].innerHTML) * (table.rows[1].cells[3].innerHTML)));
    profit1 = profit1 + Number.parseInt(((table.rows[2].cells[1].innerHTML) * (table.rows[2].cells[3].innerHTML)) - ((table.rows[2].cells[2].innerHTML) * (table.rows[2].cells[3].innerHTML)));
    profit2 = profit2 + Number.parseInt(((table.rows[3].cells[1].innerHTML) * (table.rows[3].cells[3].innerHTML)) - ((table.rows[3].cells[2].innerHTML) * (table.rows[3].cells[3].innerHTML)));
    profit3 = profit3 + Number.parseInt(((table.rows[4].cells[1].innerHTML) * (table.rows[4].cells[3].innerHTML)) - ((table.rows[4].cells[2].innerHTML) * (table.rows[4].cells[3].innerHTML)));
    profit4 = profit4 + Number.parseInt(((table.rows[5].cells[1].innerHTML) * (table.rows[5].cells[3].innerHTML)) - ((table.rows[5].cells[2].innerHTML) * (table.rows[5].cells[3].innerHTML)));
    profit5 = profit5 + Number.parseInt(((table.rows[6].cells[1].innerHTML) * (table.rows[6].cells[3].innerHTML)) - ((table.rows[6].cells[2].innerHTML) * (table.rows[6].cells[3].innerHTML)));
    profit6 = profit6 + Number.parseInt(((table.rows[7].cells[1].innerHTML) * (table.rows[7].cells[3].innerHTML)) - ((table.rows[7].cells[2].innerHTML) * (table.rows[7].cells[3].innerHTML)));
    profit7 = profit7 + Number.parseInt(((table.rows[8].cells[1].innerHTML) * (table.rows[8].cells[3].innerHTML)) - ((table.rows[8].cells[2].innerHTML) * (table.rows[8].cells[3].innerHTML)));
    profit8 = profit8 + Number.parseInt(((table.rows[9].cells[1].innerHTML) * (table.rows[9].cells[3].innerHTML)) - ((table.rows[9].cells[2].innerHTML) * (table.rows[9].cells[3].innerHTML)));
    profit9 = profit9 + Number.parseInt(((table.rows[10].cells[1].innerHTML) * (table.rows[10].cells[3].innerHTML)) - ((table.rows[10].cells[2].innerHTML) * (table.rows[10].cells[3].innerHTML)));
    profit10 = profit10 + Number.parseInt(((table.rows[11].cells[1].innerHTML) * (table.rows[11].cells[3].innerHTML)) - ((table.rows[11].cells[2].innerHTML) * (table.rows[11].cells[3].innerHTML)));
    profit11 = profit11 + Number.parseInt(((table.rows[12].cells[1].innerHTML) * (table.rows[12].cells[3].innerHTML)) - ((table.rows[12].cells[2].innerHTML) * (table.rows[12].cells[3].innerHTML)));
    profit12 = profit12 + Number.parseInt(((table.rows[13].cells[1].innerHTML) * (table.rows[13].cells[3].innerHTML)) - ((table.rows[13].cells[2].innerHTML) * (table.rows[13].cells[3].innerHTML)));

    document.getElementById('profit0').textContent = profit0;
    document.getElementById('profit1').textContent = profit1;
    document.getElementById('profit2').textContent = profit2;
    document.getElementById('profit3').textContent = profit3;
    document.getElementById('profit4').textContent = profit4;
    document.getElementById('profit5').textContent = profit5;
    document.getElementById('profit6').textContent = profit6;
    document.getElementById('profit7').textContent = profit7;
    document.getElementById('profit8').textContent = profit8;
    document.getElementById('profit9').textContent = profit9;
    document.getElementById('profit10').textContent = profit10;
    document.getElementById('profit11').textContent = profit11;
    document.getElementById('profit12').textContent = profit12;

    let sumVal = 0;
    for (let i = 1; i < table.rows.length - 1; i++) {
        sumVal = sumVal + Number.parseInt(table.rows[i].cells[4].innerHTML);
    }
    document.getElementById('sumVal').textContent = sumVal;

    //change color
    const profit = document.querySelectorAll('.profit');
    profit.forEach(profit => {
        if (Number.parseInt(profit.textContent) > 0) {
            profit.style.color = '#ff0099';
        }
    })

    let value0 = 0, value1 = 0, value2 = 0, value3 = 0, value4 = 0, value5 = 0, value6 = 0, value7 = 0, value8 = 0, value9 = 0, value10 = 0, value11 = 0, value12 = 0;

    value0 = value0 + Number.parseInt(((table.rows[1].cells[1].innerHTML) * (table.rows[1].cells[3].innerHTML)));
    value1 = value1 + Number.parseInt(((table.rows[2].cells[1].innerHTML) * (table.rows[2].cells[3].innerHTML)));
    value2 = value2 + Number.parseInt(((table.rows[3].cells[1].innerHTML) * (table.rows[3].cells[3].innerHTML)));
    value3 = value3 + Number.parseInt(((table.rows[4].cells[1].innerHTML) * (table.rows[4].cells[3].innerHTML)));
    value4 = value4 + Number.parseInt(((table.rows[5].cells[1].innerHTML) * (table.rows[5].cells[3].innerHTML)));
    value5 = value5 + Number.parseInt(((table.rows[6].cells[1].innerHTML) * (table.rows[6].cells[3].innerHTML)));
    value6 = value6 + Number.parseInt(((table.rows[7].cells[1].innerHTML) * (table.rows[7].cells[3].innerHTML)));
    value7 = value7 + Number.parseInt(((table.rows[8].cells[1].innerHTML) * (table.rows[8].cells[3].innerHTML)));
    value8 = value8 + Number.parseInt(((table.rows[9].cells[1].innerHTML) * (table.rows[9].cells[3].innerHTML)));
    value9 = value9 + Number.parseInt(((table.rows[10].cells[1].innerHTML) * (table.rows[10].cells[3].innerHTML)));
    value10 = value10 + Number.parseInt(((table.rows[11].cells[1].innerHTML) * (table.rows[11].cells[3].innerHTML)));
    value11 = value11 + Number.parseInt(((table.rows[12].cells[1].innerHTML) * (table.rows[12].cells[3].innerHTML)));
    value12 = value12 + Number.parseInt(((table.rows[13].cells[1].innerHTML) * (table.rows[13].cells[3].innerHTML)));

    document.getElementById('value0').textContent = value0;
    document.getElementById('value1').textContent = value1;
    document.getElementById('value2').textContent = value2;
    document.getElementById('value3').textContent = value3;
    document.getElementById('value4').textContent = value4;
    document.getElementById('value5').textContent = value5;
    document.getElementById('value6').textContent = value6;
    document.getElementById('value7').textContent = value7;
    document.getElementById('value8').textContent = value8;
    document.getElementById('value9').textContent = value9;
    document.getElementById('value10').textContent = value10;
    document.getElementById('value11').textContent = value11;
    document.getElementById('value12').textContent = value12;
    let sumValue = 0;
    for (let i = 1; i < table.rows.length - 1; i++) {
        sumValue = sumValue + Number.parseInt(table.rows[i].cells[5].innerHTML);
    }
    sumValueText.textContent = sumValue;

    //chart
    const cash = Number.parseInt(table.rows[14].cells[5].innerHTML) + Number.parseInt(table.rows[15].cells[5].innerHTML);
    console.log(sumValue);
    const stock = sumValue - cash;
    console.log(cash);
    console.log(stock);

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cash', 'Stock'],
            datasets: [{
                data: [cash, stock],
                backgroundColor: [
                    'rgb(255, 205, 86)',
                    'rgb(235, 235, 235)'
                ],
                hoverOffset: 4
            }]
        }
    });
}

async function getRate() {
    const rateApiUrl = 'https://v6.exchangerate-api.com/v6/71735a501f1d90cafdc87a53/latest/USD';
    try {
        const rateResponese = await fetch(rateApiUrl);
        const rateData = await rateResponese.json();
        ntdRate = rateData.conversion_rates.TWD;
        rateUpdateTime = rateData.time_last_update_utc;
    } catch (err) {
        console.log(err);
    }
}
getRate();