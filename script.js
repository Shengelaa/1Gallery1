const mainDiv = document.querySelector(".mainDiv");
let allData = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    displayCards(allData);
  });

function displayCards(data) {
  mainDiv.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("card");
    const img = document.createElement("img");
    img.src = item.image_url;
    img.alt = item.category;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const category = document.createElement("p");
    category.textContent = item.category;

    const desc = document.createElement("a");
    desc.href = item.desc;
    desc.target = "blank";
    desc.textContent = "More Info";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(desc);

    mainDiv.appendChild(card);

    img.addEventListener("click", () => openImageModal(item.image_url));
  });
}

function openImageModal(imageUrl) {
  const existingOverlay = document.querySelector(".overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const fullImage = document.createElement("img");
  fullImage.src = imageUrl;
  fullImage.classList.add("full-image");

  overlay.addEventListener("click", () => {
    overlay.remove();
  });

  overlay.appendChild(fullImage);
  document.body.appendChild(overlay);
}

function filterCategory(category) {
  let filteredData = allData;

  if (category.toLowerCase() !== "all") {
    filteredData = allData.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }
  displayCards(filteredData);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const btn4 = document.querySelector(".btn4");

  btn1.addEventListener("click", () => filterCategory("dog"));
  btn2.addEventListener("click", () => filterCategory("cat"));
  btn3.addEventListener("click", () => filterCategory("hamster"));
  btn4.addEventListener("click", () => filterCategory("all"));
});

function filterSearch(query) {
  const cards = document.querySelectorAll(".card");
  query = query.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

document.querySelector(".input").addEventListener("input", function (e) {
  const query = e.target.value;
  filterSearch(query);
});
