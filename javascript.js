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



// const Hobbit = new Book("Hobbit", "J.R.R. Tolkien", "295", "read.");
// const Ethics = new Book("Ethics", "Aristotle", "688", "not read.");
// const Republic = new Book("Politics", "Plato", "408", "not read.");

// addBookToLibrary(Hobbit);
// addBookToLibrary(Ethics);
// addBookToLibrary(Republic);

const container = document.getElementById("main");
const resetlib = function(){
    let cardDelete = document.querySelectorAll(".card")
    cardDelete.forEach(card=> {
        card.remove();
        }
    )
}
const displayLibrary = function(){
    resetlib();
    myLibrary.forEach(Book => {
        
        const card = document.createElement("div");
        card.className = "card";
        // Delete old cards.


        main.appendChild(card);

            const cardTitle = document.createElement("div");
            cardTitle.className = "cardTitle";
            card.appendChild(cardTitle);
            cardTitle.innerHTML = Book.title;

            const cardAuthor = document.createElement("div");
            cardAuthor.className = "cardAuthor";
            card.appendChild(cardAuthor);
            cardAuthor.innerHTML = Book.author;

            const cardPages = document.createElement("div");
            cardPages.className = "cardPages";
            card.appendChild(cardPages);
            cardPages.innerHTML = Book.pages + " Pages";

    },);
};
// add new book button and form in html.

const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();    

        const formTitle = form.elements['title'].value;
        const formAuth = form.elements['author'].value;
        const formPage = form.elements['pages'].value;

        const addedBook = new Book(formTitle, formAuth, formPage, "not read.")
        addBookToLibrary(addedBook);
        displayLibrary();
    }
);

// add read book button.

// add remove book button.

