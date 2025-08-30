// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const openItem = document.querySelector(".faq-answer.show");

    // Close previously open accordion
    if (openItem && openItem !== question.nextElementSibling) {
      openItem.classList.remove("show");
      openItem.style.maxHeight = null;
      openItem.previousElementSibling.setAttribute("aria-expanded", "false");
      openItem.setAttribute("aria-hidden", "true");
    }

    // Toggle current one
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    if (!isExpanded) {
      answer.classList.add("show");
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
    } else {
      answer.classList.remove("show");
      answer.style.maxHeight = null;
      question.setAttribute("aria-expanded", "false");
      answer.setAttribute("aria-hidden", "true");
    }
  });
});
