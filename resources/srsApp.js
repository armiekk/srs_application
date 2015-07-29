var srsApp = angular.module("srsApp", ["ngRoute", "adminCtrl","myReg"]);
srsApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when("/find_title", {
    templateUrl: "../title-find.html",
    controller: "titleCtrl"
  }).
  when("/find_university", {
    templateUrl: "../university-find.html",
    controller: "universCtrl"
  }).
  when("/find_faculty", {
    templateUrl: "../faculty-find.html",
    controller: "facultyCtrl"
  }).
  when("/find_major", {
    templateUrl: "../major-find.html",
    controller: "majorCtrl"
  }).
  when("/find_scoretype", {
    templateUrl: "../scoretype-find.html",
    controller: "sctypeCtrl"
  }).
  when("/find_activities", {
    templateUrl: "../activities-find.html",
    controller: "activeCtrl"
  }).
  otherwise({
    redirectTo: "/"
  });
  $locationProvider.html5Mode(true);
}]);
