// const buttons = document.querySelectorAll('.iconNavBarAside');

const btnFocus = (btn, active = "active") => {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      // Elimina la clase 'active' de todos los botones
      const allBtn = document.querySelectorAll(`.${active}`);
      allBtn.forEach((b) => b.classList.remove(active));
      // Agrega la clase 'active' al botón actual
      button.classList.add(active);
    });
  });
};

const btnFocusRemove = (btn) => {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      // Elimina la clase 'active' de todos los botones
      btn.forEach((b) => b.classList.remove("active"));
    });
  });
};

export { btnFocus, btnFocusRemove };
