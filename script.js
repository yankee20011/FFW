// Task #1
let myTabs = document.querySelectorAll("ul.nav-tabs > li");

const myTabClicks = (tabClickEvent) => {
  for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].classList.remove("active");
  }
  let clickedTab = tabClickEvent.currentTarget;
  clickedTab.classList.add("active");
  tabClickEvent.preventDefault();
  let myContentPanes = document.querySelectorAll(".container__content");
  for (i = 0; i < myContentPanes.length; i++) {
    myContentPanes[i].classList.remove("active");
  }
  let anchorReference = tabClickEvent.target;
  let activePaneId = anchorReference.getAttribute("href");
  let activePane = document.querySelector(activePaneId);
  activePane.classList.add("active");
};

for (i = 0; i < myTabs.length; i++) {
  myTabs[i].addEventListener("click", myTabClicks);
}

//Task #2

const parseUrl = (string) => {
  let obj = {
    hash: "",
    hostname: "",
    pathname: "",
  };

  const arrUrl = string.split("");

  obj.hash = arrUrl.slice(arrUrl.indexOf("#"), arrUrl.length).join("");
  obj.hostname = arrUrl.slice(7, arrUrl.indexOf("/", 7)).join("");
  obj.pathname = arrUrl
    .slice(arrUrl.indexOf("/", 7), arrUrl.indexOf("?"))
    .join("");

  return obj;
};

let obj = parseUrl("http://ffwagency.com/do/any.php?a=1#foo");

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);
