function initMap() {
  // Cria o mapa centralizado no Brasil (caso não consiga pegar localização)
  var map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 15,
    center: { lat: -14.235, lng: -51.9253 }, // centro do Brasil
  });

  // Tenta pegar a localização do usuário
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Centraliza o mapa na posição do usuário
        map.setCenter(userPos);

        // Coloca marcador no usuário
        new google.maps.Marker({
          position: userPos,
          map: map,
          title: "Você está aqui!",
        });
      },
      function () {
        alert("Não foi possível obter sua localização.");
      }
    );
  } else {
    alert("Geolocalização não é suportada no seu navegador.");
  }
}
