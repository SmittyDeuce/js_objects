// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

// Creating an instance of Book
let kybalion = new Book(" The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece",
    "William Walker Atkinson", 176)

// Logging the title of the 'kybalion' book
console.log(monkey_paw.title) // Note: 'monkey_paw' should be replaced with 'kybalion'

// Task 2: Implement a method within the Book object to display book information.

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  // Prompt the user for information about the book
  let book_information = parseInt(
    prompt("Enter '1' for title, '2' for author, and '3' for only pages"),
    10
  );

  // Display information based on user input
  if (book_information === 1) {
    console.log(`The title is\n${this.title}`);
  } else if (book_information === 2) {
    console.log(`The Author is ${this.author}`);
  } else if (book_information === 3) {
    console.log(`There are ${this.pages}`);
  } else {
    console.log("please enter a valid response");
  }
}

// Creating an instance of Book uncomment this and comment out previous
// let kybalion = new Book(
//   " The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece",
//   "William Walker Atkinson",
//   176
// );

// Logging the 'kybalion' object
console.log(kybalion)

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = []; // Array to store book objects

function AddBook(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Function to add books to the library
function bookStore() {
    while (true) {
        let book_title = prompt("Enter Title: enter 'done' when finished\n");

        if (book_title.toLowerCase() === 'done') {
            break;
        } else {
            let book_author = prompt("Enter Author:\n");
            let book_pages = parseInt(prompt("Enter page amount:\n"), 10);
            let newBook = new AddBook(book_title, book_author, book_pages);
            library.push(newBook); // Add new book to library
        }
    }
}

// Function to search books by title or author
function searchBook() {
    let searchType = prompt("Search by 'title' or 'author'?\n").toLowerCase();
    let searchValue = prompt(`Enter the ${searchType} to search for:\n`).toLowerCase();
    
    // Filter books based on search criteria
    let results = library.filter(book => book[searchType].toLowerCase() === searchValue);
    
    if (results.length > 0) {
        console.log(`Found ${results.length} book(s):`);
        // Log the details of each book found
        results.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`));
    } else {
        console.log(`No books found with that ${searchType}.`);
    }
}

// Example usage
bookStore();  // Call this function to start adding books

// After adding books, you can search for them
searchBook();  // This will prompt the user for search criteria and value


// Task 4: Create functions that utilize the filter method to filter out books that 
// contain more than 100 pages and the map method to add "Title: " and "Author: "
// to the book's title and author properties respectively.

function AddBook(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function bookStore() {
    while (true) {
        let book_title = prompt("Enter Title: enter 'done' when finished\n");

        if (book_title.toLowerCase() === 'done') {
            break;
        } else {
            let book_author = prompt("Enter Author:\n");
            let book_pages = parseInt(prompt("Enter page amount:\n"), 10);
            let newBook = new AddBook(book_title, book_author, book_pages);
            library.push(newBook); // Add new book to library
        }
    }
}
    
bookStore(); // Add books to the library

let less_than_100 = [];

// Function to filter books with 100 or fewer pages
function filterBook() {
    library.forEach(book => {
        // Check if the book has 100 or fewer pages
        if (book.pages <= 100) {
            less_than_100.push(book.title); // Add title to less_than_100 array
        }
    })
    return less_than_100; // Return the array of book titles with 99 or fewer pages
}

let filter_books = filterBook(); // Get filtered book titles

console.log(filter_books); // Log the filtered book titles

// Function to map over books and add "Title: " and "Author: " prefixes
function mapBook() {
    return library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}

// Note: 'books' should be replaced with a valid array of book objects
let mappedBooks = mapBook(filter_books); // Map filtered books (incorrect usage)

// Log mapped book details
console.log(mappedBooks);
