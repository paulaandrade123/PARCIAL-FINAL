document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([4.6985, -74.1173], 15);
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

    var  map2 = L.map("map2").setView([4.6985, -74.1173], 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map2);

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
    }).addTo(map2).bindPopup("🗺️ Barrio Álamos Norte");

    var polygonGeoJSON = turf.polygon([alamosNortePolygon]);
    var area = turf.area(polygonGeoJSON);
    document.getElementById("area").textContent = area.toFixed(3);
    
    var line = turf.lineString(alamosNortePolygon);
    var length = turf.length(line, { units: "meters" }) * 1000; // Convertir a metros
    document.getElementById("perimetro").textContent = length.toFixed(2);
    
    var centroide = turf.centroid(polygonGeoJSON);
    document.getElementById("centroide").textContent = centroide.geometry.coordinates.reverse().join(", ");
    
    document.getElementById("vertices").textContent = alamosNortePolygon.map(coord => coord.join(", ")).join(" | ");

    let btnNVDI= document.getElementById("btnNVDI");

btnNVDI.addEventListener('click',
    async ()=>{
        let response= await fetch("NVDI.geojson");
        let datos= await response.json();

        L.geoJSON(
            datos,
            {
                pointToLayer: (feature, latlong)=>{                    
                    return L.circleMarker(latlong,{
                        radius:5,
                        fillColor:'green',
                        weight:1,
                        opacity:1,
                        fillOpacity: 0.5,
                    })
                }
            }
        ).addTo(map2);
    }
)




    
});
