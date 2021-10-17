const scrollMain = () => {
    window.scrollTo(0, 0)
}
const scrollProjects = () => {
    window.scrollTo(0, 670)
}
const scrollProgram = () => {
    window.scrollTo(0, 1400)
}
const scrollReviews = () => {
    window.scrollTo(0, 1800)
}

window.onscroll = () => {
    if (window.scrollY > 600) {
      document.querySelector(".isShowBtn").classList.remove("isShowBtnHide");
    } else if (window.scrollY < 600) {
      document.querySelector(".isShowBtn").classList.add("isShowBtnHide");
    }
  };

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };