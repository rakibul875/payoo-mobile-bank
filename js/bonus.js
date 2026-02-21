document.getElementById("bonus-button").addEventListener('click',function(){
    const couponCode= document.getElementById("bonus-coupon");
    const code=couponCode.value;
    const balance=getBalance()
    const bonusBalance=1000;
    const newBalance=balance+bonusBalance;
    if(code.startsWith("56") && code.length ===8){
        alert(`Congratulations, you have received a bonus ${bonusBalance}$!`);
       setBalance(newBalance)
               const history = document.getElementById('history-continer')
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
          <div id="history-continer" class="py-5 bg-base-100 rounded-sm">
            Add Money Successful $1000 form Bonus at ${new Date()}
          </div>
        `
        history.append(newHistory)
       return;
    }
    else{
        alert("Enter Valid Coupon")
        return;
    }
})