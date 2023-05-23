var lastButtonClicked = '';


function changeNumbers(button) { //Se plantea la funcion changeNumbers, guardando la variable del ultimo boton que fue seleccionado, lo que se utilizará para entrada para la funcion showInfo
    lastButtonClicked = button;
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
  
    var targetNumbers; // Para cada boton se definen los valores que tomaran las denuncias acomuladas, sentencias acomuladas y femicidios acomulados al año correspondiente
    if (button === 'A') { 
      targetNumbers = [0, 0, 0];
    } else if (button === 'B') {
      targetNumbers = [4928, 508, 44];
    } else if (button === 'C') {
      targetNumbers = [8823, 821, 86];
    } else if (button === 'D') {
      targetNumbers = [13412, 1145, 132];
    } else if (button === 'E') {
      targetNumbers = [19767, 1452, 175];
    } else if (button === 'F') {
      targetNumbers = [25949, 1787, 219];
    } 
  //Valores en algunas situaciones no realizan suma exactamente correcta
    animateNumber(box1, targetNumbers[0]);
    animateNumber(box2, targetNumbers[1]);
    animateNumber(box3, targetNumbers[2]);
  }
  
  function animateNumber(element, targetNumber) { //La funcion animateNumber fue obtenida de ChatGPT. Recibe como variables los numeros a los cuales va a cambiar la cifra y obtiene el numero presente para generar el cambio con el efecto "contador"
    var currentNumber = parseInt(element.innerHTML);
    var increment = (targetNumber - currentNumber) / 100;
    var counter = setInterval(function() {
      currentNumber += increment;
      element.innerHTML = Math.round(currentNumber);
      if (increment > 0 && currentNumber >= targetNumber) {
        clearInterval(counter);
      } else if (increment < 0 && currentNumber <= targetNumber) {
        clearInterval(counter);
      }
    }, 10);
  }
  
  function changeImage(button) { // La funcion cambia la foto que se visualiza en la pantalla. Recibe como input el boton que selecciona el usuario y modifica la variable que indica que imagen mostrar
    var image = document.getElementById('image');
    var imagePath;
  
    if (button === 'A') {
      imagePath = 'Entero-17.png';
    } else if (button === 'B') {
      imagePath = 'Entero-18.png';
    } else if (button === 'C') {
      imagePath = 'Entero-19.png';
    } else if (button === 'D') {
      imagePath = 'Entero-20.png';
    } else if (button === 'E') {
      imagePath = 'Entero-21 (1).png';
    } else if (button === 'F') {
      imagePath = 'Entero.png';
    } 
  
    image.style.opacity = 0; // Transicion de la imagen de la linea 62 a la 67 fue obtenida de ChatGPT
    setTimeout(function() {
      image.src = imagePath;
      image.style.opacity = 1; 
    }, 500);
  }

  function changePosicion(button) { //La funcion modifica la zona en donde si es colacado el curso, de despliega el cuadro con texto. El area queda definida como un rectangulo donde sus vertices no consecutivos quedan definidos por dos pares de puntos (x1,y1,x2,x2)
    var area = document.querySelector('area');
  
    if (button === 'A') {
      area.coords = "100,60,135,300";
    } else if (button === 'B') {
      area.coords = "180,60,195,300";
    } else if (button === 'C') {
      area.coords = "340,60,355,300";
    } else if (button === 'D') {
      area.coords = "495,60,520,300";
    } else if (button === 'E') {
      area.coords = "670,60,690,300";
    } else if (button === 'F') {
      area.coords = "760,60,770,300";
    }
  }
  
  function getInfoText(button) { // Se plantea la funcion que retornada la informacion del año correspondiente. 
    if (button === 'A') {
      return "Creacion del Ministerio de la Mujer";
    } else if (button === 'B') {
      return "Caso Muriel Mazuelos";
    } else if (button === 'C') {
      return "Caso Fernanda Maciel";
    } else if (button === 'D') {
      return "Ley N° 21.212: Modifica la tipificación del Femidicio";
    } else if (button === 'E') {
      return "Ley N° 18.216: Ley Gabriela";
    } else if (button === 'F') {
      return "Casos Antonia Parra y Ambar Cornejo";
    } else if (button === 'G') {
      return "Información de 2022";
    } else {return "Creacion del Ministerio de la Mujer"}
  }
  
  function showInfo(info) { // Hace aparecer la informacion si es que el cursor esta en la zona indicada. Utiliza la funcion anterior para determinar el texto que debe mostrar.
    var infoBox = document.getElementById("info-box");
    infoBox.innerHTML = getInfoText(lastButtonClicked);
    infoBox.style.display = "block";
  }
  
  function hideInfo() { // Hace desaparecer la información en el caso de que el cursor salga de la zona indicada
    var infoBox = document.getElementById("info-box");
    infoBox.style.display = "none";
  }
  function cambiarColor1() {
    var boton1 = document.getElementById("box1");
    boton1.style.backgroundColor = "#c879ff";
    var boton2 = document.getElementById("box2");
    boton2.style.backgroundColor = "#c879ff";
    var boton3 = document.getElementById("box3");
    boton3.style.backgroundColor = "#c879ff";
    
  }
  function cambiarColor2() {
    var boton1 = document.getElementById("box1");
    boton1.style.backgroundColor = "#AC00FF";
    var boton2 = document.getElementById("box2");
    boton2.style.backgroundColor = "#AC00FF";
    var boton3 = document.getElementById("box3");
    boton3.style.backgroundColor = "#AC00FF";
    
  }
  function cambiarColor3() {
    var boton1 = document.getElementById("box1");
    boton1.style.backgroundColor = "#5A269C";
    var boton2 = document.getElementById("box2");
    boton2.style.backgroundColor = "#5A269C";
    var boton3 = document.getElementById("box3");
    boton3.style.backgroundColor = "#5A269C";
    
  }
  function cambiarColor4() {
    var boton1 = document.getElementById("box1");
    boton1.style.backgroundColor = "#601271";
    var boton2 = document.getElementById("box2");
    boton2.style.backgroundColor = "#601271";
    var boton3 = document.getElementById("box3");
    boton3.style.backgroundColor = "#601271";
    
  }
  function cambiarColor5() {
    var boton1 = document.getElementById("box1");
    boton1.style.backgroundColor = "#450553";
    var boton2 = document.getElementById("box2");
    boton2.style.backgroundColor = "#450553";
    var boton3 = document.getElementById("box3");
    boton3.style.backgroundColor = "#450553";
    
  }
  function showAdditionalInfo(text) {
    document.getElementById("additional-info-box").style.display = "block";
    document.getElementById("additional-info-box").textContent = text; // Establecer el texto deseado
  }

  function hideAdditionalInfo() {
    document.getElementById("additional-info-box").style.display = "none";
  }


  