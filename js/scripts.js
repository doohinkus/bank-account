var bankAccounts = [];

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;

}


BankAccount.prototype.deposit = function (deposit){
  if (deposit >=0){
    return this.amount = deposit + this.amount;
  }else {
    return "Please enter a numerical amount"
  }

  // console.log("function: ", this.amount);
}

BankAccount.prototype.withdrawal = function (withdrawal){
  return this.amount = this.amount - withdrawal ;
}







$(document).ready(function (){

  $("#form2").click(function (event){
    event.preventDefault();
    var userName = $("#userName").val();
    var userInitialBalance = parseInt($("#userInitialBalance").val());
    var userDeposit = parseInt($("#userDeposit").val());
    var account = new BankAccount(userName, 0);
    bankAccounts.push(account);

    if (userDeposit>=0){
      bankAccounts[0].deposit(userDeposit);
    }else {
      bankAccounts[0].deposit(userInitialBalance);
    }


    $("#openingBalance").hide();
    $("#register").fadeIn();

    // account.withdrawal(parseInt($("#userWithdrawal").val()));

    $("#runningBalanceWell").text(bankAccounts[0].amount);
    $("#userNameHead").text(bankAccounts[0].name);
// console.log(bankAccounts)
    //$("#userDeposit").val(0);




  });

  $("#withdrawalButton").click(function (event){
    var userName = $("#userName").val();

    // var account = new BankAccount(userName, 0);
  event.preventDefault();
  // console.log(account.withdrawal(parseInt($("#userWithdrawal").val())), "sds");
  bankAccounts[0].withdrawal(parseInt($("#userWithdrawal").val()));

  $("#runningBalanceWell").text(bankAccounts[0].amount);
  $("#userNameHead").text(bankAccounts[0].name);
  });



});
