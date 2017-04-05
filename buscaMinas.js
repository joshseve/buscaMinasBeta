var mostrarNumero=document.getElementsByClassName("numero")
  for (var i=0; i<mostrarNumero.length; i++){
    mostrarNumero[i].addEventListener("click", ponerNumero)
  }

function ponerNumero(){
  this.innerText=this.value;
}

var mostrarColor=document.getElementsByClassName("color")
  for (var i=0; i<mostrarColor.length; i++){
    mostrarColor[i].addEventListener("click", ponerColor)
  }

  function ponerColor(){
    this.style.backgroundColor="yellow"
  }

  var mostrarBomba=document.getElementsByClassName("bomba")
    for (var i=0; i<mostrarBomba.length; i++){
      mostrarBomba[i].addEventListener("click", ponerBomba)
    }

    function ponerBomba(){
      var imgBomba = document.createElement("img");
      imgBomba.src="bom.jpeg";
      imgBomba.style="width:20px"
      this.appendChild(imgBomba);
      gameOver();
    }


var iniciaNuevo=document.getElementById("iniciaNuevo")
  iniciaNuevo.addEventListener("click", iniciarPartida);

function iniciarPartida(){
  location.reload();
}

function gameOver(){
  var seTermino=document.getElementsByTagName("button");
  for (var i=0; i<seTermino.length; i++){
    seTermino[i].disabled=true;
  }
}
