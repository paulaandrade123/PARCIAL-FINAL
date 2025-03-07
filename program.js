document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([4.6985, -74.1173], 15);
    var trees = []; // Guardará los árboles cargados

    // Capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Polígono de Álamos Norte
    var alamosNortePolygon = [
        [4.7018, -74.1205],
        [4.7018, -74.1140],
        [4.6945, -74.1140],
        [4.6945, -74.1205]
    ];

    L.polygon(alamosNortePolygon, {
        color: "red",
        weight: 2,
        fillColor: "rgba(255, 0, 0, 0.3)",
        fillOpacity: 0.4
    }).addTo(map).bindPopup("🗺️ Barrio Álamos Norte");

   


    
});
