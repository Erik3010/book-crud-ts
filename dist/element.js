"use strict";
const $ = (selector) => {
    const el = document.querySelectorAll(selector);
    return el.length > 2 ? el : document.querySelector(selector);
};
const btnCreate = $("#btn-create");
const tableContainer = $("#book-table-container");
const formContainer = $("#book-form-container");
const bookForm = $("#form-create-book");
const bookTable = $("#book-table");
const createBookBtn = $("#create-book");
const alertEl = $("#alert");
