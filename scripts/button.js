const actionBar = document.getElementsByClassName("ActionBar")[0];

if (actionBar) {
  console.log("ActionBar found");

  const button = document.createElement("button");
  button.type = "button";
  button.style.backgroundColor = "transparent";
  button.style.border = "none";
  button.textContent = "✨";

  button.addEventListener("click", () => {
    event.preventDefault();
    const existing = document.getElementById("ai-dropdown");
    if (existing) {
      existing.remove();
      return;
    }

    const dropDown = createDropdown(button);
    document.body.appendChild(dropDown);
    const rect = button.getBoundingClientRect();
    dropDown.style.position = "absolute";
    dropDown.style.top = rect.bottom + window.scrollY + "px";
    dropDown.style.left = rect.left + window.scrollX + "px";
  });

  actionBar.appendChild(button);
}
