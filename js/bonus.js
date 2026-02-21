document.getElementById("bonus-button").addEventListener('click',function(){
    const couponCode= document.getElementById("bonus-coupon");
    const code=couponCode.value;
    const balance=getBalance()
    const bonusBalance=1000;
    const newBalance=balance+bonusBalance;
    if(code.startsWith("56") && code.length ===8){
        alert(`Congratulations, you have received a bonus ${bonusBalance}$!`);
       setBalance(newBalance)
       return;
    }
    else{
        alert("Enter Valid Coupon")
        return;
    }
})