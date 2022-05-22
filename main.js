'use strict';
const assert = require('assert');

class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance() {
        const reducer = (pastTransactions, currentTransaction) => pastTransactions.amount + currentTransaction.amount;
        const currentBalance = this.transactions.reduce(reducer);
        console.log(currentBalance);
        return currentBalance;
    }
    deposit(amt) {
        const newDeposit = new Transaction(amt, "Deposit")

        if (amt > 0) {
            this.transactions.push(newDeposit);
        } else {
            console.log("Invalid Deposit Amount");
        }
    }
    charge(amt, payee) {

        const newCharge = new Transaction(-amt, payee);

        if (amt > this.balance) {
            console.log("Insufficient Funds");
        } else {
            this.transactions.push(newCharge);
            console.log(this.transactions);
        }

    }
}

class Transaction {
    constructor(amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}


if (typeof describe === 'function') {
    describe('BankAccount', function () {
        it("should have an account number, owner's name, and a transaction list", function () {
            const myAccount = new BankAccount("1", "Nathan");
            assert.equal(myAccount.accountNumber, "1");
            assert.equal(myAccount.owner, "Nathan");
        });
        describe('Transactions', function () {
            it('should create transaction correctly for a deposit', function () {
                const Transaction1 = new Transaction(42, 'Deposit');
                assert.equal(Transaction1.amount, 42);
                assert.equal(Transaction1.payee, 'Deposit');
            });
            it('should create transaction correctly for a charge', function () {
                const Transaction2 = new Transaction(24, 'COA');
                assert.equal(Transaction2.amount, 24);
                assert.equal(Transaction2.payee, 'COA');
            });
        });
    });
}