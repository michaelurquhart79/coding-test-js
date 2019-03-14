var VendingMachine = function() {
	this.balance = 0;
}

VendingMachine.prototype.getBalance = function() {
	return this.balance;
}

var assert = require('assert');

describe('Vending Machine', function() {

    describe('Balance of money inserted', function() {
		it('Is zero when initially powered up', function() {
			machine = new VendingMachine();
			assert.equal(0, machine.getBalance())
		});
	});
});
