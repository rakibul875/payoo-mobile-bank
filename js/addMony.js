document.getElementById("add-money-button").addEventListener('click',function(){
    const bankName=getValueFormInput("add-mony-back")
    if(bankName==="Select back"){
        alert("Select A bank");
        return;
    }
    const accountNumber=getValueFormInput("add-number")
    if(accountNumber.length !==11){
        alert("Invalid Account Number");
        return;
    }

    const addAmount= getValueFormInput("add-money-amount")
    const balance=getBalance() 
    const newBalance=Number(balance)+Number(addAmount)
    const pin=getValueFormInput("add-money-pin")
    if(pin==="1234"){
        alert(`Add Money Successful ${addAmount} form ${bankName} at ${new Date()}`)
        setBalance(newBalance)
    }
    else{
        alert("Add Money Field");
        return;
    }
})