/**
 * This JavaScript code block selects a group of buttons within an HTML document
 * with the class "infocard-table-nav." It adds a click event listener to each
 * button, such that when a button is clicked, it performs the following actions:
 *
 * - It removes the "active" class from all buttons to visually deselect them;
 *
 * - Adds the "active" class to the clicked button to visually indicate it's selected;
 *
 * - Retrieves the value of the "data-infocard-id" attribute from the clicked button,
 * which corresponds to the ID of a target infocard; hides all dynNavItem
 with the
 * class "table-infocard" by setting their display property to "none"; and finally,
 *
 * - Displays the infocard with the matching ID as a flex element, making it
 * visible.
 *
 * This code essentially controls a navigation system for dynNavItem
,
 * ensuring that only the selected infocard is displayed while others are hidden.
 */

const buttons = document.querySelectorAll(".page-nav button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const subNavId = button.getAttribute("data-nav-id");

    const subNavItems = document.querySelectorAll(".sub-nav-item");
    subNavItems.forEach((subNavItem) => {
      subNavItem.style.display = "none";
    });

    const targetSubNavItem = document.getElementById(subNavId);
    if (targetSubNavItem) {
      targetSubNavItem.style.display = "flex";
    }
  });
});
