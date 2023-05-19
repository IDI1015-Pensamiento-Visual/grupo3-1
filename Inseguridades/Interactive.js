var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("scroll");
  } else {
    navbar.classList.add("scroll");
  }
  
  prevScrollPos = currentScrollPos;
}

function cambiarImagenes1() {
    var inicio = 1; 
    var fin = 50; 
    var boton = document.getElementById("b1")
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Metro"
    botonnuevo.id = "b1b"
    botonnuevo.className = "second"
    botonnuevo.style.backgroundColor= "#A34075";
    botonnuevo.style.color="White"
    botonnuevo.onclick = function () {
      var inicio = 1; 
      var fin = 50; 
      var boton = document.getElementById("b1b")
      var botonnuevo = document.createElement("button")
      var siguiente = document.getElementById("foto51")
      botonnuevo.innerHTML = "Metro"
      botonnuevo.id = "b1"
      botonnuevo.className = "first"
      botonnuevo.onclick = function (){cambiarImagenes1()};
      boton.parentNode.replaceChild(botonnuevo, boton)
      for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = siguiente.src;
      imagen.id = ("foto" + i)
    } 
      }
    boton.parentNode.replaceChild(botonnuevo, boton)
    var delay = 100;
    for (var i = inicio; i <= fin; i++) {
      (function (i){
        setTimeout(function (){
          var imagen = document.getElementById("foto" + i);
          imagen.src = "b.svg";
          imagen.id = ("foto" + i)
        }, delay);
        delay += 100; 
      })(i);
    } 
  }
  function cambiarImagenes2() {
    var inicio = 1; 
    var fin = 75; 
    var boton = document.getElementById("b2")
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Parque"
    botonnuevo.id = "b2b"
    botonnuevo.className = "second"
    botonnuevo.style.backgroundColor= "#9A55BE";
    botonnuevo.style.color="White"
    botonnuevo.onclick = function () {
      var inicio = 1; 
      var fin = 75; 
      var boton = document.getElementById("b2b")
      var botonnuevo = document.createElement("button")
      var siguiente = document.getElementById("foto76")
      botonnuevo.innerHTML = "Parque"
      botonnuevo.id = "b2"
      botonnuevo.className = "first"
      botonnuevo.onclick = function (){cambiarImagenes2()};
      boton.parentNode.replaceChild(botonnuevo, boton)
      for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = siguiente.src;
      imagen.id = ("foto" + i)
    } 
      }
    boton.parentNode.replaceChild(botonnuevo, boton)
    var delay = 100;
    for (var i = inicio; i <= fin; i++) {
      (function (i){
        setTimeout(function (){
          var imagen = document.getElementById("foto" + i);
          imagen.src = "c.svg";
          imagen.id = ("foto" + i)
        }, delay);
        delay += 100;
      })(i);
    } 
  }
  function cambiarImagenes3() {
    var inicio = 1; 
    var fin = 32; 
    var boton = document.getElementById("b3")
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Disco"
    botonnuevo.id = "b3b"
    botonnuevo.className = "second"
    botonnuevo.style.backgroundColor= "#299B31";
    botonnuevo.style.color="White"
    botonnuevo.onclick = function () {
      var inicio = 1; 
      var fin = 32; 
      var boton = document.getElementById("b3b")
      var botonnuevo = document.createElement("button")
      var siguiente = document.getElementById("foto33")
      botonnuevo.innerHTML = "Disco"
      botonnuevo.id = "b3"
      botonnuevo.className = "first"
      botonnuevo.onclick = function (){cambiarImagenes3()};
      boton.parentNode.replaceChild(botonnuevo, boton)
      for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = siguiente.src;
      imagen.id = ("foto" + i)
    } 
      }
    boton.parentNode.replaceChild(botonnuevo, boton)
    var delay = 100;
    for (var i = inicio; i <= fin; i++) {
      (function (i){
        setTimeout(function (){
          var imagen = document.getElementById("foto" + i);
          imagen.src = "d.svg";
          imagen.id = ("foto" + i)
        }, delay);
        delay += 100;
      })(i);
    }}
  function cambiarImagenes4() {
    var inicio = 1; 
    var fin = 46; 
    var botonfinal = document.createElement("button");
    botonfinal.textContent = "ABAJO";
    var boton = document.getElementById("b4")
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Universidad"
    botonnuevo.id = "b4b"
    botonnuevo.className = "second"
    botonnuevo.style.backgroundColor= "#557FF1";
    botonnuevo.style.color="White"
    botonnuevo.onclick = function () {
      var inicio = 1; 
      var fin = 48; 
      var boton = document.getElementById("b4b")
      var botonfinal = document.getElementById("b5")
      var botonnuevo = document.createElement("button")
      var contento = document.getElementById("ultimo")
      var siguiente = document.getElementById("foto47")
      botonnuevo.innerHTML = "Universidad"
      botonnuevo.id = "b4"
      botonnuevo.className = "first"
      botonnuevo.onclick = function (){cambiarImagenes4()};
      boton.parentNode.replaceChild(botonnuevo, boton)
      for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = siguiente.src;
      imagen.id = ("foto" + i)}
      while (contento.firstChild) {
        contento.removeChild(contento.firstChild);
      }
    }
    var nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent="FLECHITA!!";
    var contento = document.getElementById("ultimo");
    var mujeres = document.getElementById("mujeres");
    var ante = document.getElementById("ante");
    mujeres.style.height="60vh";
    ante.style.height="7vh";
    contento.style.height="12vh";
    botonfinal.style.marginTop="10px";
    botonfinal.id="b5"
    contento.appendChild(nuevoparrafo);
    contento.appendChild(botonfinal);
    document.getElementById("b5").onclick = function() {
      window.location.href = "../Zoom/Main.html";
    };
    var delay = 100;
    for (var i = inicio; i <= fin; i++) {
      (function (i){
        setTimeout(function (){
          var imagen = document.getElementById("foto" + i);
          imagen.src = "e.svg";
          imagen.id = ("foto" + i)
        }, delay);
        delay += 100;
      })(i);
      }
    boton.parentNode.replaceChild(botonnuevo, boton)
  }   

 function porcentaje1() {
  // Crear el nuevo botón
  var nuevoBoton = document.createElement("button");
  nuevoBoton.innerHTML = "50%"
  nuevoBoton.id="boton1";
  nuevoBoton.className="numero"

  // Agregar el nuevo botón al contenedor
  var botonExistente = document.getElementById("b1");
  var contenedor= document.getElementById("todas_inseguridades")
  contenedor.appendChild(nuevoBoton);
}
function porcentaje2() {
  var boton1 = document.getElementById("boton1");
  // Crear el nuevo botón
  var nuevoBoton = document.createElement("button");
  nuevoBoton.innerHTML = "75%";
  nuevoBoton.id="boton2"
  nuevoBoton.className="numero"

  var padreboton= boton1.parentNode
  // Agregar el nuevo botón al contenedor
 
  padreboton.replaceChild(nuevoBoton, boton1)
}
function porcentaje3() {
  var boton1 = document.getElementById("boton2");
  // Crear el nuevo botón
  var nuevoBoton = document.createElement("button");
  nuevoBoton.innerHTML = "32%";
  nuevoBoton.id="boton3"
  nuevoBoton.className="numero"

  var padreboton= boton1.parentNode
  // Agregar el nuevo botón al contenedor
 
  padreboton.replaceChild(nuevoBoton, boton2)
}
function porcentaje4() {
  var boton1 = document.getElementById("boton3");
  // Crear el nuevo botón
  var nuevoBoton = document.createElement("button");
  nuevoBoton.innerHTML = "48%";
  nuevoBoton.id="boton4"
  nuevoBoton.className="numero"

  var padreboton= boton1.parentNode
  // Agregar el nuevo botón al contenedor
 
  padreboton.replaceChild(nuevoBoton, boton3)
}