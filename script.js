const navBtn = document.querySelector(".nav-btn");
const navLine = document.querySelector(".btn_line");
const navList = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
  navLine.classList.toggle("btn_line-active");
});

window.addEventListener("click", (e) => {
  if (e.target != navList && e.target != navBtn && e.target != navLine) {
    navList.classList.remove("nav-active");
    navLine.classList.remove("btn_line-active");
  }
});

const prev = document.querySelector(".left-arr");
const next = document.querySelector(".right-arr");

const container = document.querySelector(".recent_content-items").children;

const recentOne = document.querySelector(".recent-item1");
const recentTwo = document.querySelector(".recent-item2");
const recentThree = document.querySelector(".recent-item3");

prev.addEventListener("click", () => {
  recentOne.classList.add("ani-hide");
  recentTwo.classList.add("ani-hide");
  recentThree.classList.add("ani-hide");

  if (
    container[2].classList.contains("recent-item1") &&
    container[2].classList.contains("current")
  ) {
    recentThree.classList.remove("none");
    recentThree.classList.add("current");
    recentOne.classList.add("none");
    recentOne.classList.remove("current");
  } else if (
    container[4].classList.contains("recent-item3") &&
    container[4].classList.contains("current")
  ) {
    recentTwo.classList.remove("none");
    recentTwo.classList.add("current");
    recentThree.classList.add("none");
    recentThree.classList.remove("current");
  } else if (
    container[3].classList.contains("recent-item2") &&
    container[3].classList.contains("current")
  ) {
    recentOne.classList.remove("none");
    recentOne.classList.add("current");
    recentTwo.classList.add("none");
    recentTwo.classList.remove("current");
  }
});

next.addEventListener("click", () => {
  recentOne.classList.add("ani-hide");
  recentTwo.classList.add("ani-hide");
  recentThree.classList.add("ani-hide");

  if (
    container[2].classList.contains("recent-item1") &&
    container[2].classList.contains("current")
  ) {
    recentTwo.classList.remove("none");
    recentTwo.classList.add("current");
    recentOne.classList.add("none");
    recentOne.classList.remove("current");
  } else if (
    container[3].classList.contains("recent-item2") &&
    container[3].classList.contains("current")
  ) {
    recentThree.classList.remove("none");
    recentThree.classList.add("current");
    recentTwo.classList.add("none");
    recentTwo.classList.remove("current");
  } else if (
    container[4].classList.contains("recent-item3") &&
    container[4].classList.contains("current")
  ) {
    recentOne.classList.remove("none");
    recentOne.classList.add("current");
    recentThree.classList.add("none");
    recentThree.classList.remove("current");
  }
});
