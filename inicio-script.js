const btnStart$$ = document.querySelector("#start");
const main$$ = document.querySelector("main");
const pixelBach$$ = "images/pixel-bach.png";
const flechaBocadillo$$ = "images/flecha-bocadillo.png";
const bocadilloArray = ['¿Hola?... ¿Dónde estoy?...', '¡Eh!... ¡Tú!, ¡El que mira a la pantalla con la boca abierta!' ];

console.log(bocadilloArray[0]);



btnStart$$.addEventListener("click", () => {
  btnStart$$.remove();
  createBach();
});

function createBach() {
  divBach$$ = document.createElement("div");
  divBach$$.setAttribute("class", "containerBach")
  divBocadillo$$ =  document.createElement('div');
  divBocadillo$$.setAttribute("class", 'bocadillo');
  divBocadillo$$.innerHTML = `
  <p class="textBocadillo">Hola soy Bach.</p>
  <img class="flecha" src="${flechaBocadillo$$}" alt="flecha">`
  divBach$$.innerHTML = `
    <img class="rotateIn" src="${pixelBach$$}" alt="pixel-bach">`;
  
    main$$.setAttribute('class', 'centerMain');
    main$$.appendChild(divBocadillo$$);
    main$$.appendChild(divBach$$);
    
}
