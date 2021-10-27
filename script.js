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

const parseUrl = async (string) => {
  const response = await fetch(string);
  const data = await response.json();
  console.log(data);
  return data;
};

parseUrl("https://cataas.com/api/cats?tags=cute");
