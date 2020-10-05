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

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(30.285738, -97.741618),
    new google.maps.LatLng(30.2736394, -97.7374293),
    new google.maps.LatLng(37.0443037, -95.6020607),
    new google.maps.LatLng(30.2697715, -97.7308101),
    new google.maps.LatLng(30.269914, -97.741869),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.2677179, -97.7666594),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(30.269235, -97.739695),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2586503, -97.7484795),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.92384449999999, -95.3119361),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.92384449999999, -95.3119361),
    new google.maps.LatLng(30.26917499999999, -97.728562),
    new google.maps.LatLng(36.4345765, -99.38912069999999),
    new google.maps.LatLng(30.2606108, -97.7528576),
    new google.maps.LatLng(30.2606108, -97.7528576),
    new google.maps.LatLng(30.2736394, -97.7374293),
    new google.maps.LatLng(30.269914, -97.741869),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.2335503, -97.75859489999999),
    new google.maps.LatLng(30.2582042, -97.73968889999999),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.262919, -97.7576709),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.285738, -97.741618),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.2586503, -97.7484795),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.2335503, -97.75859489999999),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.92384449999999, -95.3119361),
    new google.maps.LatLng(30.260252, -97.7510921),
    new google.maps.LatLng(30.285738, -97.741618),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.280545, -97.737318),
    new google.maps.LatLng(30.2602953, -97.71861039999999),
    new google.maps.LatLng(30.2602953, -97.71861039999999),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.269522, -97.75262599999999),
    new google.maps.LatLng(30.92384449999999, -95.3119361),
    new google.maps.LatLng(30.260252, -97.7510921),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
    new google.maps.LatLng(36.4345765, -99.38912069999999),
    new google.maps.LatLng(30.2799846, -97.75867149999999),
    new google.maps.LatLng(30.280545, -97.737318),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.267068, -97.739335),
    new google.maps.LatLng(30.269522, -97.75262599999999),
    new google.maps.LatLng(30.272213, -97.73871799999999),
    new google.maps.LatLng(30.269914, -97.741869),
    new google.maps.LatLng(30.269522, -97.75262599999999),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2645727, -97.7306302),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2335503, -97.75859489999999),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.269914, -97.741869),
    new google.maps.LatLng(30.2521511, -97.7487007),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(37.0325885, -95.6242683),
    new google.maps.LatLng(30.285738, -97.741618),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.269235, -97.739695),
    new google.maps.LatLng(30.2645727, -97.7306302),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.280545, -97.737318),
    new google.maps.LatLng(30.272213, -97.73871799999999),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.2335503, -97.75859489999999),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.2427204, -97.8106504),
    new google.maps.LatLng(30.2606108, -97.7528576),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.2586503, -97.7484795),
    new google.maps.LatLng(30.2586503, -97.7484795),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.280545, -97.737318),
    new google.maps.LatLng(30.280545, -97.737318),
    new google.maps.LatLng(30.2838239, -97.7419299),
    new google.maps.LatLng(30.2838239, -97.7419299),
    new google.maps.LatLng(30.2736394, -97.7374293),
    new google.maps.LatLng(30.2736394, -97.7374293),
    new google.maps.LatLng(29.8275, -97.9844444),
    new google.maps.LatLng(30.2602953, -97.71861039999999),
    new google.maps.LatLng(30.2697715, -97.7308101),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.2427204, -97.8106504),
    new google.maps.LatLng(30.267068, -97.739335),
    new google.maps.LatLng(30.25853709999999, -97.7441577),
    new google.maps.LatLng(30.255261, -97.7163382),
    new google.maps.LatLng(30.2690358, -97.7463066),
    new google.maps.LatLng(47.61598069999999, -122.22469),
    new google.maps.LatLng(30.2427204, -97.8106504),
    new google.maps.LatLng(40.0010204, -75.8069082),
    new google.maps.LatLng(30.269235, -97.739695),
    new google.maps.LatLng(30.2677869, -97.7473311),
    new google.maps.LatLng(30.2643819, -97.76747739999999),
    new google.maps.LatLng(30.2427204, -97.8106504),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.2597961, -97.7234017),
    new google.maps.LatLng(30.2606108, -97.7528576),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.2557809, -97.7398671),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.264439, -97.7570733),
    new google.maps.LatLng(30.285738, -97.741618),
    new google.maps.LatLng(30.2640024, -97.7709723),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2521511, -97.7487007),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2606108, -97.7528576),
    new google.maps.LatLng(30.2427204, -97.8106504),
    new google.maps.LatLng(30.26536189999999, -97.75597359999999),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.269235, -97.739695),
    new google.maps.LatLng(30.269235, -97.739695),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.260252, -97.7510921),
    new google.maps.LatLng(30.2736394, -97.7374293),
    new google.maps.LatLng(30.2838239, -97.7419299),
    new google.maps.LatLng(39.73932509999999, -104.9848069),
    new google.maps.LatLng(39.73932509999999, -104.9848069),
    new google.maps.LatLng(30.2600925, -97.7382928),
    new google.maps.LatLng(30.92384449999999, -95.3119361),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(36.115593, -97.06401),
    new google.maps.LatLng(30.267068, -97.739335),
    new google.maps.LatLng(30.2335503, -97.75859489999999),
    new google.maps.LatLng(25.451756, -100.9192538),
    new google.maps.LatLng(30.269522, -97.75262599999999),
    new google.maps.LatLng(41.5016667, -81.6982652),
    new google.maps.LatLng(35.3260023, -94.2396699),
    new google.maps.LatLng(30.2586503, -97.7484795),
    new google.maps.LatLng(40.0010204, -75.8069082),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(42.728594, -73.6895315),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2620469, -97.7614395),
    new google.maps.LatLng(30.2645292, -97.7444015),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
    new google.maps.LatLng(30.2670554, -97.74958769999999),
  ];
}