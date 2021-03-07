class App {
  books: BookInterface[];

  constructor() {
    this.books = JSON.parse(localStorage.getItem("book_data")!) || [];
  }

  generateHTML() {
    let html = "";

    this.books.forEach((book, index) => {
      html += `<tr>`;
      html += `<td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>`;
      html += `<td class="px-6 py-4 whitespace-nowrap">${book.title}</td>`;
      html += `<td class="px-6 py-4 whitespace-nowrap">${book.description}</td>`;
      html += `<td class="px-6 py-4 whitespace-nowrap">
                <a href="#"
                    class="inline-block mr-5 font-medium text-yellow-500 hover:text-yellow-600" onclick="app.editBook(${index})">Edit</a>
                <a href="#"
                    class="inline-block font-medium text-red-500 hover:text-red-600" onclick="app.deleteBook(${index})">Delete</a>
              </td>`;
      html += `</tr>`;
    });

    return html;
  }

  showBook() {
    const html = this.generateHTML();

    bookTable.innerHTML = html;
  }

  createBook(book: BookInterface) {
    if (pageState.bookId != null) {
      this.updateBook();
      return;
    }

    pageState.state = ButtonState.view;
    if (book.title == "" || book.description == "") {
      pageState.hasError = true;
      return;
    }

    this.books.push(book);
    this.save();
    this.clear();
  }

  editBook(id: number) {
    pageState.state = ButtonState.create;
    pageState.bookId = id;

    const book = this.books[id];

    (<HTMLInputElement>$("#title")).value = book.title;
    (<HTMLInputElement>$("#description")).value = book.description;
  }

  updateBook() {
    const title = (<HTMLInputElement>$("#title")).value;
    const description = (<HTMLInputElement>$("#description")).value;

    const book: BookInterface = { title, description };

    this.books[pageState.bookId!] = book;
    this.save();

    this.clear();
    pageState.state = ButtonState.view;

    pageState.bookId = null;
  }

  deleteBook(id: number) {
    this.books.splice(id, 1);
    this.save();
  }

  save() {
    localStorage.setItem("book_data", JSON.stringify(this.books));
    this.showBook();
  }

  clear() {
    (<HTMLInputElement>$("#title")).value = "";
    (<HTMLInputElement>$("#description")).value = "";
  }
}
