class Account {
    number;
    balance;

    constructor(number, balance) {
        this.number = number;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance ) {
            return "Insufficient funds";
        }
        this.balance -= amount;
    }

    checkBalance() {
        return this.balance;
    }
}


const abcAccount = new Account(12456, 1000);
console.log("Initial balance ", abcAccount.checkBalance());
abcAccount.deposit(100);
console.log("after deposit of 100 rs ", abcAccount.checkBalance());
abcAccount.withdraw(200);
console.log("after withdraw of 200 rs ", abcAccount.checkBalance());



class SavingAccount extends Account {


    interestRate;

    constructor(number, balance, interestRate) {
        super(number, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance = this.balance + (this.balance * this.interestRate);
    }
}


// const abcSavingAccount = new SavingAccount(12456, 1000, 5);
// console.log("Initial balance ", abcSavingAccount.checkBalance());
// abcSavingAccount.deposit(100);
// console.log("after deposit of 100 rs ", abcSavingAccount.checkBalance());
// abcSavingAccount.withdraw(200);
// console.log("after withdraw of 200 rs ", abcSavingAccount.checkBalance());
// abcSavingAccount.addInterest();
// console.log("after adding interest of 5% ", abcSavingAccount.checkBalance());


class CurrentAccount extends Account {
    minBalance;
    constructor(number, balance, minBalance) {
        super(number, balance);
        this.minBalance = minBalance;
    }

    withdraw(amount) {
        if (this.balance - amount < this.minBalance ) {
            console.log("Insufficient funds");
            return "Insufficient funds";
        }
        this.balance -= amount;
    }
}


const abcCurrentAccount = new CurrentAccount(12456, 1000, 1000);
console.log("Initial balance ", abcCurrentAccount.checkBalance());
abcCurrentAccount.deposit(100);
console.log("after deposit of 100 rs ", abcCurrentAccount.checkBalance());
abcCurrentAccount.withdraw(200);
console.log("after withdraw of 200 rs ", abcCurrentAccount.checkBalance());

