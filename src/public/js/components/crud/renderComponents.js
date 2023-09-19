import { RequestCRUD } from "./RequestCRUD.js";
import { DomSelector } from "./DomSelector.js";

class RenderComponentsCrud {
  constructor(persistence) {
    this.request = new RequestCRUD(persistence);
    this.domSelector = new DomSelector();
  }

  async itemCard(data) {
    this.domSelector.mainView.textContent = "";
    data.forEach((item) => {
      const container = document.createElement("div");

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;

      const containerContent = document.createElement("div");

      const id = document.createElement("p");
      id.textContent = item._id;

      const title = document.createElement("p");
      title.textContent = item.title;

      const category = document.createElement("p");
      category.textContent = item.category;

      const description = document.createElement("p");
      description.textContent = item.description;

      const stock = document.createElement("p");
      stock.textContent = item.stock;

      const price = document.createElement("p");
      price.textContent = item.price;

      container.appendChild(img);
      container.appendChild(containerContent);
      containerContent.appendChild(id);
      containerContent.appendChild(title);
      containerContent.appendChild(category);
      containerContent.appendChild(description);
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
      case "Find":
        this.domSelector.renderActionBtn.textContent = "";
        const inputId = document.createElement("input");
        inputId.classList.add("inputCrud");

        const btn = document.createElement("button");
        btn.classList.add("btnCrud");
        btn.textContent = context;

        btn.addEventListener("click", async () => {
          const itemId = inputId.value;
          const response = await this.request.getOneById(itemId);
          console.log(typeof response.payload);
          this.itemCard([response.payload]);
        });

        this.domSelector.renderActionBtn.appendChild(inputId);
        this.domSelector.renderActionBtn.appendChild(btn);

        break;
      case "Create":
        break;
      case "Modify":
        break;
      case "Delete":
        break;
      case "Reset":
        break;
    }
  }
}

export { RenderComponentsCrud };
