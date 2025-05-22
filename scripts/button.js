const actionBar = document.getElementsByClassName("ActionBar")[0];

if (actionBar) {
  console.log("ActionBar found");

  const button = document.createElement("button");
  button.style.backgroundColor = "transparent";
  button.style.border = "none";
  button.textContent = "✨";

  actionBar.appendChild(button);
}
