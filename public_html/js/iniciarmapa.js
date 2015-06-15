


var map; //la declaro global para que pueda ser accedida por todas las funciones


function iniciarmapa() {
        
        //configuro opciones del mapa
        var mapOptions = {
          center: new google.maps.LatLng(-34.920581, -57.953728),  //la plata
          zoom: 14,	//nivel de zoom
          mapTypeId: google.maps.MapTypeId.ROADMAP  //tipo de mapa
        };
        
        //creo el mapa
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);


}