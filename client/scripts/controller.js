/**
 * Created by yester on 15/3/15.
 */

var videoListApp = angular.module('videoListApp', []);

//videoListApp.controller('VideoListCtrl', function($scope, $http) {
//
//    $scope.videos = [
//        {"code": "code -1",
//            "title": "title -1",
//        "releasedDate":"2011-01-01"},
//        {"code": "code -2",
//            "title": "title -2",
//            "releasedDate":"2012-01-01"},
//        {"code": "code -3",
//            "title": "title -3",
//            "releasedDate":"2013-01-01"}
//    ];
//});

videoListApp.controller('VideoListCtrl', VideoListCtrl);

function VideoListCtrl($scope, $http){

    //$scope.formData = {};
    $http.get('http://localhost:3000/list').success(function(data) {
        $scope.videos = data;
        console.log(data);

    });


    //    $scope.videos = [
    //    {"video_code": "code -1", "video_title": "title -1", "video_released":"2011-01-01"},
    //    {"video_code": "code -2", "video_title": "title -2", "video_released":"2012-01-01"},
    //    {"video_code": "code -3", "video_title": "title -3", "video_released":"2013-01-01"}
    //];

}
VideoListCtrl.$inject =['$scope', '$http'];