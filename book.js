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
addBookToLibrary("What I talk about when I talk about running", "Harukami", "45", "read")

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

let first = true;
function makeCard() {
    if (first == true) {
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
            this["author"+i].textContent = "by "+ myLibrary[i].author;
            this["pages"+i].textContent = myLibrary[i].pages+"pages";
            this["read"+i].textContent = myLibrary[i].read;
            this["card"+i].setAttribute("style", "background-color: red; display: flex; flex-direction: column; align-items: center; border-radius: 15px; border: 2px solid black; box-sizing: border-box;")
        }
        first = false;
    } else if (first == false) {
        for(let i = myLibrary.length-1; i < myLibrary.length; i++) {
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
            this["author"+i].textContent = "by "+ myLibrary[i].author;
            this["pages"+i].textContent = myLibrary[i].pages+"pages";
            this["read"+i].textContent = myLibrary[i].read;
            this["card"+i].setAttribute("style", "background-color: red; display: flex; flex-direction: column; align-items: center; border-radius: 15px; border: 2px solid black; box-sizing: border-box;")
        }
    }

    
};

makeCard();

const titlein = document.querySelector("#title");
const authorin = document.querySelector("#author");
const pagesin = document.querySelector("#pages");
const readin = document.querySelector("#read");
const submit = document.querySelector("#submit")
submit.addEventListener("click", addCard);

function addCard(event) {
    let readval = "";
    if (readin.checked == true) {
        readval = "read"
    } else {
        readval = "not read yet"
    }
    let tvalue = titlein.value;
    let avalue = authorin.value;
    let pvalue = parseInt(pagesin.value);
    addBookToLibrary(tvalue, avalue, pvalue, readval);
    makeCard();
    titlein.value = "";
    authorin.value = "";
    pagesin.value = "";
    readin.checked = false;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})
