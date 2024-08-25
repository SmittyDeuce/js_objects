/*
Problem Statement: You are tasked with developing a JavaScript program
that simulates a simple banking application. The program should allow
users to create accounts, deposit funds, withdraw funds, and calculate
interest based on specified rates.
*/
// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function Accountobject(accountNumber, balance, owner){
    this.accountNumber = parseInt(accountNumber, 10);
    this.balance = parseFloat(balance, 10);
    this.owner = owner
}

let john_doe = new Accountobject(555555, 200.55, "John Doe")

// console.log(john_doe)


// Task 2: Implement methods within the Account object to deposit and withdraw funds.

function Accountobject(accountNumber, balance, owner) {
    this.accountNumber = parseInt(accountNumber, 10); // Ensure account number is an integer
    this.balance = parseFloat(balance); // Ensure balance is a float
    this.owner = owner; // Set the account owner

    // Method to add or withdraw funds from the account
    this.edit_balance = function() {
        while (true) {
            let add_or_withdraw = prompt("Enter 'add' or 'withdraw' to do that task. 'done' when finished\n");

            if (add_or_withdraw.toLowerCase() === 'done') {
                break;
            } else if (add_or_withdraw.toLowerCase() === 'add') {
                let add = parseFloat(prompt("How much to add: "), 10);
                this.balance += add;
                console.log(`New balance is ${this.balance}`);
            } else if (add_or_withdraw.toLowerCase() === 'withdraw') {
                let withdraw = parseFloat(prompt("How much to withdraw: "), 10);
                if (withdraw > this.balance) {
                    console.log("Insufficient funds for withdrawal.");
                } else {
                    this.balance -= withdraw;
                    console.log(`New balance is ${this.balance}`);
                }
            } else {
                console.log("Please enter a valid option.");
            }
        }
    };
}

// Example usage
// let john_doe = new Accountobject(555555, 200.55, "John Doe");
john_doe.edit_balance(); // Start interaction for adding or withdrawing funds


// console.log(john_doe)
// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.



function Accountobject(accountNumber, balance, owner) {
    this.accountNumber = parseInt(accountNumber, 10); // Ensure account number is an integer
    this.balance = parseFloat(balance); // Ensure balance is a float
    this.owner = owner; // Set the account owner

    // Method to add or withdraw funds from the account
    this.edit_balance = function() {
        while (true) {
            let add_or_withdraw = prompt("Enter 'add' or 'withdraw' to do that task. 'done' when finished\n");

            if (add_or_withdraw.toLowerCase() === 'done') {
                break;
            } else if (add_or_withdraw.toLowerCase() === 'add') {
                let add = parseFloat(prompt("How much to add: "), 10);
                this.balance += add;
                console.log(`New balance is ${this.balance}`);
            } else if (add_or_withdraw.toLowerCase() === 'withdraw') {
                let withdraw = parseFloat(prompt("How much to withdraw: "), 10);
                if (withdraw > this.balance) {
                    console.log("Insufficient funds for withdrawal.");
                } else {
                    this.balance -= withdraw;
                    console.log(`New balance is ${this.balance}`);
                }
            } else {
                console.log("Please enter a valid option.");
            }
        }
    };

    // Method to calculate compound interest
    this.calculateCompoundInterest = function(rate, time, timesCompoundedPerYear) {
        // Convert interest rate percentage to decimal
        let interestRateDecimal = rate / 100;

        // Formula for compound interest: A = P(1 + r/n)^(nt)
        let amount = this.balance * Math.pow((1 + interestRateDecimal / timesCompoundedPerYear), (timesCompoundedPerYear * time));

        // Calculate the interest earned
        let interest = amount - this.balance;

        // Add the interest to the balance
        this.balance += interest;

        console.log(`After ${time} years at an interest rate of ${rate}%, your balance will be ${this.balance.toFixed(2)}`);
    };
}

// Example usage
// let john_doe = new Accountobject(555555, 200.55, "John Doe");
john_doe.edit_balance(); // Start interaction for adding or withdrawing funds

// Calculate compound interest
john_doe.calculateCompoundInterest(5, 10, 12); // Example: 5% interest rate, 10 years, compounded monthly (12 times a year)











// Expected Outcomes:

// After completing this assignment, students should be able to create objects using constructor functions and manipulate their properties and methods in JavaScript.
// Students should understand how to perform basic mathematical operations and calculations using the Math class.
// Students should be able to apply object-oriented principles and mathematical concepts to solve real-world problems, such as financial calculations in a banking application.