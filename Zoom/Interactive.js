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
    var fin = 44; 
    var boton = document.getElementById("b1")
    var botonnuevo = document.createElement("span")
    botonnuevo.innerHTML = ", de las cuales ... tienen sentencias"
    botonnuevo.id = "b2"
    botonnuevo.onclick = function () {cambiarImagenes2()};
    boton.innerHTML = " solo denuncian 44"
    boton.id="h1"
    boton.append(botonnuevo)
    for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = "b.svg";
      imagen.style.width="46px"
      imagen.style.paddingRight = "0px"
      imagen.style.paddingLeft="0px"
      imagen.style.marginLeft= "51.5px"
      imagen.style.marginRight="51.5px"
      imagen.style.marginTop = "25px";
      imagen.style.display = "block";
    }
    for (var i = fin+1; i <= 100; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.remove();
      }
      
  }
  function cambiarImagenes2() {
    var inicio = 1; 
    var fin = 25; 
    var boton =document.getElementById("b2")
    var botonnuevo = document.createElement("span")
    botonnuevo.innerHTML = " y ... multas"
    botonnuevo.id = "b3"
    botonnuevo.onclick = function () {cambiarImagenes3()};
    boton.innerHTML = ", de las cuales 25 tienen sentencias"
    boton.id="h1"
    boton.append(botonnuevo)
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "c.svg";
        imagen.style.width="46px"
        imagen.style.paddingRight = "0px"
        imagen.style.paddingLeft="0px"
        imagen.style.marginLeft= "126px"
        imagen.style.marginRight="126px"
        imagen.style.marginTop = "22px";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }
  function cambiarImagenes3() {
    var inicio = 1; 
    var fin = 12; 
    var boton =document.getElementById("b3")
    var botonnuevo = document.createElement("span")
    botonnuevo.innerHTML = ", pero tambien hay consecuencias fatales"
    botonnuevo.id = "b4"
    botonnuevo.onclick = function () {cambiarImagenes4()};
    boton.innerHTML = " y 12 multas"
    boton.id="h1"
    boton.append(botonnuevo)
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "d.svg";
        imagen.style.width="80px"
        imagen.style.paddingRight = "0px"
        imagen.style.paddingLeft="0px"
        imagen.style.marginLeft= "107px"
        imagen.style.marginRight="107px"
        imagen.style.marginTop = "25px";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }
  function cambiarImagenes4() {
    var inicio = 1; 
    var fin = 1; 
    var nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Evolución en el tiempo";
    var nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent="Veamos como hemos llegado a la situación actual";
    var contento = document.getElementById("ultimo");
    var mujeres = document.getElementById("mujeres");
    var ante = document.getElementById("ante");
    mujeres.style.height="40vh";
    ante.style.height="8vh";
    contento.style.height="31vh";
    nuevoBoton.style.marginTop="20px";
    nuevoBoton.id="b5"
    contento.appendChild(nuevoparrafo);
    contento.appendChild(nuevoBoton);
    document.getElementById("b5").onclick = function() {
      window.location.href = "../Gráfico/Gráfico.html";
    };
    
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "e.svg";
        imagen.style.width = "120px";
        imagen.style.paddingRight = "0px"
        imagen.style.marginLeft= "690px"
        imagen.style.marginTop = "90px";
        imagen.style.display = "block";
      }
      var boton =document.getElementById("b4")
      boton.innerHTML = ", lamentablemente, una mujer menos"
      boton.id="h1"
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }   