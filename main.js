const image = document.querySelectorAll(".gallery .image");
let currentIndex = 0;

function updateGallery() {
  image.forEach((image, index) => {
    image.style.border = index === currentIndex ? "5px solid #ff6600" : "none";
  });
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    currentIndex = (currentIndex + 1) % image.length;
  } else if (event.code === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + image.length) % image.length;
  }
  updateGallery();
});

updateGallery();
const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const renderBtn = controls.querySelector("[data-action='render']");
const destroyBtn = controls.querySelector("[data-action='destroy']");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    size += 10;
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10) || 0;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
