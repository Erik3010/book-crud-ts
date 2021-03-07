const $ = (selector: string) => {
  const el = document.querySelectorAll(selector);
  return el.length > 2 ? el : document.querySelector(selector);
};

const btnCreate = <HTMLInputElement>$("#btn-create");
const tableContainer = <HTMLInputElement>$("#book-table-container");
const formContainer = <HTMLInputElement>$("#book-form-container");
const bookForm = <HTMLInputElement>$("#form-create-book");
const bookTable = <HTMLInputElement>$("#book-table");
const createBookBtn = <HTMLInputElement>$("#create-book");
const alertEl = <HTMLInputElement>$("#alert");
