//Diposit addEventListener
document.getElementById("deposit-btn").addEventListener("click", function () {
    const DipositInput = document.getElementById("deposit-input");
    const DipositValue = DipositInput.value;
    const DipositInputAmount = parseFloat(DipositValue)

    // Update Diposit amount.
    const dipositTotal = document.getElementById("diposit-total");
    const dipositTotalAmount = dipositTotal.innerText;
    const dipositTotalAmountNumder = parseFloat(dipositTotalAmount);
    const newDipositTotal = dipositTotalAmountNumder + DipositInputAmount;
    dipositTotal.innerText = newDipositTotal.toFixed(2);

    // Update Balance amount.
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceTotal.innerText;
    const balanceTotalAmountNumder = parseFloat(balanceTotalAmount);
    const newBalanceTotal = balanceTotalAmountNumder + DipositInputAmount;
    balanceTotal.innerText = newBalanceTotal.toFixed(2)

    // Clear the deposite input field.
    DipositInput.value = '';
});

// Withdraw addEventListener.
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawValue = withdrawInput.value;
    const withdrawValueAmount = parseFloat(withdrawValue);

    // Update withdraw amount.
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalAmount = withdrawTotal.innerText;
    const withdrawTotalAmountNumber = parseFloat(withdrawTotalAmount);
    const newWithdrawTotal = withdrawTotalAmountNumber + withdrawValueAmount;
    withdrawTotal.innerText = newWithdrawTotal.toFixed(2);

    // Update Balance amount.
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceTotal.innerText;
    const balanceTotalAmountNumder = parseFloat(balanceTotalAmount);
    const newBalanceTotal = balanceTotalAmountNumder - withdrawValueAmount;
    balanceTotal.innerText = newBalanceTotal.toFixed(2)

    // Clear the withdraw input field.
    withdrawInput.value = "";
})