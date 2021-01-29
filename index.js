document.getElementById("login-btn").addEventListener("click", function () {
    document.getElementById("heading").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-amount");
    const depositInput = document.getElementById("deposit-input");
    const depositAmountNum = parseFloat(depositAmount.innerText);
    const depositInputNum = parseFloat(depositInput.value);
    depositAmount.innerText = depositAmountNum + depositInputNum;

    let balanceAmount = document.getElementById("balance-amount");
    let balanceAmountNum = parseFloat(balanceAmount.innerText);
    balanceAmount.innerText = balanceAmountNum + depositInputNum;

    depositInput.value = "";
})
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountNum = parseFloat(withdrawAmount.innerText);
    const withdrawInputNum = parseFloat(withdrawInput.value);
    withdrawAmount.innerText = withdrawAmountNum + withdrawInputNum;

    let balanceAmount = document.getElementById("balance-amount");
    let balanceAmountNum = parseFloat(balanceAmount.innerText);
    balanceAmount.innerText = balanceAmountNum - withdrawInputNum;

    withdrawInput.value = "";
})