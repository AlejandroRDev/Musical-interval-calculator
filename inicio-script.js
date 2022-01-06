const btnStart$$ = document.querySelector("#start");
const main$$ = document.querySelector("main");
const pixelBach$$ = "images/pixel-bach.png";
const flechaBocadillo$$ = "images/flecha-bocadillo.png";
const bocadilloArray = [
  "¿Hola?... ¿Dónde estoy?...",
  "¡Eh!... ¡Tú!,</br> ¡El que mira a la pantalla con la boca abierta!",
  "¡DIME ALGO!",
];
const bocadilloArray2 = [
  "Bueno... empezare presentandome, me llamo:",
  "Johann Sebastian Bach",
  "Algún graciosillo me ha pixelado en esta pagina web de educación músical, pero...",
  "¡¿QUÉ PERSONAJE PIXELADO TIENE LA CABEZA ASÍ DE GRANDE?!",
];
const bocadilloArray3 = [
  "Dejemonos de tonterias, realmente si estoy aquí es por una razón",
  "¿Te has preguntado por qué han pixelado a Bach? </br> ¿y no a tu vecina, por ejemplo?",
  'La explicación es sencilla, por algo me consideran "el padre de la música"',
  "Durante mi vida"
];

btnStart$$.addEventListener("click", () => {
  btnStart$$.remove();
  createBach();
});

function createBach() {
  divBach$$ = document.createElement("div");
  divBach$$.setAttribute("class", "containerBach");
  divBocadillo$$ = document.createElement("div");
  divBocadillo$$.setAttribute("class", "bocadillo");

  writeBocadillo(divBocadillo$$, bocadilloArray);

  /* divBocadillo$$.innerHTML = `
  <p class="textBocadillo">Hola soy Bach.</p>
  <img class="flecha" src="${flechaBocadillo$$}" alt="flecha">` */
  divBach$$.innerHTML = `
    <img class="rotateIn" src="${pixelBach$$}" alt="pixel-bach">`;

  main$$.setAttribute("class", "centerMain");
  main$$.appendChild(divBocadillo$$);
  main$$.appendChild(divBach$$);
}

function writeBocadillo(param, array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
      param.innerHTML = `
    <p class="textBocadillo">${array[0]}</p>`;
    }, 1000);
    setTimeout(function () {
      param.innerHTML = `
    <p class="textBocadillo">${array[1]}</p>`;
    }, 4000);
    setTimeout(function () {
      const btnBocadillo = document.createElement("button");
      btnBocadillo.addEventListener("click", writeBocadilloSecond);
      btnBocadillo.innerHTML = `>`;
      param.innerHTML = `
    <p class="textBocadillo">${array[2]}</p>
    `;

      param.appendChild(btnBocadillo);
    }, 6000);

    clearTimeout(param);
  }
}

const writeBocadilloSecond = () => {
  for (let i = 0; i < bocadilloArray3.length; i++) {
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray3[0]}</p>`;
    }, 500);
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray3[1]}</p>`;
    }, 3500);
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray3[2]}</p>
    `;
    }, 6500);
    setTimeout(function () {
      const btnBocadillo2 = document.createElement('button');
      btnBocadillo2.addEventListener("click", writeBocadilloThird);
      btnBocadillo2.innerHTML = `>`;
      divBocadillo$$.innerHTML = `
      <p class="textBocadillo">${bocadilloArray3[3]}</p>
      `;
      divBocadillo$$.appendChild(btnBocadillo2);
    }, 9500);
    clearTimeout(divBocadillo$$);
  }
};

const writeBocadilloThird = () => {
  for (let i = 0; i < bocadilloArray2.length; i++) {
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray2[0]}</p>`;
    }, 500);
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray2[1]}</p>`;
    }, 3500);
    setTimeout(function () {
      divBocadillo$$.innerHTML = `
    <p class="textBocadillo">${bocadilloArray2[2]}</p>
    `;
    }, 6500);
    setTimeout(function () {
      const btnBocadillo2 = document.createElement('button');
      btnBocadillo2.addEventListener("click", );
      btnBocadillo2.innerHTML = `>`;
      divBocadillo$$.innerHTML = `
      <p class="textBocadillo">${bocadilloArray2[3]}</p>
      `;
      divBocadillo$$.appendChild(btnBocadillo2);
    }, 9500);
    clearTimeout(divBocadillo$$);
  }
};

/* La propuesta de Bach es una demostración de cómo se podían escribir piezas musicales en las 24 tonalidades (12 mayores y 12 menores, una desde cada semitono). De esta manera, ordenó los Preludios y Fugas, por parejas,
 en cada una de las tonalidades, partiendo de Do mayor y finalizando en Si menor  */