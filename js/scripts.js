$(document).ready(function (){
  (function (){
      var  bankAccount = {
        name: "",
        amount: 0,
        deposit: 0,
        withdrawal: 0,
        init: function (){
          this.cacheDom();
          this.bindEvents();
          this.render();
        },
        cacheDom: function (){
          this.$el = $(".container");
          this.$runningBalanceWell=this.$el.find("#runningBalanceWell");
          this.$firstDeposit = this.$el.find("a#firstDeposit");
          this.$register = this.$el.find("#register");
          this.$userNameHead = this.$el.find("#userNameHead");
          this.$openingForm = this.$el.find("#openingBalance");
          this.$openingBalanceButton = this.$el.find(".but");
          this.$depositButtons = this.$el.find(".but2");
          this.$withdrawalButton = this.$el.find("#withdrawal");
          this.$userDeposit = parseInt(this.$el.find("#userDeposit").val());
          this.$userWithdrawal = parseInt(this.$el.find("#userWithdrawal").val());
          this.$depositButton = this.$el.find("#deposit");
          this.$initialBalance = parseInt(this.$el.find("#userInitialBalance").val());
          this.$username = this.$el.find("#userName").val();
        },
        bindEvents: function (){
          this.$firstDeposit.on('click', this.handleFirstDeposit.bind(this));
          this.$depositButton.on('click', this.handleOtherDeposits.bind(this));
          this.$withdrawalButton.on('click', this.handleWithdrawals.bind(this));

        },
        render: function (){
          this.$runningBalanceWell.text(this.amount);
          this.$userNameHead.text(this.$username)


        },
        handleFirstDeposit: function (){
          this.cacheDom();
          if (!isNaN(this.$initialBalance) && this.$username !=""){
            this.hideFirstForm();
            this.showSecondForm();
            this.deposit(this.$initialBalance);
            this.render();
          }
        },
        handleOtherDeposits: function (){
          this.cacheDom();
          if (!isNaN(this.$userDeposit)){
            this.deposit(this.$userDeposit);
            this.render();
          }
        },
        handleWithdrawals: function (){
          this.cacheDom();
          if (!isNaN(this.$userWithdrawal)){
            this.withdrawal(this.$userWithdrawal);
            this.render();
          }
        },
        hideFirstForm: function (){
            this.$openingBalanceButton.hide();
            this.$openingForm.hide();
        },
        showSecondForm: function (){
            this.$register.fadeIn();
            this.$depositButtons.fadeIn();
        },
        deposit: function (amount){
          this.amount += amount;
        },
        withdrawal: function (amount){
          if((this.amount - amount) > 0){
            this.amount -= amount;
          }
        }
      }
      bankAccount.init();
  })();

});
