// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap, marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 30.2672, lng: -97.7431 },
    mapTypeId: "roadmap",
  });
  /*marker = new google.maps.Marker({
    position: { lat: 30.2672, lng: -97.7431 },
    map: map,
    title:"Hello World!"
  });*/
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    opacity: 1,
    radius: 20
  });

  //marker.setMap(map)
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];
  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

// Heatmap data
function getPoints() {
  var query_data = JSON.parse(document.getElementById("query-data").dataset.geocode);
  data = query_data.data.map(lat_lng => new google.maps.LatLng(`${lat_lng.lat}`,`${lat_lng.lng}`));
  console.log(query_data.data)
  return data
}

