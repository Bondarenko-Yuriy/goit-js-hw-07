document.getElementById("name-input").addEventListener("input", function () {
  const nameInput = this.value.trim();

  const nameOutput = document.getElementById("name-output");
  if (nameInput === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput;
  }
});
