function getValueFormInput(id){
    const getInput=document.getElementById(id)
    const inputValue=getInput.value;
    return inputValue;
}

function getBalance(){
    const balanceE=document.getElementById("balance")
    const currentBalance=balanceE.innerText
    return Number(currentBalance)
}

function setBalance(value){
    const balanceE=document.getElementById("balance")
    balanceE.innerText=value;
}

function showOnly(id){
    const cashOut=document.getElementById("cash-out")
    const addMony=document.getElementById("add-money")
    const transferMony=document.getElementById('transfer-money')
    const getBonus=document.getElementById("get-bonus")
    const payBill=document.getElementById("bill-money")
    const history=document.getElementById('history')

    cashOut.classList.add("hidden")
    addMony.classList.add("hidden")
    transferMony.classList.add("hidden")
    getBonus.classList.add("hidden")
    payBill.classList.add("hidden")
    history.classList.add("hidden")
    const Select=document.getElementById(id)
    Select.classList.remove("hidden")
}