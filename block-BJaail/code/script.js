let form = document.querySelector("form");
let addBtn = document.querySelector(".btn");
let inputs = document.querySelectorAll("input[type =text]");

class Booklist {
    constructor(root, list = []) {
        this.root = root;
        this.list = list;
    }
    addBook(tittle, author, ISBN) {
        let book = new Book(tittle, author, ISBN);
        this.list.push(book);
        this.createUI();
        return this.list.length;
    }
    deleteBook(id) {
        console.log(id, "check");
        let index = this.list.findIndex(book => book.id === id);
        this.list.splice(index,1);
        this.createUI();
        return this.todo.length;
    }
    createUI() {
        this.root.innerHTML = `
                                <tr>
                                    <th class="title">Title</th>
                                    <th>Author</th>
                                    <th>ISBN#</th>
                                    <th></th>
                                </tr>   
                            `;
        this.list.forEach(book => {
            let row = book.createUI();
            let closeBtn = row.querySelector(".closeBtn");
            closeBtn.addEventListener("click", () => {
                this.deleteBook(book.id);
            });
            this.root.append(row);
        })
    }
}

class Book {
    constructor(tittle, author, ISBN) {
        this.tittle = tittle;
        this.author = author;
        this.ISBN = ISBN;
        this.id = Date.now();
    }
    createUI() {
        let row = document.createElement("tr");
        row.innerHTML = `
                        <td class ="title">${this.tittle}</td>
                        <td>${this.author}</td>
                        <td>${this.ISBN}</td>
                        <td>
                            <div class="closeBtn">X</div>
                        </td>
                        `;
        return row;
    }
}

let booklist1 = new Booklist(document.querySelector(".root"));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(inputs[0].value !== "" &&
    inputs[1].value !== ""&&
    inputs[2].value !== "") {
        booklist1.addBook(inputs[0].value, inputs[1].value, inputs[2].value);
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
    }
})
