// Простое модальное окно
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".overlay-block");
  const closeBtn = document.querySelector(".close-btn");
  const buyButton = document.querySelector(".single-game-btn");

  function openModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // Скрыть модальное окно
  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  // Открыть по клику на кнопку
  buyButton.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
  singleGameBtnTwo.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });

  // Закрыть по клику на крестик
  closeBtn.addEventListener("click", closeModal);

  // Закрыть по клику вне модального окна
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Закрыть по Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
