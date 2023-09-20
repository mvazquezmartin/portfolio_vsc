export const renderInputCreateModify = (context, nodo, request) => {
  const formCrud = document.createElement("form");
  formCrud.setAttribute("id", "formCrud");

  const inputId = document.createElement("input");
  inputId.placeholder = "ID";
  inputId.id = "itemId";

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.name = "title";
  inputTitle.placeholder = "TITLE";

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.name = "description";
  inputDescription.placeholder = "DESCRIPTION";

  const inputCategory = document.createElement("input");
  inputCategory.type = "text";
  inputCategory.name = "category";
  inputCategory.placeholder = "CATEGORY";

  const inputStock = document.createElement("input");
  inputStock.type = "number";
  inputStock.name = "stock";
  inputStock.placeholder = "STOCK";

  const inputPrice = document.createElement("input");
  inputPrice.type = "number";
  inputPrice.name = "price";
  inputPrice.placeholder = "PRICE";

  const loadImg = document.createElement("button");
  loadImg.textContent = "Upload Image   ";
  loadImg.classList.add("bi", "bi-upload", "btnCrud");

  const btn = document.createElement("button");
  btn.classList.add("btnCrud");
  btn.type = "submit";
  btn.value = context;
  btn.textContent = context;

  if (context !== "Create") {
    formCrud.appendChild(inputId);
  }
  formCrud.appendChild(inputTitle);
  formCrud.appendChild(inputDescription);
  formCrud.appendChild(inputCategory);
  formCrud.appendChild(inputStock);
  formCrud.appendChild(inputPrice);
  formCrud.appendChild(loadImg);
  formCrud.appendChild(btn);

  nodo.appendChild(formCrud);

  formCrud.addEventListener("submit", async (e) => {
    e.preventDefault();

    const itemId = inputId.value;

    const data = new FormData(formCrud);
    const obj = {};

    data.forEach((value, key) => {
      if (key === "price" || key === "stock") {
        obj[key] = parseInt(value);
      }
      obj[key] = value;
    });

    switch (context) {
      case "Modify":
        try {
          const responseModify = await request.modify(itemId, obj);
          return responseModify;
        } catch (error) {
          console.log(error);
        }
        break;
      case "Create":
        try {
          const responseCreate = await request.create(obj);
          if (responseCreate.status === "success") return responseCreate;
        } catch (error) {
          console.log(error);
        }
        break;
    }
  });
};
