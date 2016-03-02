function initialize(x, y, id, name) {
  var latlng = new google.maps.LatLng(x, y);
  var myOptions = {
    zoom: 18, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById(id), myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: name
  });
}
