document.getElementById("Login-button").addEventListener('click',function(){
    const numberInput=document.getElementById("input-number")
    const number=numberInput.value

    const pinInput=document.getElementById("input-pin")
    const pin=pinInput.value
    if(number==="01911225544" && pin==="1234"){
        alert("Login Success")
        window.location.assign("Home.html")
    }
    else{
        alert("Login Field")
        return;
    }
})