console.log("loaded instructions...");

document.querySelector("#info").addEventListener("click", () => {
  console.log("Klik på Hoved-knappen!");
  document.querySelector("#head").classList.toggle("my_scale");
  document.querySelector("article").classList.add("hidden");
  document.querySelector(".info-text h2").textContent = "Hoved";
  document.querySelector("#efficiency").innerHTML =
    "<strong>Indtrængningen</strong><br><br>" +
    "Det starter i tankerne. Et svagt ekko af “6-7” begynder at hviske bag øjnene. <br> Ofrene beskriver en snurrende fornemmelse i kraniet — som om noget prøver at tælle indefra. Når de først begynder at gentage tallene højt, er forbindelsen til virkeligheden allerede svækket.";
  document.querySelector("#requirement").innerHTML =
    "“De siger, man kan høre en lav summen i rummet, før de begynder. Som en transmission, der ikke kan slukkes.”";
});

document.querySelector("#info2").addEventListener("click", () => {
  console.log("Klik på Arm-knappen!");
  document.querySelector("#Arms").classList.toggle("wiggle");
  document.querySelector("article").classList.add("hidden");
  document.querySelector(".info-text h2").textContent = "Armbevægelser";

  document.querySelector("#efficiency").innerHTML =
    "<strong>Kroppens modstand</strong><br><br>" +
    "Når invasionen når nervesystemet, begynder kroppen at kæmpe imod. Armene rykker i pludselige, rytmiske bevægelser — som styret af usynlige tråde. Bevægelserne danner et mønster, der ikke er menneskeligt… Nogle forskere mener, at de smittede forsøger at tegne noget i luften. Et symbol. Et kald.";
  document.querySelector("#requirement").textContent =
    "“Når du ser dem stå i kredse og bevæge sig synkront, skal du ikke råbe. Du skal løbe.”";
});

document.querySelector("#info3").addEventListener("click", () => {
  console.log("Klik på Energi-knappen!");
  document.querySelector("#Energi").classList.toggle("spin");
  document.querySelector("article").classList.add("hidden");

  document.querySelector(".info-text h2").textContent = "Energi niveau";

  document.querySelector("#efficiency").innerHTML =
    "<strong>Den sidste fase</strong><br><br>" +
    "Til sidst rammes kroppen af ekstrem energi — som et elektrisk overtag. Øjnene bliver matte, huden bleg, og pulsen stiger langt over det normale. De smittede kan bevæge sig i timevis uden hvile, som om de drives af en kraft, der ikke længere er deres egen. Når energien endelig slipper op, bliver der stille. Fuldstændig stille. Men rummet summer stadig. Som om tallene stadig er der. Et sted mellem 6 og 7.";
  document.querySelector("#requirement").textContent =
    "“Nogle siger, man stadig kan høre dem tælle, hvis man står helt stille ved Børm-skolen efter mørkets frembrud.”";
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
