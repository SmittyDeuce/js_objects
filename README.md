# js_objects
you will have to comment out each instance of the kybalion when testing a task

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

## Code Structure

- **`Book` Constructor**: Creates instances of books with properties for title, author, and pages.
- **`AddBook` Function**: Adds new book instances to the `library` array.
- **`bookStore` Function**: Allows users to input book details and stores them in the `library` array.
- **`searchBook` Function**: Searches the `library` for books by title or author and displays the results.
- **`filterBook` Function**: Filters books with 100 or fewer pages and returns the filtered list.
- **`mapBook` Function**: Maps over books to add prefixes to the title and author properties.

## Example Usage

```js
bookStore(); // Start adding books

searchBook(); // Search for books by title or author

let filteredBooks = filterBook(); // Get books with 100 or fewer pages
console.log(filteredBooks);

let mappedBooks = mapBook(); // Add prefixes to book titles and authors
console.log(mappedBooks);
