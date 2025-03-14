const mainDiv = document.querySelector(".mainDiv");
let fetchedData = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
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
      desc.textContent = "More Info";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(category);
      card.appendChild(desc);

      mainDiv.appendChild(card);
      function filter() {
        const dog = document.getElementsByClassName("dog");
        const cat = document.querySelector("btn2");
        const hamster = document.querySelector("btn3");
        const all = document.querySelector("btn4");

        dog.addEventListener("click", () => {
          console.log("helloworld");
        });
      }
    });
  });
