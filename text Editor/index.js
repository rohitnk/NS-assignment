const textarea = document.getElementById("textarea");
const featureflag = document.getElementById("feature-flag");
textarea.value = localStorage.getItem("autosave-data");

function clicked() {
  const textarea = document.getElementById("textarea");
  const featureflag = document.getElementById("feature-flag");
  if (featureflag.checked === true) {
    autoSave = setInterval(function () {
      localStorage.setItem("autosave-data", textarea.value);
      console.log(localStorage.getItem("autosave-data"));
    }, 1000);
  } else {
    clearInterval(autoSave);
  }
}
