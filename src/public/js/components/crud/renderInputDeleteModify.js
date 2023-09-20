export const renderInputDeleteModify = (context, nodo) => {
  const form = document.createElement("form");
  form.setAttribute("id", "formCrud");

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

  const labelImg = document.createElement("label");
  labelImg.textContent = "UPLOAD IMAGE:";
  const loadImg = document.createElement("button");
  loadImg.textContent = "Upload Image   "
  loadImg.classList.add("bi", "bi-upload", "btnCrud");
  
  const btn = document.createElement("button");
  btn.classList.add("btnCrud");
  btn.type = "submit";
  btn.value = context;
  btn.textContent = context;

  if (context !== "Create") {
    form.appendChild(inputId);
  }
  form.appendChild(inputTitle);
  form.appendChild(inputDescription);
  form.appendChild(inputCategory);
  form.appendChild(inputStock);
  form.appendChild(inputPrice);
  // form.appendChild(labelImg);
  form.appendChild(loadImg);
  form.appendChild(btn);

  nodo.appendChild(form);
};
