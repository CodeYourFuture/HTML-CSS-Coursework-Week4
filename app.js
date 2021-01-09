import articles from "./data.js";

const myImages = document.querySelector(".card-img-top");
console.log(myImages);
const myTitle = document.querySelector(".card-title");
const myText = document.querySelector(".article-text");
const cardGroup = document.querySelector(".card-group");

let currentItem = 0;
//  const ma = articles;
window.addEventListener("DOMContentLoaded", () => {
  displayArticles(articles);
  //   showArticle();
  //   console.log("dom loaded");
});

const displayArticles = (articleItems) => {
  let article = articleItems.map((singleArticle) => {
    // console.log(singleArticle);
    // console.log(singleArticle.text);

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
