const form = document.querySelector("#webform");

function cancelPopup(event) {
  event.preventDefault();
  const firstInvalid = form.querySelector(":user-invalid");
  if (firstInvalid) firstInvalid.focus();
}

form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    const firstInvalid = form.querySelector(":user-invalid");
    if (firstInvalid) firstInvalid.focus();
  }
});
// ====== DARK MODE ======//
const darkToggle = document.getElementById("dark-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (darkToggle) darkToggle.checked = true;
}

if (darkToggle) {
  darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}
