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

  var markers = [];
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
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

window.addEventListener("load", initCollaboratorsMap);
