const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const catName = input.value;
    newLi = document.createElement("li");
    newLi.innerText = catName;
    list.append(newLi);
    input.value = "";
})