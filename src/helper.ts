const clearAnimation = (el: HTMLInputElement, className: string) =>
  el.addEventListener("animationend", () => el.classList.remove(className));

const pageState = new Proxy<{
  state: number;
  bookId: null | number;
  hasError: boolean;
}>(
  { state: 1, bookId: null, hasError: false },
  {
    get: <T extends object, K extends keyof T>(obj: T, val: K) => obj[val],
    set: <T extends object, K extends keyof T>(obj: T, prop: K, val: any) => {
      obj[prop] = val;

      if (prop == "bookId") {
        let btnText = val != null ? "Update Book" : "Create Book";
        createBookBtn.innerHTML = btnText;
      } else if (prop == "state") {
        let text = val ? "Show books" : "Add new Book";
        let state = val ? "view" : "create";

        btnCreate.dataset.view = state;
        btnCreate.innerHTML = text;

        tableContainer.classList.add("fade");
        tableContainer.classList.toggle("hidden");

        formContainer.classList.add("fade");
        formContainer.classList.toggle("hidden");
      } else if (prop == "hasError") {
        if (!val) return true;
        alertEl.classList.remove("hidden");
        alertEl.classList.add("fade");

        setTimeout(() => {
          alertEl.classList.add("hidden");
          pageState.hasError = false;
        }, 3000);
      }

      return true;
    },
  }
);
