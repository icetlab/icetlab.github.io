function initCollaboratorsMap() {
  var mapEl = document.getElementById("collaborators-map");
  if (!mapEl || typeof collaboratorsData === "undefined" || typeof L === "undefined") return;

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
        names: [],
      };
    }
    groups[key].names.push(c.name);
  });

  var markers = [];
  Object.keys(groups).forEach(function (key) {
    var g = groups[key];
    var nameList = g.names.map(function (n) {
      return "<li>" + n + "</li>";
    }).join("");

    var tooltipText = "<strong>" + g.affiliation + "</strong><br>" + g.names.join(", ");
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
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

// Use the same pattern as leaflet-setup.js
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    initCollaboratorsMap();
  }
});
// Also handle case where readyState is already complete
if (document.readyState === "complete") {
  initCollaboratorsMap();
}
