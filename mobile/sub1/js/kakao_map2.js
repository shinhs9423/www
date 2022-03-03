window.onload = function() {
    // 본사
    var container = document.getElementById('mapFirst');
    var options = {
        center: new daum.maps.LatLng(37.324312, 126.951037),
        level: 4
    };

    var map = new daum.maps.Map(container, options);

    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var markerPosition  = new daum.maps.LatLng(37.32431293341763, 126.95103765562475);
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });

    // 창원
    var container = document.getElementById('mapSecond');
    var options = {
        center: new daum.maps.LatLng(35.228835, 128.645835),
        level: 4
    };

    var map = new daum.maps.Map(container, options);

    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var markerPosition  = new daum.maps.LatLng(35.228835, 128.645835);
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });

    // 당진
    var container = document.getElementById('mapThird');
    var options = {
        center: new daum.maps.LatLng(36.986841, 126.731612),
        level: 4
    };

    var map = new daum.maps.Map(container, options);

    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var markerPosition  = new daum.maps.LatLng(36.986841, 126.731612);
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });

}

