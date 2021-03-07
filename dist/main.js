"use strict";
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["create"] = 1] = "create";
    ButtonState[ButtonState["view"] = 0] = "view";
})(ButtonState || (ButtonState = {}));
const app = new App();
btnCreate.addEventListener("click", () => {
    const state = ButtonState[btnCreate.dataset.view];
    pageState.bookId = null;
    pageState.state = state;
    app.clear();
});
clearAnimation(tableContainer, "fade");
clearAnimation(formContainer, "fade");
clearAnimation(alertEl, "fade");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = $("#title").value;
    const description = $("#description").value;
    const bookData = { title, description };
    app.createBook(bookData);
});
window.onload = () => {
    app.showBook();
};
