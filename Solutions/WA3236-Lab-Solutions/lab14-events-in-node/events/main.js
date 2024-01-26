var bank_account = require('./bank_account.js');
var account = new bank_account.BankAccount();

account.on("low_balance", function(currentBalance, balanceWillBe) {
    console.log('MANAGER - Low balance!!!. Current balance is: ' + currentBalance + ", Balance will become: " + balanceWillBe);
   });
   
   account.on("low_balance", function(currentBalance, balanceWillBe) {
    console.log('CUSTOMER - Low balance!!!. Current balance is: ' + currentBalance + ", Balance will become: " + balanceWillBe);
   });

account.deposit(100);
account.withdraw(110);
