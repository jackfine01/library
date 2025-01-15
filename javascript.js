const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    console.log(myLibrary);
};

function info(Book){
    return (Book.title + " by " + Book.author + ", " + Book.pages + " pages, " + Book.read)
};

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read.");
const Nicomachean = new Book("Nicomachean Ethics", "Aristotle", "688", "not read.");
const Republic = new Book("Politics", "Plato", "408", "not read.");

addBookToLibrary(Hobbit);
addBookToLibrary(Nicomachean);
addBookToLibrary(Republic);

// add display mechanics for html.

// add library loop function to add to existing display.

// add new book button and form in html.

// add remove book button.