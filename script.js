const afficher = document.getElementById("aff");
const input = document.getElementById("password");

afficher.addEventListener("click", function() {
  if (input.type == "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
