function cambiarImagenes1() {
    var inicio = 1; 
    var fin = 50; 
    var boton = document.getElementById("b1")
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Sentencias"
    botonnuevo.id = "b2"
    botonnuevo.onclick = function () {cambiarImagenes2()};
    boton.parentNode.replaceChild(botonnuevo, boton)
    for (var i = inicio; i <= fin; i++) {
      var imagen = document.getElementById("foto" + i);
      imagen.src = "b.svg";
      imagen.style.width = "12vb";
      imagen.style.paddingRight = "0px"
      imagen.style.marginLeft="54px"
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
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Multas"
    botonnuevo.id = "b3"
    botonnuevo.onclick = function () {cambiarImagenes3()};
    boton.parentNode.replaceChild(botonnuevo, boton)
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "c.svg";
        imagen.style.width = "12vb";
        imagen.style.paddingRight = "0px"
        imagen.style.marginLeft="175px"
        imagen.style.marginTop = "25px";
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
    var botonnuevo = document.createElement("button")
    botonnuevo.innerHTML = "Femicidios"
    botonnuevo.id = "b4"
    botonnuevo.onclick = function () {cambiarImagenes4()};
    boton.parentNode.replaceChild(botonnuevo, boton)
    for (var i = inicio; i <= fin; i++) {
        var imagen = document.getElementById("foto" + i);
        imagen.src = "d.svg";
        imagen.style.width = "12vb";
        imagen.style.paddingRight = "0px"
        imagen.style.marginLeft="175px"
        imagen.style.marginTop = "85px";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }
  function cambiarImagenes4() {
    var inicio = 1; 
    var fin = 5; 
    var boton =document.getElementById("b4")
    boton.parentNode.removeChild(boton);
    var nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Siguiente HTML";
    var nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent="En el siguiente gráfico veamos si esto ha cambiado";
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
        imagen.style.width = "20vb";
        imagen.style.paddingRight = "0px"
        imagen.style.marginLeft="125px"
        imagen.style.marginTop = "25vh";
        imagen.style.display = "block";
      }
      for (var i = fin+1; i <= 100; i++) {
          var imagen = document.getElementById("foto" + i);
          imagen.remove();
        }
  }   