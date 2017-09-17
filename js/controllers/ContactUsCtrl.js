app.controller('ContactUsCtrl', ['$scope',  function ($scope) {

    this.initialize = function () {
        var marker;
        var vrsloc = new google.maps.LatLng(12.96713, 80.13305);
        var myOptions = {
            zoom: 12,
            center: vrsloc,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

        var marker = new google.maps.Marker({
            position: vrsloc,
            map: map,
            title: "VRS Leathers Pvt. Ltd."
        });
    };
    this.initialize();
    
}]);