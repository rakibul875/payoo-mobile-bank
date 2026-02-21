document.getElementById("add-money-button").addEventListener('click', function () {
    const bankName = getValueFormInput("add-mony-back")
    if (bankName === "Select back") {
        alert("Select A bank");
        return;
    }
    const accountNumber = getValueFormInput("add-number")
    if (accountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    const addAmount = getValueFormInput("add-money-amount")
    const balance = getBalance()
    const newBalance = Number(balance) + Number(addAmount)
    const pin = getValueFormInput("add-money-pin")
    if (pin === "1234") {
        alert(`Add Money Successful ${addAmount} form ${bankName} at ${new Date()}`)
        setBalance(newBalance)
        const history = document.getElementById('history-continer')
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
          <div id="history-continer" class="py-5 bg-base-100 rounded-sm">
            Add Money Successful ${addAmount} form ${bankName} account number ${accountNumber} at ${new Date()}
          </div>
        `
        history.append(newHistory)
    }
    else {
        alert("Add Money Field");
        return;
    }
})