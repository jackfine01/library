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



const Hobbit = new Book("Hobbit", "J.R.R. Tolkien", "295", "read.");
const Ethics = new Book("Ethics", "Aristotle", "688", "not read.");
const Republic = new Book("Politics", "Plato", "408", "not read.");

addBookToLibrary(Hobbit);
addBookToLibrary(Ethics);
addBookToLibrary(Republic);

// add display mechanics for html.

const container = document.getElementById("main");
myLibrary.forEach(Book => {
    
    const card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

        const cardTitle = document.createElement("div");
        cardTitle.className = "cardTitle";
        card.appendChild(cardTitle);
        cardTitle.innerHTML = Book.title;

        const cardAuthor = document.createElement("div");
        cardAuthor.className = "cardTitle";
        card.appendChild(cardAuthor);
        cardAuthor.innerHTML = Book.author;

        const cardPages = document.createElement("div");
        cardPages.className = "cardTitle";
        card.appendChild(cardPages);
        cardPages.innerHTML = Book.pages + " Pages";


    
},);

// add library loop function to add to existing display.

// add new book button and form in html.

// add remove book button.