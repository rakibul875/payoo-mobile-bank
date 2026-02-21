document.getElementById('cashOut-button').addEventListener('click',function(){
    const cashOutNumber=getValueFormInput('cashOut-number')
    if(cashOutNumber.length !==11){
        alert("Invalid Number")
        return;
    }
    const amount=getValueFormInput('amount-number')
    const balance=getBalance()
    const newBalance=balance-Number(amount)
    if(newBalance < 0){
        alert("Invalid Amount")
        return;
    }
    const pin=getValueFormInput('cashOut-pin')
    if(pin ==="1234"){
        alert("Cash Out Successful")
        setBalance(newBalance);
                const history = document.getElementById('history-continer')
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
          <div id="history-continer" class="py-5 bg-base-100 rounded-sm">
            Cash Out Successful to ${cashOutNumber} amount ${amount} at ${new Date()}
          </div>
        `
        history.append(newHistory)
        return
    }
    else{
        alert("Cash Out Field")
        return;
    }
})


// document.getElementById('cashOut-button').addEventListener('click',function(){
//     const cashOutInput=document.getElementById('cashOut-number')
//     const cashOutNumber=cashOutInput.value
//     if(cashOutNumber.length !=11){
//         alert("Invalid Number")
//         return
//     }
//     const cashOutAmountInput=document.getElementById('amount-number')
//     const cashOutAmount=cashOutAmountInput.value
    
//     const totalBalance=document.getElementById('balance')
//     const balance=totalBalance.innerText
//     let newBalance=Number(balance)-Number(cashOutAmount)
//     console.log(newBalance)
//     if(newBalance <0){
//         alert("Invalid Amount")
//         return
//     }
    
//     const pinInput=document.getElementById('cashOut-pin')
//     const pin=pinInput.value
//     if(pin==="1234"){
//         alert("Cash Out Successful")
//         totalBalance.innerText=newBalance
//     }
//     else{
//         alert("Invalid pin")
//         return
//     }
// })