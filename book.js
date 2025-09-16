const myLibrary = [];

class Library {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    addBToL(bInfo) {
        myLibrary.push(bInfo);
    }
    // when obj.addBToL(); 
    // I want the information of object to store in myLibrary array
}

let harry = new Library("Harry Potter", "J.K. Rolling", "45", "read");
let art = new Library("The art of Love", "Erich Fromm", "284", "read" );
let hobbit = new Library("The Hobbit", "Harukami", "732", "read");

harry.addBToL(harry);
art.addBToL(art);
hobbit.addBToL(hobbit);

const container = document.querySelector(".container");

function makeCard() {
    container.innerHTML = "";

    myLibrary.forEach(function(book) {
        const card = document.createElement("div");

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        const button = document.createElement("button");
        const switchbox = document.createElement("p");
        const label = document.createElement("label");
        const swinput = document.createElement("input");
        const swspan = document.createElement("span");

        card.classList.add("display");
        read.classList.add("read");
        button.classList.add("remove");
        switchbox.classList.add("switchbox");
        label.classList.add("switch");
        swinput.classList.add("swinput");
        swspan.classList.add("slider");
        
        card.setAttribute("data-id", book.id);
        swinput.setAttribute("type", "checkbox");
        label.textContent = "Read Switch"

        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(switchbox);

        switchbox.appendChild(button);
        switchbox.appendChild(label);

        label.appendChild(swinput);
        label.appendChild(swspan);

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;
        button.textContent = "Remove";

        button.addEventListener("click", () => {
            myLibrary.splice(myLibrary.findIndex(item => item.id === book.id), 1);
            makeCard();
        })

        swinput.addEventListener("change", () => {
            if (swinput.checked == true) {
                read.textContent = "Read";
            } else if (swinput.checked == false) {
                read.textContent = "Not yet";
            }
        });
    });
};

makeCard();

const titlein = document.querySelector("#title");
const authorin = document.querySelector("#author");
const pagesin = document.querySelector("#pages");
const readin = document.querySelector("#read");
const submit = document.querySelector("#submit");
const form = document.querySelector('#form');

function addCard() {
    let addread = "";
    if (readin.checked == true) {
        addread = "read" 
    } else {
        addread = "Not yet"
    }; 

    // addBookToLibrary(titlein.value, authorin.value, parseInt(pagesin.value), addread);
    const nBook = new Library(titlein.value, authorin.value, parseInt(pagesin.value), addread);
    nBook.addBToL(nBook);
}

form.addEventListener("submit", () => {
    addCard();
    makeCard();
});

form.addEventListener("submit", () =>{
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

// Validation 
const title = document.getElementById('title');

title.addEventListener('input', () => {
    if (title.validity.tooShort) {
        title.setCustomValidity('We are expecting more characters darling.')
    } else {
        title.setCustomValidity('');
    }
})

const author = document.getElementById('author');

author.addEventListener('input', () => {
    if (author.validity.patternMismatch) {
        author.setCustomValidity("It can't start with number or symbol.")
    } else {
        author.setCustomValidity('');
    }    
})