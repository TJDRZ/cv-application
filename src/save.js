function save() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => (button.style.display = "none"));
  window.print();
  buttons.forEach((button) => (button.style.display = "inline"));
}

export default save;
