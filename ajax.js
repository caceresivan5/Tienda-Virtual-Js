//POST

/*$( document ).ready(function() {
    //Declaramos la url del API
    const APIURL = 'https://reqres.in/api/users?page=2' ; 
    //Declaramos la información a enviar
    const infoPost =  { nombre: "Ana", profesion: "Programadora" }
    //Agregamos un botón con jQuery
    $("#llamada").prepend('<button id="btn1">ENVIAR API</button>');
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => { 
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: infoPost,
            success: function(respuesta){
                $("#llamada").prepend(`<div>${respuesta.nombre}</div>`);

                console.log(respuesta);
            }
        });
    });
});
*/

//GET

let datos;


    $.get("https://reqres.in/api/users?page=2").done(function(resultado, estado){
        console.log(estado);
        if(estado == "success"){
            datos = resultado.data;
            datos.forEach(usuario => {
                $(".cardContactos").append(`

                <div class="sucursal">
                <div class="sucursalDetalle" style="font-weight: 700;"> ${usuario.first_name} ${usuario.last_name}</div> 
                <div class="sucursalDetalle">${usuario.email} </div>
                <div class="sucursalDetalle"> <img src="${usuario.avatar}"> </div>
                
                </div>
                
                `
                );
            });
        }
    });


