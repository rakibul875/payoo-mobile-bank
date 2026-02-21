document.getElementById('transfer-money-button').addEventListener('click', function () {
    const accountNumber = getValueFormInput('transfer-number')
    if (accountNumber.length !== 11) {
        alert("Enter a Valid Number")
        return;
    }
    const Amount = getValueFormInput("transfer-money-amount")
    const balance = getBalance()
    const newBalance = balance - Number(Amount)
    if (newBalance < 0) {
        alert('Invalid Amount')
        return;
    }
    const pin = getValueFormInput("transfer-money-pin")
    if (pin === "1234") {
        alert("Transfer Mony Successful")
        setBalance(newBalance)
        const history = document.getElementById('history-continer')
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
          <div id="history-continer" class="py-5 bg-base-100 rounded-sm">
            Transfer money Successful to ${accountNumber} amount ${Amount} at ${new Date()}
          </div>
        `
        history.append(newHistory)
        return;
    }
    else {
        alert("Invalid Pin")
        return;
    }
})