function createDropdown(button) {
  const dropdown = document.createElement("div");
  dropdown.id = "ai-dropdown";
  dropdown.style.width = "480px";
  dropdown.style.maxHeight = "410px";
  dropdown.style.zIndex = "99";
  dropdown.style.backgroundColor = "#3d444d";
  dropdown.textContent = "🪄 AI PR Tools";
  dropdown.style.position = "relative";
  return dropdown;
}
