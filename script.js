// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction");
    transaction.style.display = "block";
    // const depositeWithdraw = document.getElementById("depositewithdraw");
    // depositeWithdraw.style.display = "block"; 
})

    // deposite button event handler
    const depositeBtn = document.getElementById("deposite");
    depositeBtn.addEventListener('click', function(){

        const depositeAmount = document.getElementById("depositeAmount").value;
        const depositeNum = parseFloat(depositeAmount);

        const currentDeposite = document.getElementById("currentDeposite").innerText;
        const currentDepositeNum = parseFloat(currentDeposite);

        const total = depositeNum + currentDepositeNum;
        document.getElementById("currentDeposite").innerText = total;
        document.getElementById("depositeAmount").value = "";
    })
