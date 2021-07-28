const textarea = document.getElementById("textarea");
const featureflag = document.getElementById("feature-flag");
textarea.value = localStorage.getItem("updateValue");

function clicked() {
  const textarea = document.getElementById("textarea");
  const featureflag = document.getElementById("feature-flag");
  if (featureflag.checked === true) {
    autoSave = setInterval(function () {
      localStorage.setItem("updateValue", textarea.value);
      console.log(localStorage.getItem("updateValue"));
    }, 1000);
  } else {
    clearInterval(autoSave);
  }
}
