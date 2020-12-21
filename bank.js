// login button event handler

const loginbtn = document.getElementById('login');
loginbtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});

// Deposit button event handler

const dipositbtn = document.getElementById('Depositbtn');
dipositbtn.addEventListener("click", function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;

    // document.getElementById('currentDeposit').innerText = totalDeposit;

    // currentBlance
    // const currentBlance = document.getElementById('currentBlance').innerText;
    // const currentBlanceNumber = parseFloat(currentBlance);
    // const totalBlance = depositNumber + currentBlanceNumber;
    // document.getElementById('currentBlance').innerText = totalBlance;

    document.getElementById('depositAmount').value = "";


    UpdateSpanText("currentBlance", depositNumber);
    UpdateSpanText("currentDeposit", depositNumber);
});

// Withdraw button event handler
const withdrawbtn  = document.getElementById('withdrawbtn');
withdrawbtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    // document.getElementById("currentWithdraw").innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value = "";

    UpdateSpanText('currentWithdraw', withdrawNumber);
    UpdateSpanText('currentBlance', -1 * withdrawNumber);

});

// function
function UpdateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;

}