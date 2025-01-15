const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        console.log( this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
};

function addBookToLibrary(Book) {
    myLibrary.push(Book);
};

function info(Book){
    return (Book.title + " by " + Book.author + ", " + Book.pages + " pages, " + Book.read)
};

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read.");
const Nicomachean = new Book("Nicomachean Ethics", "Aristotle", "688", "not read.");
const Republic = new Book("Politics", "Plato", "408", "not read.");

