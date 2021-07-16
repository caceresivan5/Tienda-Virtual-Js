//para modificar el DOM 
// js Vanilla..document.getElementById("tituloProductos").style.color:"red";

//jQuery
//para asegurarme que se carga todo MENOS las imagenes UTILIZO ...
$(document).ready(function(){

  $('#tituloProductos').css({background:'black', color:'white', 'padding':'2rem'})

});

//para asegurarme que se carga TODO UTILIZO ...

$(window).ready( ()=>{
  console.log("SE CARGO TODO...");
})
  //PREPEND carga como el primer hijo
  // modificando el css del footer
  $(".derechos").prepend("<p>Extra Sport 2021 ©  - Todos los Derechos Reservados - </p>");
  $(".derechos p").css({background:'black', color:'white', 'font-size':'1.5rem', 'text-align':'center', 'padding':'2rem'});

  //APPEND carga como el ultimo hijo

  $(".redesSociales").append(`
       <div >
        <img src="img/botoninstagram.gif" width="60%"  alt=""></img>
      </div>
      <div >
        <img src="img/botonFace.gif" width="60%"  alt=""></img>
      </div>
      <div >
        <img src="img/botonWhat.gif" width="60%"  alt=""></img>
      </div>`);
      $(".redesSociales").css({ 'display':'flex'});

