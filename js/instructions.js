console.log("loaded instructions...");

document.querySelector("#info").addEventListener("click", () => {
  console.log("Klik på Hoved-knappen!");
  document.querySelector("#head").classList.toggle("my_scale");
});

document.querySelector("#info2").addEventListener("click", () => {
  console.log("Klik på Arm-knappen!");
  document.querySelector("#Arms").classList.toggle("wiggle");
});

document.querySelector("#info3").addEventListener("click", () => {
  console.log("Klik på Energi-knappen!");
  document.querySelector("#Energi").classList.toggle("spin");
});
