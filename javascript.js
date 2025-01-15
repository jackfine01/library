const myLibrary = [];

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(Book) {
    myLibrary.push(Book);
};

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read.");
const Nicomachean = new Book("Nicomachean Ethics", "Aristotle", "688", "not read.");
const Republic = new Book("Politics", "Plato", "408", "not read.");