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

    cashOut.classList.add("hidden")
    addMony.classList.add("hidden")

    const Select=document.getElementById(id)
    Select.classList.remove("hidden")
}