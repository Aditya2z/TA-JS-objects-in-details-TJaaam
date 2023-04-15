class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class Booklist {
    constructor(booklist = [], currentBookIndex = 0) {
        this.booklist = booklist;
        this.currentBookIndex = currentBookIndex;
    }
    add(bookArray) {
        bookArray.forEach(element => {
            this.booklist.push(element);
        });
    }
    getCurrentBook() {
        return this.booklist[this.currentBookIndex];
    }
    getNexttBook() {
        return this.booklist[this.currentBookIndex + 1];
    }
    getPreviousBook() {
        return this.booklist[this.currentBookIndex - 1];
    }
    changeCurrentBook(index) {
        this.currentBookIndex = index;
    }
}

let book1 = new Book("A", "thriller", "me", false, Date.now());
let book2 = new Book("Ab", "horror", "you", false, Date.now());
let book3 = new Book("Abc", "thriller", "everyone", false, Date.now());
let book4 = new Book("Abcd", "romance", "noone", false, Date.now());
let book5 = new Book("Abcde", "sci-fi", "someone", false, Date.now());

let booklist1 = new Booklist();

booklist1.add([book1, book2, book3, book4, book5]);

book2.markBookAsRead();
book4.markBookAsRead();

booklist1.getCurrentBook();
booklist1.getNexttBook();
booklist1.changeCurrentBook(3);
booklist1.getPreviousBook();
