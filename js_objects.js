/*
Problem Statement: You are tasked with creating a JavaScript program that simulates
a digital library system. The program should allow users to add new books, search
for books by title or author, and display information about the library's collection.
*/

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
  this.title = title; // Book's title
  this.author = author; // Book's author
  this.pages = pages; // Number of pages in the book
}

// Create an instance of the Book object
let kybalion = new Book(
  "The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece",
  "William Walker Atkinson",
  176
);

console.log(kybalion.title); // Output the title of the book

// Task 2: Implement a method within the Book object to display book information.

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  // Prompt the user to select which information they want to view
  let book_information = parseInt(
    prompt("Enter '1' for title, '2' for author, and '3' for only pages"),
    10
  );

  // Display the selected information
  if (book_information === 1) {
    console.log(`The title is\n${this.title}`);
  } else if (book_information === 2) {
    console.log(`The Author is ${this.author}`);
  } else if (book_information === 3) {
    console.log(`There are ${this.pages}`);
  } else {
    console.log("Please enter a valid response");
  }
}

// Create an instance of the Book object
let kybalion = new Book(
  "The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece",
  "William Walker Atkinson",
  176
);

console.log(kybalion); // Display the Book object

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = []; // Array to store all books

function AddBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Function to add books to the library
function bookStore() {
  while (true) {
    // Prompt user to enter a book title or 'done' to finish
    let book_title = prompt("Enter Title: enter 'done' when finished\n");

    if (book_title.toLowerCase() === "done") {
      break; // Exit the loop if user types 'done'
    } else {
      // Prompt user for additional book details
      let book_author = prompt("Enter Author:\n");
      let book_pages = parseInt(prompt("Enter page amount:\n"), 10);
      // Create a new book object and add it to the library
      let newBook = new AddBook(book_title, book_author, book_pages);
      library.push(newBook);
    }
  }
}

// Function to search for books by title or author
function searchBook() {
  // Prompt user for search criteria
  let searchType = prompt("Search by 'title' or 'author'?\n").toLowerCase();
  let searchValue = prompt(
    `Enter the ${searchType} to search for:\n`
  ).toLowerCase();

  // Filter books based on the search criteria
  let results = library.filter(
    (book) => book[searchType].toLowerCase() === searchValue
  );

  // Display search results
  if (results.length > 0) {
    console.log(`Found ${results.length} book(s):`);
    results.forEach((book) =>
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`
      )
    );
  } else {
    console.log(`No books found with that ${searchType}.`);
  }
}

// Example usage
bookStore(); // Call this function to start adding books

// After adding books, you can search for them
searchBook(); // This will prompt the user for search criteria and value

// Task 4: Create functions that utilize the filter method to filter out books that
// contain more than 100 pages and the map method to add "Title: " and "Author: "
// to the book's title and author properties respectively.

function AddBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Filter out books with 100 or fewer pages
function filterBook() {
    library.forEach(book => {
        if (book.pages <= 100) {
            less_than_100.push(book.title);
        }
    });
    return less_than_100;
}

// Map over filtered books to add prefixes to title and author
function mapBook() {
  return library.map((book) => {
    return {
      title: `Title: ${book.title}`, // Add prefix to title
      author: `Author: ${book.author}`, // Add prefix to author
      pages: book.pages,
    };
  });
}

// Call filterBook to get books with 100 or fewer pages
let filteredBooks = filterBook();
console.log(filteredBooks);

// Call mapBook to add prefixes to the titles and authors of the books
let mappedBooks = mapBook();
console.log(mappedBooks);
