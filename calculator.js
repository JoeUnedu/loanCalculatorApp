window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      update();
    });
  }
});
function getCurrentUIValues() {
  return {
    amount: +document.getElementById("amount").value,
    years: +document.getElementById("years").value,
    rate: +document.getElementById("rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = (document.getElementById("amount").value = 1000);
  let years = (document.getElementById("years").value = 3);
  let rate = (document.getElementById("rate").value = 1.22);
}
// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// Let pass getValue to calPayment as an aguement in update func
//  let declare principal as the amount of money borrowed
// P is the principal amount
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let i = values.rate / 12;
  let n = values.years * 12;
  // monthly payment  formular = P*i/1-(1+i)^-n
  //let normirator =  P*i
  // let  denorminator  = 1-(1+i)^-n;
  // toFixed(2) is for 2 decimal place
  let normirator = P * i;
  let denorminator = 1 - (1 + i) ** (-1 * n); //a**b means a^b.
  return (Math.round((normirator / denorminator) * 100) / 100).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment");
  let ourMonthlyPayment = monthly;
  if (isNaN(ourMonthlyPayment)) {
    monthlyPayment.innerHTML = "Enter numbers,loan amount, rate and decimals";
    return monthlyPayment.classList.add("error");
  }
  if (monthlyPayment.classList.contains("error")) {
    monthlyPayment.classList.remove("error");
  } else {
    return (monthlyPayment.innerText = monthly);
  }
}
