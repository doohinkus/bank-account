

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;

}

BankAccount.prototype.initialDeposit = function (deposit){
  return this.amount += deposit;
  // console.log("function: ", this.amount);
}

BankAccount.prototype.deposit = function (deposit){
  return this.amount = deposit + this.amount;
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
    var account = new BankAccount(userName, 0);
  // console.log (userName, " ", userInitialBalance, " ", account)

    // $("#openingBalance").hide();
    // $("#register").fadeIn();

    // account.withdrawal(parseInt($("#userWithdrawal").val()));
    account.deposit(userInitialBalance);
    $("#runningBalanceWell").text(account.amount);
    $("#userNameHead").text(account.name);

    //$("#userDeposit").val(0);




  });

  $("#withdrawalButton").click(function (event){
    var userName = $("#userName").val();
    var userInitialBalance = parseInt($("#userInitialBalance").val());
    var account = new BankAccount(userName, 0);
  event.preventDefault();
  // console.log(account.withdrawal(parseInt($("#userWithdrawal").val())), "sds");
  account.withdrawal(parseInt($("#userWithdrawal").val()));
  $("#runningBalanceWell").text(account.amount);
  $("#userNameHead").text(account.name);
  });



});
