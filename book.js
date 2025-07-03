const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(objTitle, objAuthor, objPages, objRead) {
    const newBook = new Book(objTitle, objAuthor, objPages, objRead);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
}


addBookToLibrary("Harry Potter", "J.K. Rolling", "45", "read");
addBookToLibrary("The art of Love", "Erich From", "43", "read");
addBookToLibrary("The Hobbit", "Harukami", "45", "read")

const container = document.querySelector(".container");

let first = true;
function makeCard() {
    if ( first == true) {
        myLibrary.forEach(function (book) {
            const card = document.createElement("div");
            container.appendChild(card);
            const title = document.createElement("p");
            const author = document.createElement("p");
            const pages = document.createElement("p");
            const read = document.createElement("p");
            const rmbutton = document.createElement("button");

            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(rmbutton);

            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            read.textContent = book.read;
            rmbutton.textContent = "Remove"
            card.setAttribute("data-id",book.id);

            rmbutton.addEventListener("click", () => {
                if(book.id == card.dataset.id) {
                    container.removeChild(card);
                }
            })
        });
        first = false;
    } else if (first == false) {
        for (let i = myLibrary.length-1; i < myLibrary.length; i++) {
            const card = document.createElement("div");
            container.appendChild(card);
            const title = document.createElement("p");
            const author = document.createElement("p");
            const pages = document.createElement("p");
            const read = document.createElement("p");
            const rmbutton = document.createElement("button");

            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(rmbutton);

            title.textContent = myLibrary[i].title;
            author.textContent = myLibrary[i].author;
            pages.textContent = myLibrary[i].pages;
            read.textContent = myLibrary[i].read;
            rmbutton.textContent = "Remove";
            card.setAttribute("data-id",myLibrary[i].id);

            rmbutton.addEventListener("click", () => {
                if(myLibrary[i].id == card.dataset.id) {
                    container.removeChild(card);
                }                
            })
        } 
    }
};

makeCard();

const titlein = document.querySelector("#title");
const authorin = document.querySelector("#author");
const pagesin = document.querySelector("#pages");
const readin = document.querySelector("#read");
const submit = document.querySelector("#submit")

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
submit.addEventListener("click", () => {
    addCard();
});


submit.addEventListener("click", () =>{
    dialog.close();
})

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});
