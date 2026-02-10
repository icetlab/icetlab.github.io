function initCollaboratorsMap() {
  var mapEl = document.getElementById("collaborators-map");
  if (!mapEl || typeof collaboratorsData === "undefined" || typeof L === "undefined") return;

  // Fix marker icon path when Leaflet CSS is loaded from CDN
  L.Icon.Default.imagePath = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/";

  var map = L.map(mapEl, { scrollWheelZoom: false });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Group collaborators by location (lat/lng)
  var groups = {};
  collaboratorsData.forEach(function (c) {
    var key = c.lat + "," + c.lng;
    if (!groups[key]) {
      groups[key] = {
        lat: c.lat,
        lng: c.lng,
        affiliation: c.affiliation,
        city: c.city,
        people: [],
      };
    }
    groups[key].people.push({ name: c.name, url: c.url });
  });

  // ICET-lab home marker (orange)
  var homeIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    shadowUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  var homeMarker = L.marker([57.6872, 11.9795], { icon: homeIcon })
    .bindTooltip("<strong>ICET-lab</strong><br>Gothenburg, Sweden")
    .bindPopup('<strong>ICET-lab</strong><br><em>Gothenburg, Sweden</em><br><a href="https://www.icet-lab.eu" target="_blank">icet-lab.eu</a>')
    .addTo(map);

  var markers = [homeMarker];
  Object.keys(groups).forEach(function (key) {
    var g = groups[key];
    var nameList = g.people.map(function (p) {
      return '<li><a href="' + p.url + '" target="_blank">' + p.name + "</a></li>";
    }).join("");
    var nameText = g.people.map(function (p) { return p.name; }).join(", ");

    var tooltipText = "<strong>" + g.affiliation + "</strong><br>" + nameText;
    var popupText =
      "<strong>" + g.affiliation + "</strong><br>" +
      "<em>" + g.city + "</em><ul style='margin:4px 0 0 16px;padding:0'>" +
      nameList + "</ul>";

    var marker = L.marker([g.lat, g.lng])
      .bindTooltip(tooltipText)
      .bindPopup(popupText)
      .addTo(map);

    markers.push(marker);
  });

  if (markers.length > 0) {
    var group = L.featureGroup(markers);
    map.fitBounds(group.getBounds(), { padding: [20, 20] });
  }
}

window.addEventListener("load", initCollaboratorsMap);
