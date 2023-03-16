// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);

// document.title = "new title";
// console.log(document.title);
// console.log(document.body);
// console.log(document.all);
// const headerTitle = document.all[10];
// console.log(headerTitle);
// headerTitle.innerHTML = "<h1>novi logo</h1>";

//get element by ID
// const headerTitle = document.getElementById("logo");
// console.log(headerTitle);
// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<em>new logo</em>";
// headerTitle.style.borderBottom = "solid 3px";

//get elements by class name
const containers = document.getElementsByClassName("hero");
// console.log(containers);
// const container = containers[0];
// container.style.backgroundColor = "red";
// container.style.borderColor = "black";

//get elements by tag name
//mora petlja jer ima vise lemenata
// const listItems = document.getElementsByTagName("p");
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "red";
// }

//QUERY SELECTOR
//pristupamo prvom elementu koji zadovoljava uslov
// const first = document.querySelector("#logo");
// const first = document.querySelector(".container");
// const first = document.querySelector("p");

// const input1=document.querySelector("input[type='email']")

//QUERY SELECTOR ALL
//vraca sve elemente

// const evenLi = document.querySelectorAll("input:nth-child(even)");
// const oddLi = document.querySelectorAll("input:nth-child(odd)");
// for (let i = 0; i < evenLi.length; i++) {
//   evenLi.style.backgroundColor("red");
//   oddLi.style.backgroundColor("blue");
// }

//parentElement
const title = document.getElementsByClassName("hero");
console.log(title.parentElement);

//childNodes(vraca sve elemente i razmake)

//children(vraca samo elemente)

//create element
const newDiv = document.createElement("div");
//add class
newDiv.className = "newDiv";

container.appendChild(newDiv);

//add id
input1.setAttribute("placeholder", "unesite vasu email adresu");
