var events = require('events');
var util = require('util');
var BankAccount = function BankAccount() {
    var balance = 0;
    
    this.setMaxListeners(1);
    this.deposit = function(amount) {
        balance += amount;
    }
    this.withdraw = function(amount) {
        var newBalance = balance - amount;
        if(newBalance < 0) {
            this.emit("low_balance", balance, newBalance);
        } else {
            balance -= amount;
        }
    }
}

util.inherits(BankAccount, events.EventEmitter);

module.exports.BankAccount = BankAccount;