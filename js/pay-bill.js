document.getElementById("bill-money-button").addEventListener('click',function(){
    const bankName=getValueFormInput("bill-mony-back")
    if(bankName==="Select back"){
        alert("Select A bank");
        return;
    }
    const accountNumber=getValueFormInput("bill-number")
    if(accountNumber.length !==11){
        alert("Invalid Account Number");
        return;
    }

    const billAmount= getValueFormInput("bill-money-amount")
    const balance=getBalance() 
    const newBalance=Number(balance)-Number(billAmount)
    const pin=getValueFormInput("bill-money-pin")
    if(newBalance < 0 ){
        alert("Invalid Amount")
        return;
    }
    if(pin==="1234"){
        alert(`Pay Bill Successful ${billAmount} form ${bankName} at ${new Date()}`)
        setBalance(newBalance)
    }
    else{
        alert("Pay Bill Field");
        return;
    }
})