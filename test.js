const { VendingMachine } = require('./vending.js');
var assert = require('assert');

describe('Vending Machine', function() {

    describe('Balance of money inserted', function() {
		it('Should be zero when the vending machine is initially powered up', function() {
			machine = new VendingMachine();
			assert.equal(0, machine.getBalance())
		});
	});
});
