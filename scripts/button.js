const actionBar = document.getElementsByClassName("ActionBar")[0];

if (actionBar) {
  console.log("ActionBar found");

  const button = document.createElement("button");
  button.type = "button";
  button.style.backgroundColor = "transparent";
  button.style.border = "none";
  button.textContent = "✨";

  button.addEventListener("click", () => {
    const prText = generateText();
    const textField = document.getElementById("pull_request_review_body");
    textField.value = prText;
  });

  actionBar.appendChild(button);
}
