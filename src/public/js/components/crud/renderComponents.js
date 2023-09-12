class RenderComponentsCrud {
  containerItem(item, nodo) {
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

    nodo.appendChild(container);
  }
}

export { RenderComponentsCrud };
