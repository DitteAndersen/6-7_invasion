console.log("register-output loaded");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#webform");
  const summary = document.querySelector(".summary-content");

  if (!form || !summary) {
    console.log("Form eller summary ikke fundet!");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop reload

    const data = new FormData(form);

    const fornavn = data.get("fornavn");
    const efternavn = data.get("efternavn");
    const email = data.get("email");
    const indberet = data.get("indberet");

    console.log("Data modtaget:", { fornavn, efternavn, email, indberet });

    summary.innerHTML = `
      <h2>Opsamling</h2>
      <p><strong>Fornavn:</strong> ${fornavn}</p>
      <p><strong>Efternavn:</strong> ${efternavn}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Indberetning:</strong><br>${indberet}</p>

      <!-- Knapperne nederst -->
      <div class="action-buttons">
        <button id="approveBtn" class="approve-btn">Godkend</button>
        <button id="deleteBtn" class="delete-btn">Slet</button>
      </div>
    `;

    // Godkend → Vis tak-besked
    document.querySelector("#approveBtn").addEventListener("click", () => {
      summary.innerHTML = `
        <h2>Tak!</h2>
        <p>Din indberetning er nu godkendt ✔️</p>
      `;
    });

    // Slet → Nulstil og vis besked
    document.querySelector("#deleteBtn").addEventListener("click", () => {
      form.reset();
      summary.innerHTML = `
        <h2>Indberetning slettet</h2>
        <p>Du kan udfylde formularen igen.</p>
      `;
    });
  });
});
