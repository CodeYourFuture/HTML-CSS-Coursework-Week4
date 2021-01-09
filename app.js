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
const cardGroup = document.querySelector(".card-group");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  displayArticles(articles);
  //   showArticle();
  //   console.log("dom loaded");
});

const displayArticles = (articleItems) => {
  let article = articleItems.map((singleArticle) => {
    console.log(singleArticle);
    console.log(singleArticle.text);

    return `<div class="card">
                  <img src="${singleArticle.img}" class="card-img-top">
                <div class="button-container d-flex justify-content-center d-sm-none"> 
                    
                 
                </div>
                <div class="card-body">
                    <h3 class="card-title">${singleArticle.title}</h3>
                    <hr w-75>
                    <p class="article-text">${singleArticle.text}</p>
                </div>
            </div>`;
  });
  article = article.join("");
  cardGroup.innerHTML = article;
};
//

// const showArticle = () => {
//   const item = articles[currentItem];
//   myImages.src = item.img;
//   myTitle.textContent = item.title;
//   myText.textContent = item.text;
// };

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// console.log(prevBtn);
// // nextBtn.addEventListener("click", () => {
// //   currentItem++;
// //   if (currentItem > articles.length - 1) {
// //     currentItem = 0;
// //   }
// //   showArticle();
// // });
// // prevBtn.addEventListener("click", () => {
// //   currentItem--;
// //   if (currentItem < 0) {
// //     currentItem = articles.length - 1;
// //   }
//   showArticle();
// })
