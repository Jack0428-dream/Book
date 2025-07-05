const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(objTitle, objAuthor, objPages, objRead) {
    const newBook = new Book(objTitle, objAuthor, objPages, objRead);
    myLibrary.push(newBook);
}


addBookToLibrary("Harry Potter", "J.K. Rolling", "45", "read");
addBookToLibrary("The art of Love", "Erich From", "43", "read");
addBookToLibrary("The Hobbit", "Harukami", "45", "read")

const container = document.querySelector(".container");

function makeCard() {
    container.innerHTML = "";

    myLibrary.forEach(function(book) {
        const card = document.createElement("div");
        card.classList.add("display");
        card.setAttribute("data-id", book.id);
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        read.classList.add("read")
        const button = document.createElement("button");
        button.addEventListener("click", () => {
            myLibrary.splice(myLibrary.findIndex(item => item.id === book.id), 1);
            makeCard();
        })
        const switchbox = document.createElement("p");
        const label = document.createElement("label");
        const swinput = document.createElement("input");
        swinput.addEventListener("change", () => {
            if (swinput.checked == true) {
                read.textContent = "Read";
            } else if (swinput.checked == false) {
                read.textContent = "Not yet";
            }
        })
        const swspan = document.createElement("span");


        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        switchbox.appendChild(button);
        switchbox.appendChild(label);

        switchbox.classList.add("switchbox");
        label.classList.add("switch")
        swinput.setAttribute("type", "checkbox");
        swinput.classList.add("swinput")
        swspan.classList.add("slider");
        label.textContent = "Read Switch"
        card.appendChild(switchbox);
        label.appendChild(swinput);
        label.appendChild(swspan);

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;
        button.textContent = "Remove";

    });
};

makeCard();

const titlein = document.querySelector("#title");
const authorin = document.querySelector("#author");
const pagesin = document.querySelector("#pages");
const readin = document.querySelector("#read");
const submit = document.querySelector("#submit")

function addCard() {
    let addread = "";
    if (readin.checked == true) {
        addread = "read" 
    } else {
        addread = "Not yet"
    }; 

    addBookToLibrary(titlein.value, authorin.value, parseInt(pagesin.value), addread);
}

submit.addEventListener("click", () => {
    addCard();
    makeCard();
});


submit.addEventListener("click", () =>{
    titlein.value = "";
    authorin.value = "";
    pagesin.value = "";
    readin.checked = false;
    dialog.close();
});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});
