$(document).ready(function (){
  (function (){
      var  bankAccount = {
        name: "",
        amount: 0,
        init: function (){
          this.cacheDom();
          this.bindEvents();
          this.render();
        },
        cacheDom: function (){
          this.$el = $(".container");
          this.$runningBalanceWell=this.$el.find("#runningBalanceWell");
          this.$deposit = this.$el.find("a#firstDeposit");
          this.$register = this.$el.find("#register");
          this.$openingBalance = this.$el.find("#openingBalance");
          this.$initialBalance = parseInt(this.$el.find("#userInitialBalance").val());
        },
        bindEvents: function (){
          this.$deposit.on('click', this.deposit.bind(this)).on('click', this.hideFirstForm.bind(this)).on('click', this.showSecondForm.bind(this));
          // this.$initialDeposit.on('click', this.deposit.bind(this));
          // this.$withdrawal.on('click', this.withdrawal.bind(this));
        },
        render: function (){
          this.$runningBalanceWell.text(this.amount);
        },
        hideFirstForm: function (){
          this.$openingBalance.hide();
        },
        showSecondForm: function (){
          this.$register.fadeIn();
        },
        deposit: function (){
          this.cacheDom();
            if (!isNaN(this.$initialBalance)){
              this.amount += this.$initialBalance;
            }
          this.render();
        },
        withdrawal: function (){
            this.amount =  this.amount - this.$userDeposit;
        }
      }
      bankAccount.init();
  })();

});
