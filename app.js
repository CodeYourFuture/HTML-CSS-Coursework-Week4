import articles from "./data.js";

const cardGroup = document.querySelector(".card-group");

window.addEventListener("DOMContentLoaded", () => {
  var newWidth = window.innerWidth;
  if (newWidth < 580) {
    showArticle();
  } else {
    displayArticles(articles);
  }
});
window.addEventListener("resize", function (event) {
  var newWidth = window.innerWidth;
  console.log(newWidth);
  if (newWidth < 580) {
    showArticle();
  } else {
    displayArticles(articles);
  }
});

const displayArticles = (articleItems) => {
  let article = articleItems.map((singleArticle) => {
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

let index = 0;

const showArticle = () => {
  const show = () => {
    return `<div class="card">
                  <img src="${articles[index].img}" class="card-img-top">
                <div class="button-container d-flex justify-content-center d-sm-none">
                  <a class="prev-btn" id="prev-btn">
                        <i class="fas fa-chevron-left mx-2"></i>
                    </a>
                    <a class="next-btn">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${articles[0].title}</h3>
                    <hr w-75>
                    <p class="article-text">${articles[0].text}</p>
                </div>
            </div>`;
  };
  cardGroup.innerHTML = show();

}

//tried to add an eventListener to buttons but it always gives null value for button and I cant add event listener

