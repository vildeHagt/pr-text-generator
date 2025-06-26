document.addEventListener("DOMContentLoaded", () => {
  let observer;

  function injectButton() {
    const actionBar = document.getElementsByClassName("ActionBar")[0];
    const existingButton = document.getElementById("pr-text-generator-btn");

    if (actionBar) {
      if (!existingButton) {
        console.log("ActionBar found");
        const button = document.createElement("button");
        button.id = "pr-text-generator-btn";
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
    } else if (existingButton) {
      // Remove the button if ActionBar is gone
      existingButton.remove();
    }
  }

  injectButton();

  observer = new MutationObserver(() => {
    injectButton();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
