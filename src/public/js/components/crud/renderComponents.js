import { RequestCRUD } from "./RequestCRUD.js";
import { DomSelector } from "./DomSelector.js";
import { RenderCreateModify } from "./RenderCreateModify.js";

class RenderComponentsCrud {
  constructor(persistence) {
    this.request = new RequestCRUD(persistence);
    this.domSelector = new DomSelector();
    this.renderCreateModify = new RenderCreateModify();
  }

  async itemCard(data) {
    this.domSelector.mainView.textContent = "";
    data.forEach((item) => {
      const container = document.createElement("div");
      container.classList.add("itemCard");

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;

      const containerContent = document.createElement("div");

      const id = document.createElement("p");
      id.textContent = item._id;

      const title = document.createElement("p");
      title.textContent = item.title;

      const category = document.createElement("p");
      category.textContent = "Category: " + item.category;

      const description = document.createElement("p");
      description.textContent = item.description;

      const stock = document.createElement("p");
      stock.textContent = "Stock: " + item.stock;

      const price = document.createElement("p");
      price.textContent = "Price: $" + item.price;

      container.appendChild(img);
      container.appendChild(containerContent);
      containerContent.appendChild(id);
      containerContent.appendChild(title);
      containerContent.appendChild(description);
      containerContent.appendChild(category);
      containerContent.appendChild(stock);
      containerContent.appendChild(price);

      this.domSelector.mainView.appendChild(container);
    });
  }

  async getAll() {
    const response = await this.request.getAll();
    this.itemCard(response.payload);
  }

  btnCrud(context) {
    const btn = document.createElement("button");
    btn.textContent = context;
    btn.classList.add("btnCrud");
    btn.addEventListener("click", () => {
      this.handleBtnCrud(context);
    });
    this.domSelector.mainBtns.appendChild(btn);
  }

  async handleBtnCrud(context) {
    switch (context) {
      case "Search":
        this.domSelector.renderActionBtn.textContent = "";

        const inputIdFind = document.createElement("input");
        inputIdFind.placeholder = "ID";
        inputIdFind.classList.add("inputCrud");

        const btnSearch = document.createElement("button");
        btnSearch.classList.add("btnCrud");
        btnSearch.textContent = context;

        this.domSelector.renderActionBtn.appendChild(inputIdFind);
        this.domSelector.renderActionBtn.appendChild(btnSearch);

        btnSearch.addEventListener("click", async () => {
          const itemFind =
            inputIdFind.value.trim() === ""
              ? "invalid"
              : inputIdFind.value.trim();
          try {
            const response = await this.request.getOneById(itemFind);
            this.itemCard([response.payload]);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
              color: "#fff",
            });
          }
        });
        break;

      case "Create":
        this.renderCreateModify.renderForm(
          context,
          this.request,
          this.getAll.bind(this)
        );

        break;
      case "Modify":
        this.renderCreateModify.renderForm(context, this.request)
        break;

      case "Delete":
        this.domSelector.renderActionBtn.textContent = "";

        const inputIdDelete = document.createElement("input");
        inputIdDelete.placeholder = "ID";
        inputIdDelete.classList.add("inputCrud");

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btnCrud");
        btnDelete.textContent = context;

        btnDelete.addEventListener("click", async () => {
          const itemDelete =
            inputIdDelete.value.trim() === ""
              ? "invalid"
              : inputIdDelete.value.trim();
          try {
            const response = await this.request.delete(itemDelete);
            Swal.fire({
              title: response.title,
              text: response.message,
              icon: response.status,
              color: "#fff",
            });
            await this.getAll();
          } catch (error) {
            Swal.fire({
              title: error.title,
              text: error.message,
              icon: error.status,
              color: "#fff",
            });
          }
        });

        this.domSelector.renderActionBtn.appendChild(inputIdDelete);
        this.domSelector.renderActionBtn.appendChild(btnDelete);

        break;

      case "Reset":
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          color: "#fff",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, reset it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.request.restart();
            await this.getAll();
            Swal.fire({
              title: "Reseted!",
              text: "Your file has been reseted.",
              icon: "success",
              color: "#fff",
            });
          }
        });

        break;
    }
  }
}

export { RenderComponentsCrud };
