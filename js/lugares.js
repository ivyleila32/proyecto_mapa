lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
    /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
    página (las direcciones ingresables por el usuario).
    Para esto creá un círculo con radio de 20000 metros y usalo para fijar
    los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
    var circulo = new google.maps.Circle( {
      center: posicionCentral,
      radius: 20000
      });
      
    var autocompletes = ['direccion', 'desde', 'hasta', 'agregar'];
    autocompletes.forEach(function(id) {
      var autoDireccion = new google.maps.places.Autocomplete(document.getElementById(id));
      autoDireccion.setBounds(circulo.getBounds());
    });
  
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var tipoLugar = document.getElementById("tipoDeLugar").value;
    var radioBusqueda = document.getElementById("radio").value;
    var busqueda = {
      radius: radioBusqueda,
      type: tipoLugar,
      location: posicion
    }

  
  servicioLugares.nearbySearch(busqueda,function(resultados,status){
    marcadorModulo.marcarLugares(resultados,status);
  });
  
  var marcadorLatLng = new google.maps.latLng;
  }
  return {
    inicializar,
    buscarCerca
  }
})()
