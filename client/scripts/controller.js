/**
 * Created by yester on 15/3/15.
 */

var videoListApp = angular.module('videoListApp', []);

videoListApp.controller('VideoListCtrl', function($scope) {

    $scope.videos = [
        {"code": "code -1",
            "title": "title -1",
        "releasedDate":"2011-01-01"},
        {"code": "code -2",
            "title": "title -2",
            "releasedDate":"2012-01-01"},
        {"code": "code -3",
            "title": "title -3",
            "releasedDate":"2013-01-01"}
    ];
});