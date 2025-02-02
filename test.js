var VendingMachine = function () {
    this.balance = 0;
    this.coinsInserted = {
      nickel: 0,
      dime: 0,
      quarter: 0,
      dollar: 0
    }
};


VendingMachine.prototype.getBalance = function () {
    return this.balance;
};
VendingMachine.prototype.addNickel = function () {
    this.coinsInserted.nickel = this.coinsInserted.nickel + 1
    return this.balance += 5;

};


let assert = require('assert');

describe('Vending Machine', function () {

    describe('Balance of money inserted', function () {
        it('Is zero when initially powered up', function () {
            machine = new VendingMachine();
            assert.strictEqual(0, machine.getBalance())
        });
    });
    describe('Balance of money inserted', function () {
        it('Is 5 when nickel is added', function () {
            machine = new VendingMachine();
            machine.addNickel();
            assert.strictEqual(5, machine.getBalance())
            console.log(machine.coinsInserted);
        });
    });
});
