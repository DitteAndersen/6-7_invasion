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
