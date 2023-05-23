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
//Las funciones generarimagen lo que harán será conseguir las fotos dentro del rango solicitado para que estas sean las que queden, mientras eliminan el resto para hacer un estilo de zoom
//Se trato de lograr un zoom como animación pero no nos dieron los recursos
function cambiarImagenes1() {
    var inicio = 1; 
    var fin = 44; 
    var boton = document.getElementById("b1")
    var botonnuevo = document.createElement("span")
    botonnuevo.innerHTML = ", de las cuales ___ denuncian"
    botonnuevo.id = "b2"
    botonnuevo.onclick = function () {cambiarImagenes2()};
    boton.innerHTML = " 44 han sufrido acoso"
    boton.id="h1"
    boton.append(botonnuevo)
    for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = "b.svg";
      imagen.style.width="46px"
      imagen.style.paddingRight = "0px"
      imagen.style.paddingLeft="0px"
      imagen.style.marginLeft= "49.5px"
      imagen.style.marginRight="49.5px"
      imagen.style.marginTop = "20px";
      imagen.style.display = "block";
    }
    for (var i = fin+1; i <= 100; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.remove();
      }
      
  }
  function cambiarImagenes2() {
    var inicio = 1; 
    var fin = 9; 
    var boton =document.getElementById("b2")
    var botonnuevo = document.createElement("span")
    botonnuevo.innerHTML = " y ___ terminan en sentencias"
    botonnuevo.id = "b3"
    botonnuevo.onclick = function () {cambiarImagenes3()};
    boton.innerHTML = ", de las cuales 9 denuncian"
    boton.id="h1"
    boton.append(botonnuevo)
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "c.svg";
        imagen.style.width="100px"
        imagen.style.paddingRight = "0px"
        imagen.style.paddingLeft="0px"
        imagen.style.marginLeft= "93px"
        imagen.style.marginRight="93px"
        imagen.style.marginTop = "60px";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }
  function cambiarImagenes3() {
    var inicio = 1; 
    var fin = 2; 
    var boton =document.getElementById("b3")  
    boton.innerHTML = " y 2 terminan en sentencias"
    boton.id="h1"
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "d.svg";
        imagen.style.width="180px"
        imagen.style.paddingRight = "0px"
        imagen.style.paddingLeft="0px"
        imagen.style.marginLeft= "272px"
        imagen.style.marginRight="272px"
        imagen.style.marginTop = "105px";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }
