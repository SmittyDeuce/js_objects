# Digital Library System

## Problem Statement

You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.

## Features

1. **Add New Books**: Users can add new books to the library.
2. **Search for Books**: Users can search for books by title or author.
3. **Display Book Information**: Users can view information about books, such as title, author, and number of pages.
4. **Filter Books**: Users can filter books based on the number of pages.
5. **Map Book Information**: Users can map book information to include prefixes for titles and authors.

## Functionality

### Task 1: Create a Constructor Function

- **Purpose**: Define a constructor function for creating book objects with properties for title, author, and pages.

### Task 2: Implement a Method to Display Book Information

- **Purpose**: Implement a method within the book object to prompt the user to select which book information they want to view and display that information.

### Task 3: Manage a Collection of Books

- **Purpose**: 
  - Create an array to store book objects.
  - Implement functions to add new books to the array.
  - Implement a search function to find books by title or author.

### Task 4: Advanced Book Filtering and Mapping

- **Purpose**:
  - **Filter**: Use the `filter` method to retrieve books that contain 100 or fewer pages.
  - **Map**: Use the `map` method to modify book properties by adding prefixes to titles and authors.

## Usage

1. **Adding Books**:
   - Run the `bookStore()` function to start adding books.
   - Enter book details when prompted (title, author, number of pages).
   - Type 'done' to finish adding books.

2. **Searching for Books**:
   - Run the `searchBook()` function.
   - Choose to search by either 'title' or 'author'.
   - Enter the search term to find matching books.

3. **Filtering and Mapping Books**:
   - Run the `filterBook()` function to get a list of books with 100 or fewer pages.
   - Run the `mapBook()` function to get a list of books with prefixes added to the titles and authors.

## Example Usage

```js
bookStore(); // Start adding books

searchBook(); // Search for books by title or author

let filteredBooks = filterBook(); // Get books with 100 or fewer pages
console.log(filteredBooks);

let mappedBooks = mapBook(); // Add prefixes to book titles and authors
console.log(mappedBooks);



# Banking Application - JavaScript Program

## Problem Statement

You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

## Features

1. **Create Accounts**: Users can create new bank accounts with an account number, balance, and owner.
2. **Deposit Funds**: Users can deposit money into their accounts.
3. **Withdraw Funds**: Users can withdraw money from their accounts.
4. **Calculate Compound Interest**: Users can calculate compound interest based on the balance and a specified interest rate.

## Tasks and Functionality

### Task 1: Create a Constructor Function for the Account Object

**Objective**: Define a constructor function for creating account objects with properties for `accountNumber`, `balance`, and `owner`.

### Task 2: Implement Methods to Deposit and Withdraw Funds

**Objective**: Implement methods within the Account object to allow users to deposit and withdraw funds.

### Task 3: Create a Method to Calculate Compound Interest

**Objective**: Implement a method within the Account object to calculate compound interest based on the current balance and a specified interest rate.

### Expected Outcomes

- **Object Creation**: Students should be able to create objects using constructor functions and manipulate their properties and methods in JavaScript.
- **Mathematical Operations**: Students should understand how to perform basic mathematical operations and calculations using JavaScript.
- **Problem Solving**: Students should be able to apply object-oriented principles and mathematical concepts to solve real-world problems, such as financial calculations in a banking application.

## Example Usage

This README covers the entire process, from setting up the account object to implementing methods for managing funds and calculating interest. The banking application simulation should give students a strong foundation in object-oriented programming, mathematical calculations, and real-world problem-solving using JavaScript.
