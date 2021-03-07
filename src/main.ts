enum ButtonState {
  create = 1,
  view = 0,
}

interface BookInterface {
  title: string;
  description: string;
}

const app = new App();

btnCreate.addEventListener("click", () => {
  const state: ButtonState = (<any>ButtonState)[btnCreate.dataset.view!];

  pageState.bookId = null;
  pageState.state = state;
  app.clear();
});

clearAnimation(tableContainer, "fade");
clearAnimation(formContainer, "fade");
clearAnimation(alertEl, "fade");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = (<HTMLInputElement>$("#title")).value;
  const description = (<HTMLInputElement>$("#description")).value;

  const bookData: BookInterface = { title, description };

  app.createBook(bookData);
});

window.onload = () => {
  app.showBook();
};
