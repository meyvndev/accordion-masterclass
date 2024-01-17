const customAccordionItems = document.querySelectorAll(".custom-accordion-content");

customAccordionItems.forEach((customItem, customIndex) => {
  let customHeader = customItem.querySelector(".custom-header");
  customHeader.addEventListener("click", () => {
    customItem.classList.toggle("custom-open");

    let customDescription = customItem.querySelector(".custom-description");
    if (customItem.classList.contains("custom-open")) {
      customDescription.style.height = `${customDescription.scrollHeight}px`;
      customItem.querySelector(".custom-icon").classList.replace("fa-plus", "fa-minus");
    } else {
      customDescription.style.height = "0px";
      customItem.querySelector(".custom-icon").classList.replace("fa-minus", "fa-plus");
    }
    removeCustomOpen(customIndex);
  });
});

function removeCustomOpen(index) {
  customAccordionItems.forEach((customItem, customIndex) => {
    if (index !== customIndex) {
      customItem.classList.remove("custom-open");

      let customDes = customItem.querySelector(".custom-description");
      customDes.style.height = "0px";
      customItem.querySelector(".custom-icon").classList.replace("fa-minus", "fa-plus");
    }
  });
}
