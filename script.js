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

        // const currentDeposite = document.getElementById("currentDeposite").innerText;
        // const currentDepositeNum = parseFloat(currentDeposite);
        // const total = depositeNum + currentDepositeNum;
        // document.getElementById("currentDeposite").innerText = total;

        updateSpanText("currentDeposite", depositeNum)
        updateSpanText("currentBalance", depositeNum);

        // // deposite connect with balance event handler
        // const currentBalance = document.getElementById("currentBalance").innerText;
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance = depositeNum + currentBalanceNumber;
        // document.getElementById("currentBalance").innerText = totalBalance;

        document.getElementById("depositeAmount").value = "";
    })

    // wtithdraw button event handler
    const withdrawbtn = document.getElementById("addwithdraw");
    withdrawbtn.addEventListener('click', function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber)

        document.getElementById("withdrawAmount").value = "";
    })
    function getInputNumber(id){
        const withdrawAmount = document.getElementById(id).value;
        const withdrawNumber = parseFloat(withdrawAmount);
        return withdrawNumber;
    }




    function updateSpanText(id, depositeNum){
            const currentBalance = document.getElementById(id).innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const totalBalance = depositeNum + currentBalanceNumber;
            document.getElementById(id).innerText = totalBalance;
    }