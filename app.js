import articles from "./data.js";

const cardGroup = document.querySelector(".card-group");

window.addEventListener("DOMContentLoaded", () => {
  var newWidth = window.innerWidth;
  if (newWidth < 580) {
    showArticle();console
  } else {
    displayArticles(articles);
  }
});
window.addEventListener("resize", function (event) {
  var newWidth = window.innerWidth;
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
  const x = document.getElementById("button-test");
  console.log(x);
  x.addEventListener("click", () => {
    console.log("hello");
  });
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
                    <a class="next-btn" id="next-btn">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${articles[index].title}</h3>
                    <hr w-75>
                    <p class="article-text">${articles[index].text}</p>
                </div>
            </div>`;
  };
  cardGroup.innerHTML = show();
  const prevBtn = document.getElementById("prev-btn");
  prevBtn.addEventListener("click", () => {
    console.log(index);
    index--;
    if (index < 0) {
      index = articles.length - 1;
    }
    showArticle();
  });
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", () => {
    index++;
    if (index > articles.length - 1) {
      index = 0;
    }
    showArticle();
  });
};

