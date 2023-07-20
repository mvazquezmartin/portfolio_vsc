function randomNum(max) {
  return Math.floor(Math.random() * max);
}
function whileSoN() {
  while (jugar != "s" && jugar != "n") {
    jugar = prompt("Te dije S ó N !!! (＞︿＜)").toLowerCase();
  }
}
let jugar = prompt(
  "Hola! (っ◕‿◕)っ ¿Quieres consultarme tu futuro? S/N"
).toLowerCase();
whileSoN();
while (jugar == "s") {
  let pregunta = prompt("(｡◕‿◕｡) Hazme una pregunta..");
  switch (randomNum(10)) {
    case 0:
      alert(pregunta + " " + "(ಠ‿ಠ) Es cierto.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 1:
      alert(pregunta + " " + "( ͡° ͜ʖ ͡°) Es decididamente así.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 2:
      alert(pregunta + " " + "(°‿‿°) Sin lugar a dudas.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃ ¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 3:
      alert(
        pregunta + " " + "（　ﾟДﾟ） Respuesta confusa, vuelve a intentarlo."
      );
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 4:
      alert(pregunta + " " + "(⩾﹏⩽) Vuelve a preguntar más tarde.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 5:
      alert(pregunta + " " + "(҂◡_◡) Mejor no decirte ahora.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 6:
      alert(pregunta + " " + "(ಠ_ಠ) No cuentes con ello.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 7:
      alert(pregunta + " " + "(⊙﹏⊙) Mi respuesta es no.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 8:
      alert(pregunta + " " + "(ಥ⌣ಥ) Mis fuentes dicen que no.");
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
    case 9:
      alert(
        pregunta +
          " " +
          "(╬ ಠ益ಠ) No se, lo unico que puedo afirmar que el Bojo es un flancito"
      );
      jugar = prompt(
        "(⊃｡•́‿•̀｡)⊃¿Quieres hacer otra pregunta? S/N"
      ).toLowerCase();
      whileSoN();
      break;
  }
}
alert("Adios (⩾﹏⩽)");
