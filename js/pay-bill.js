document.getElementById("bill-money-button").addEventListener('click', function () {
    const bankName = getValueFormInput("bill-mony-back")
    if (bankName === "Select back") {
        alert("Select A bank");
        return;
    }
    const accountNumber = getValueFormInput("bill-number")
    if (accountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    const billAmount = getValueFormInput("bill-money-amount")
    const balance = getBalance()
    const newBalance = Number(balance) - Number(billAmount)
    const pin = getValueFormInput("bill-money-pin")
    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }
    if (pin === "1234") {
        alert(`Pay Bill Successful ${billAmount} form ${bankName} at ${new Date()}`)

        const history = document.getElementById('history-continer')
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
          <div id="history-continer" class="py-5 bg-base-100 rounded-sm">
            Pay Bill Successful ${billAmount} form ${bankName} account number ${accountNumber} at ${new Date()}
          </div>
        `
        history.append(newHistory)
        setBalance(newBalance)
    }
    else {
        alert("Pay Bill Field");
        return;
    }
})