// 50/30/20 Rule
const monthlyIncome50Input = document.getElementById('monthlyIncome50');
const result50Div = document.getElementById('result50');

monthlyIncome50Input.addEventListener('input', () => {
    const income = parseFloat(monthlyIncome50Input.value);
    if (isNaN(income) || income < 0) {
        result50Div.textContent = "Please enter a valid positive income.";
        return;
    }

    const investments = income * 0.5;
    const wants = income * 0.2;
    const needs = income * 0.3;

    result50Div.textContent = Investments: $${investments.toFixed(2)}, Wants: $${wants.toFixed(2)}, Needs: $${needs.toFixed(2)};
});

// 75/25 Rule
const monthlyIncome75Input = document.getElementById('monthlyIncome75');
const result75Div = document.getElementById('result75');

monthlyIncome75Input.addEventListener('input', () => {
    const income = parseFloat(monthlyIncome75Input.value);
    if (isNaN(income) || income < 0) {
        result75Div.textContent = "Please enter a valid positive income.";
        return;
    }

    const assets = income * 0.75;
    const savings = income * 0.25;

    result75Div.textContent = Assets: $${assets.toFixed(2)}, Savings: $${savings.toFixed(2)};
});

// 20/4/10 Rule
const itemPriceInput = document.getElementById('itemPrice');
const loanTermInput = document.getElementById('loanTerm');
const monthlySalaryInput = document.getElementById('monthlySalary');
const result20Div = document.getElementById('result20');

function calculate20Rule() {
    const price = parseFloat(itemPriceInput.value);
    const term = parseFloat(loanTermInput.value);
    const salary = parseFloat(monthlySalaryInput.value);

    if (isNaN(price) || isNaN(term) || isNaN(salary) || price < 0 || term < 0 || salary < 0) {
        result20Div.textContent = "Please enter valid positive numbers.";
        return;
    }

    const downPayment = price * 0.2;
    const isValidTerm = term <= 4;
    const emi = (price - downPayment) / (term * 12);
    const isAffordable = emi <= salary * 0.1;

    // Corrected template literal string
    result20Div.textContent = Down Payment: $${downPayment.toFixed(2)}, EMI: $${emi.toFixed(2)} (${isValidTerm ? 'Valid Term' : 'Invalid Term'}), ${isAffordable ? 'Affordable' : 'Not Affordable'};
}

// Corrected event listener callbacks
[itemPriceInput, loanTermInput, monthlySalaryInput].forEach(input => {
    input.addEventListener('input', function() {  // Use standard function()
        calculate20Rule();
    });
});

calculate20Rule();