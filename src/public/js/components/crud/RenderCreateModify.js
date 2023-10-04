import { DomSelector } from "./DomSelector.js";

export class RenderCreateModify {
  constructor() {
    this.domSelector = new DomSelector();
  }
  renderForm(context, request, method) {
    this.domSelector.renderActionBtn.textContent = "";
    const formCrud = document.createElement("form");
    formCrud.id = "formCrud";
    formCrud.enctype = "multipart/form-data";

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

    const inputDivImg = document.createElement("div");
    inputDivImg.classList.add("inputDivImg");

    const inputImg = document.createElement("input");
    inputImg.type = "file";
    inputImg.name = "image";
    inputImg.id = "image";
    inputImg.classList.add("customFile");
    inputImg.style.display = "none";

    const labelImg = document.createElement("label");
    labelImg.setAttribute("for", "image");
    labelImg.classList.add("btnCrud");
    labelImg.textContent = "Upload Image";

    inputImg.addEventListener("change", () => {
      if (inputImg.files.length > 0)
        labelImg.textContent = inputImg.files[0].name;
    });

    const iconoBi = document.createElement("i");
    iconoBi.style.marginLeft = "5px";
    iconoBi.classList.add("bi", "bi-upload");

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
    formCrud.appendChild(inputDivImg);
    inputDivImg.appendChild(inputImg);
    inputDivImg.appendChild(labelImg);
    labelImg.appendChild(iconoBi);
    formCrud.appendChild(btn);

    this.domSelector.renderActionBtn.appendChild(formCrud);

    formCrud.addEventListener("submit", async (e) => {
      e.preventDefault();
      labelImg.textContent = "Upload Image";

      const itemId = inputId.value;

      const data = new FormData(formCrud);
      const obj = {};

      data.forEach((value, key) => {
        if (key === "price" || key === "stock") {
          obj[key] = Number(value);
        } else {
          obj[key] = value;
        }
      });

      console.log(data.get("image"))

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
            if (responseCreate.status === "success") {
              formCrud.reset();
              console.log(inputImg.files);
              Swal.fire({
                text: responseCreate.message,
                color: "#fff",
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: responseCreate.status,
              });
              await method();
            }
          } catch (error) {
            console.log(error);
          }
          break;
      }
    });
  }
}
