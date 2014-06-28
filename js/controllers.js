/**
 * Created by mike-mac on 7/2/14.
 */

var demoApp = angular.module('demoApp', []);

demoApp.controller('DemoListCtrl', function ($scope) {
    $scope.title = 'Example MVC - Basic Demo';
    $scope.sub_title = 'JavaScript MV* Patterns';
    $scope.avantica= 'Avantica Technologies';
    $scope.patterns = [
        {'name': 'MVC',
            'snippet': 'MVC is an architectural design pattern that encourages improved application organization through a separation of concerns'},
        {'name': 'MVP',
            'snippet': 'Model-view-presenter (MVP) is a derivative of the MVC design pattern which focuses on improving presentation logic. It originated at a company named Taligent in the early 1990s while they were working on a model for a C++ CommonPoint environment.'},
        {'name': 'MVVM',
            'snippet': 'MVVM (Model View ViewModel) is an architectural pattern based on MVC and MVP, which attempts to more clearly separate the development of user-interfaces (UI) from that of the business logic and behavior in an application.'}
    ];
});
