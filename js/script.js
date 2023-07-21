const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listeners:
tabs.forEach((tab) => tab.addEventListener("click", onTabsClick));

function onTabsClick(e) {
  // Deactivate all tabs:
  tabs.forEach((tab) =>
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    )
  );

  // Hide all panels:
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target:
  e.target.classList.add("border-softRed", "border-b-4");
  document
    .getElementById("panels")
    .getElementsByClassName(e.target.getAttribute("data-target"))[0]
    .classList.remove("hidden");
}
