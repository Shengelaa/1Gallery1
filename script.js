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
    let fetchedData = data;
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
  });
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
