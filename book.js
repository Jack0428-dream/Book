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
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
}


addBookToLibrary("Harry Potter", "J.K. Rolling", "45", "read");
addBookToLibrary("The art of Love", "Erich From", "43", "read");

const container = document.querySelector(".container");

const card1 = document.createElement("div");
const card2 = document.createElement("div");
card1.classList.add("card1");
card2.classList.add("card2");

container.appendChild(card1);
// container.appendChild(card2);

// console.log(container);
// comes null because it looks for element before the html fully parsed

// card1.textContent = myLibrary[0].info();
// div2.textContent = myLibrary[1].info();

const title = document.createElement("p");
card1.appendChild(title);
const author = document.createElement("p");
card1.appendChild(author);
const pages = document.createElement("p");
card1.appendChild(pages);
const read = document.createElement("p");
card1.appendChild(read);

title.textContent = myLibrary[0].title;
author.textContent = "by "+ myLibrary[0].author;
pages.textContent = myLibrary[0].pages;
read.textContent = myLibrary[0].read;

// loop has to make div and tags where the contents can place. 
// then make a classlist with the 'i' so that I can get an access 
// to style them

function makeCard() {
    for(let i = 0; i < myLibrary.length; i++) {
        this["card"+i] = document.createElement("div");
        this["title"+i] = document.createElement("p");
        this["author"+i] = document.createElement("p");
        this["pages"+i] = document.createElement("p");
        this["read"+i] = document.createElement("p");

        container.appendChild(this["card"+i]);
        this["card"+i].appendChild(this["title"+i]);
        this["card"+i].appendChild(this["author"+i]);
        this["card"+i].appendChild(this["pages"+i]);
        this["card"+i].appendChild(this["read"+i]);

        this["title"+i].textContent = myLibrary[i].title;
        this["author"+i].textContent = myLibrary[i].author;
        this["pages"+i].textContent = myLibrary[i].pages;
        this["read"+i].textContent = myLibrary[i].read;
    }
};

makeCard();

