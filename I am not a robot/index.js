const para = document.getElementById("para");
const images = document.getElementById("images");
const verify = document.getElementById("btn");

const resetbtn = document.getElementById("reset");
resetbtn.style.display = "none";

removeImages = document.querySelectorAll(".img");
console.log(removeImages);

function randomArray(number) {
  var arr = [];
  var num = 5;
  for (let i = 0; i < num; i++) {
    var randomNumber = Math.floor(Math.random() * number);
    if (arr.includes(randomNumber)) num++;
    else arr.push(randomNumber);
  }
  return arr;
}

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

let arr = randomArray(10);

var secondCopy = arr[randomNumber(arr.length)];

arr.splice(randomNumber(arr.length), 0, secondCopy);
arr.splice(0, 0, -100);

let copyIndex = arr
  .map((el, i) => {
    if (el === secondCopy) return i;
    else return;
  })
  .filter((el) => el);

console.log(copyIndex);

console.log(arr);

tempClickedImages = 0;

verify.style.display = "none";

let count = 1;
let imp;
images.setAttribute("onclick", "clicked(event)");
let temp = 1;
for (var i = 1; i < 7; i++) {
  let im = document.createElement("img");
  im.setAttribute("id", `${temp}`);
  temp++;
  im.setAttribute("class", "img");
  if (i === copyIndex[0]) {
    im.setAttribute("id", "a");
    imp = i;
  }
  if (i === copyIndex[1]) {
    im.setAttribute("id", "b");
    im.setAttribute("data-ns-test", `img${imp}`);
  } else {
    im.setAttribute("data-ns-test", `img${count}`);
    count = count + 1;
  }

  im.src = `./images/${arr[i]}.jpg`;
  // im.src = `https://picsum.photos/id/${arr[i]}/200`;
  images.appendChild(im);
}

let clickedImages = [];

function clicked(event) {
  if (event.target.className == "img") {
    console.log(event.target.id);
    reset.style.display = "block";
    if (clickedImages.includes(event.target.id)) return;
    tempClickedImages++;
    clickedImages.push(event.target.id);
    console.log(clickedImages);
    if (tempClickedImages == 2) {
      verify.style.display = "block";
    } else {
      verify.style.display = "none";
    }
  }
}

function MasterReset() {
  resetbtn.style.display = "none";
  tempClickedImages = 0;
  verify.style.display = "none";
  clickedImages = [];
  para.textContent = "";
}

function ver() {
  if (
    (clickedImages[0] == "a" && clickedImages[1] == "b") ||
    (clickedImages[0] == "b" && clickedImages[1] == "a")
  ) {
    para.textContent = "You are a human. Congratulations!";
    return;
  }
  para.textContent =
    "We can't verify you as a human. You selected the non-identical tiles.";
}
