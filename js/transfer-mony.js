document.getElementById('transfer-money-button').addEventListener('click',function(){
   const accountNumber= getValueFormInput('transfer-number')
   if(accountNumber.length !==11){
    alert("Enter a Valid Number")
    return;
   }
   const Amount=getValueFormInput("transfer-money-amount")
   const balance=getBalance()
   const newBalance=balance-Number(Amount)
   if(newBalance < 0){
    alert('Invalid Amount')
    return;
   }
   const pin=getValueFormInput("transfer-money-pin")
   if(pin==="1234"){
    alert("Transfer Mony Successful")
    setBalance(newBalance)
    return;
   }
   else{
    alert("Invalid Pin")
    return;
   }
})