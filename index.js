const balanceEl = document.getElementById('balance-amount');
const incomeEl = document.getElementById('income-amount');
const expenseEl = document.getElementById('expense-amount');

const transactionTitle = document.getElementById('title');
const transactionAmount = document.getElementById('amount');

const amountEl = document.getElementById('amount');
const listEl = document.getElementById('transaction-list');

const sumbitBtn = document.getElementById('submit-btn');

let balance = 0;
let income = 0;
let expense = 0;

const updateBalance = (amount) => {
    balance += amount;
    balanceEl.innerText = `$${balance.toFixed(2)}`;
}

const updateIncomeExpense = (amount) => {
    amount > 0 ? (income += amount) : (expense += Math.abs(amount));
    incomeEl.innerText = `$${income.toFixed(2)}`;
    expenseEl.innerText = `$${expense.toFixed(2)}`;
}

const addTranscation = (title, amount) => {
    const transactionEl = document.createElement('li');
    transactionEl.innerHTML = `
        ${title} <span>$${amount.toFixed(2)}</span>
    `;
    transactionEl.classList.add(amount < 0 ? 'expense' : 'income');
    listEl.appendChild(transactionEl);
}

sumbitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = transactionTitle.value.trim();
    const amount = parseFloat(transactionAmount.value.trim());

    if (title === '' || isNaN(amount) || amount === 0) {
        alert('Please enter a valid title and amount.');
        return;
    }

    addTranscation(title, amount);
    updateBalance(amount);
    updateIncomeExpense(amount);

    transactionTitle.value = '';
    transactionAmount.value = '';
});
