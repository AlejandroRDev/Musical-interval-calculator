let operA;
let operB;

//Nodos
const pixelBach$$ = "images/pixel-bach.png";
const main$$ = document.querySelector("main");
let result$$ = document.getElementById('result');
const segm$$ = document.getElementById('segm');
const segM$$ = document.getElementById('segM');
const segA$$ = document.getElementById('segA');
const term$$ = document.getElementById('term');
const terM$$ = document.getElementById('terM');
const cuad$$ = document.getElementById('cuad');
const cuaJ$$ = document.getElementById('cuaJ');
const cuaA$$ = document.getElementById('cuaA');
const quid$$ = document.getElementById('quid');
const quiJ$$ = document.getElementById('quiJ');
const quiA$$ = document.getElementById('quiA');
const sexm$$ = document.getElementById('sexm');
const sexM$$ = document.getElementById('sexM');
const sexA$$ = document.getElementById('sexA');
const sepd$$ = document.getElementById('sepd');
const sepm$$ = document.getElementById('sepm');
const sepM$$ = document.getElementById('sepM');
const oct$$ = document.getElementById('oct');
const sum$$ = document.getElementById('sum');
const chord$$ = document.getElementById('chord');
const reset$$ = document.getElementById('reset');

//valor de los botones de la calculadora

segm$$.onclick = () => {
    result$$.innerHTML = `0.5`;
};
segM$$.onclick = () => {
    result$$.textContent = `1`;
};
segA$$.onclick = () => {
    result$$.innerHTML = `1.5`;
};
term$$.onclick = () => {
    result$$.innerHTML = `1.5`;
};
terM$$.onclick = () => {
    result$$.innerHTML = `2`;
};
cuad$$.onclick = () => {
    result$$.innerHTML = `2`;
};
cuaJ$$.onclick = () => {
    result$$.innerHTML = `2.5`;
};
cuaA$$.onclick = () => {
    result$$.innerHTML = `3`;
};
quid$$.onclick = () => {
    result$$.innerHTML = `3`;
};
quiJ$$.onclick = () => {
    result$$.innerHTML = `3.5`;
};
quiA$$.onclick = () => {
    result$$.innerHTML = `4`;
};
sexm$$.onclick = () => {
    result$$.innerHTML = `4`;
};
sexM$$.onclick = () => {
    result$$.innerHTML = `4.5`;
};
sexA$$.onclick = () => {
    result$$.innerHTML = `5`;
};
sepd$$.onclick = () => {
    result$$.innerHTML = `4.5`;
};
sepm$$.onclick = () => {
    result$$.innerHTML = `5`;
};
sepM$$.onclick = () => {
    result$$.innerHTML = `5.5`;
};
oct$$.onclick = () => {
    result$$.innerHTML = `6`;
};
sum$$.onclick = () => {
    operA = result$$.textContent;
    console.log(operA);
}
reset$$.onclick = () => {
    result$$.innerHTML = ``;
}
chord$$.onclick = () =>{
    operB = result$$.textContent;
    console.log(operB);
    resolve();

}

const resolve =  () => {
    let tones = 0;
    tones = parseFloat(operA) + parseFloat(operB);
    console.log(tones);
    const div$$ =  document.createElement('div');
    const p$$ =  document.createElement('p');
    p$$.innerHTML =  ``;
    if (tones === 5) {
        result$$.innerHTML = tones;
        createBach();
    } else if (tones === 5.5) {
        result$$.innerHTML = tones;
        p$$.innerHTML = `Es una triada mayor, tiene 5 tonos y 1 semitono.`
    } else if (tones === 4.5) {
        result$$.innerHTML = tones;
        p$$.innerHTML = `Es una triada disminuida, tiene 4 tonos y 1 semitono.`;
    } else if (tones === 6) {
        result$$.innerHTML = tones;
        p$$.innerHTML = `Es una triada aumentada, tiene 6 tonos.`
    } else {
        result$$.innerHTML = ``;
        p$$.innerHTML = `Quieto! quieto Schopenhauer!, esta calculadora solo muestra las triadas fundamentales.`;
    }
    div$$.appendChild(p$$);
    document.body.appendChild(div$$);
};

function createBach() {
    divBach$$ = document.createElement("div");
    divBach$$.setAttribute("class", "containerBach");
    divBocadillo$$ = document.createElement("div");
    divBocadillo$$.setAttribute("class", "bocadillo");
    divContainer$$ = document.createElement("div");
    writeBocadillo(divBocadillo$$);
  
    /* divBocadillo$$.innerHTML = `
    <p class="textBocadillo">Hola soy Bach.</p>
    <img class="flecha" src="${flechaBocadillo$$}" alt="flecha">` */
  
    main$$.setAttribute("class", "centerMain");

    divBach$$.innerHTML = `
    <img class="rotateIn" src="${pixelBach$$}" alt="pixel-bach">`;
    divContainer$$.appendChild(divBocadillo$$);
    divContainer$$.appendChild(divBach$$);
    main$$.appendChild(divContainer$$);
  }
  function writeBocadillo(param) {
    
      setTimeout(function () {
        param.innerHTML = `
      <p class="textBocadillo">Es una triada menor, tiene 5 tonos.</p>`;
      }, 1000);    
  }
