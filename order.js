let dropdown = false;

let dropdownButton = document.getElementsByClassName("dropdown-button");

for (let i = 0; i < dropdownButton.length; i++) {
  // console.log(dropdownButton[i].innerText);
  dropdownButton[i].addEventListener("click", function (e) {
    dropdown = !dropdown;
    dropdownContent = e.target.parentNode.nextElementSibling;
    if (dropdown && e.target.innerText === dropdownButton[0].innerText) {
      dropdownContent.classList.add("show");
    } else if (dropdown && e.target.innerText === dropdownButton[1].innerText) {
      dropdownContent.classList.add("show");
    } else if (dropdown && e.target.innerText === dropdownButton[2].innerText) {
      dropdownContent.classList.add("show");
    } else if (dropdown && e.target.innerText === dropdownButton[3].innerText) {
      dropdownContent.classList.add("show");
    } else {
      dropdownContent.classList.remove("show");
    }
  });
}
