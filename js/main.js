console.log("Popup script loaded...");

const overlay = document.getElementById("popup-overlay");
const titleEl = document.getElementById("popup-title");
const textEl = document.getElementById("popup-text");
const closeBtn = document.getElementById("popup-close");

document
  .querySelector(".daily_card:nth-child(1) .cta_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Symptomerne popup");

    titleEl.textContent = "Symptomerne";

    textEl.innerHTML = `
  <p>De tidligste tegn på 6–7-sygdommen viser sig ikke i kroppen, men i tankerne. Mange beskriver en svag, men rytmisk puls bag panden – som et ekko, der ikke kommer udefra, men indefra.</p>

  <p>Følelsen følges ofte af korte udfald, hvor personen gentager små bidder af tanker uden at opdage det.</p>

  <p>I starten virker det som dagdrømmeri, men over tid bliver mønsteret tydeligere: de samme tal, de samme sætninger, de samme gentagelser.</p>
`;

    overlay.hidden = false;
  });

document
  .querySelector(".daily_card:nth-child(2) .cta_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Kroppens reaktion popup");

    titleEl.textContent = "Kroppens reaktion";

    textEl.innerHTML = `
  <p>Selvom 6–7-sygdommen begynder i tankerne, er det kroppens bevægelser, der først afslører de smittedes tilstand for omverdenen. Vidner beskriver rytmiske armbevægelser, som om kroppen reagerer på en usynlig impuls. Bevægelsesmønstret er ens på tværs af alle rapporter: korte, kontrollerede ryk — altid i samme tempo.</p>

  <p>Eksperter mener, at bevægelserne ikke er tilfældige. Der er tegn på, at musklerne følger et gentagende signal, som forskerne endnu ikke har kunnet identificere. Flere optagelser viser, at armene bevæger sig synkront mellem forskellige personer, selv når de står flere meter fra hinanden. Det tyder på en form for fælles forbindelse.</p>

  <p>I de senere stadier bliver bevægelserne mere udtalte. Nogle smittede begynder at stå i cirkler og udføre næsten danselignende sekvenser — som om de “tegner” noget i luften. Hvad mønstrene betyder, ved ingen endnu. Men én ting er sikker: når bevægelserne går fra sporadiske til synkrone, er sygdommens påvirkning i kroppen allerede dybt forankret.</p>
`;

    overlay.hidden = false;
  });

document
  .querySelector("#breaking .news_card:nth-child(1) .cta_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Nyhed 1 popup");

    titleEl.textContent = "Mystisk lydoptagelse går viralt";

    textEl.innerHTML = `
  <p>En ukendt lydoptagelse har spredt sig på sociale medier i rekordfart. Klippet varer kun 14 sekunder, men indeholder en pulserende frekvens, som mange beskriver som ubehageligt velkendt. Flere hævder, at de kan høre en svag gentagelse af tallene 6 og 7 i baggrunden.</p>

  <p>Eksperter har forsøgt at analysere optagelsen, men frekvensen ligger i et mærkeligt interval mellem mekanisk og organisk lyd. Nogle mener, at det er en forvrænget radiointerference. Andre hævder, at det er de smittedes “ekko”, fanget på bånd.</p>

  <p>Uanset oprindelsen, advarer myndighederne folk mod at lytte til klippet med hovedtelefoner. Flere rapporter fortæller om hovedpine, flimrende syn og en mærkelig trang til at gentage tallene, efter man har hørt optagelsen.</p>
`;

    overlay.hidden = false;
  });

document
  .querySelector("#breaking .news_card:nth-child(2) .cta_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Nyhed 2 popup");

    titleEl.textContent = "Rapporter om natlig aktivitet";

    textEl.innerHTML = `
  <p>De seneste uger har borgere over hele landet rapporteret mærkelig aktivitet efter solnedgang. Mørke skikkelser ses bevæge sig mellem bygninger, ofte i langsomme, cirkulære mønstre — som om de leder efter noget, eller følger en usynlig rute.</p>

  <p>Flere naboer fortæller, at de har hørt rytmiske bank eller lav hvisken fra haven eller baggården. Nogle beskriver, at lydene bliver stærkere, hvis man står stille — som om de smittede mærker tilstedeværelse.</p>

  <p>Myndighederne råder alle til at blive indendørs om natten og undgå at nærme sig grupper, der bevæger sig synkront. Hvis man observerer bevægelser, der gentager sig i faste intervaller, skal det straks indberettes.</p>
`;

    overlay.hidden = false;
  });

document
  .querySelector("#breaking .news_card:nth-child(3) .cta_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Nyhed 3 popup");

    titleEl.textContent = "Lokale observationer";

    textEl.innerHTML = `
  <p>Flere lokale har de seneste dage bemærket usædvanlige bevægelser langs skovkanter, parker og øde stier. Vidner fortæller om personer, der står helt stille i flere minutter, kun for pludseligt at dreje hovedet mod samme punkt — som om de lytter til noget ingen andre kan høre.</p>

  <p>Nogle rapporter beskriver gentagne mønstre i fodspor, der fører ind og ud af skovområder uden logisk retning. Sporene stopper ofte brat, uden tegn på hvor personen er gået hen.</p>

  <p>Enkelte beretninger fortæller om svage lysglimt mellem træerne, som pulserer i takt med de smittedes bevægelser. Forskere undersøger nu, om fænomenerne kan være relateret til sygdommens sene stadier.</p>
`;

    overlay.hidden = false;
  });

// --- LUK POPUP ---//
closeBtn.addEventListener("click", () => {
  overlay.hidden = true;
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.hidden = true;
  }
});
// ====== DARK MODE =====//
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
