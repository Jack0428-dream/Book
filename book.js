const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }; 
}

function addBookToLibrary(objTitle, objAuthor, objPages, objRead) {
    const newBook = new Book(objTitle, objAuthor, objPages, objRead);
    let uuid = newBook.crypto.randomUUID();
    myLibrary.push(newBook);
}