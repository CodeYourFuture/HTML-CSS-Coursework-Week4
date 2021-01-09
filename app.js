const articles = [
  {
    id: 1,
    img: "img/flower1.webp",
    title: "Why it’s okay to argue",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    img: "img/flower2.webp",

    title: "10 ways to de-stress",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    img: "img/flower3.webp",

    title: "Understanding PTSD",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

const myImages = document.querySelector(".card-img-top");
console.log(myImages);
const myTitle = document.querySelector(".card-title");
const myText = document.querySelector(".article-text");
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showArticle();
  console.log("dom loaded");
});

const showArticle = () => {
  const item = articles[currentItem];
  myImages.src = item.img;
  myTitle.textContent = item.title;
  myText.textContent = item.text;
};
