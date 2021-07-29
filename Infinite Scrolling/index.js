var temp = 1000;
var bodyHeight = document.getElementById("body").style.height;
console.log(bodyHeight);
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    /*  alert("you're at the bottom of the page"); */
    document.getElementById("body").style.height = `${
      document.getElementById("body").offsetHeight + temp
    }px`;
  }
};
