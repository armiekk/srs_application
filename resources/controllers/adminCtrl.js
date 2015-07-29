var admin = angular.module("adminCtrl", []);
admin.controller("titleCtrl", ["$scope",function($scope){
  $scope.title = [{id: "1", name: "นาย" , nameEng: "Mr.", gender: "ชาย"},
                  {id: "2", name: "นางสาว" , nameEng: "Ms.", gender: "หญิง"}];
  $scope.data = {id: "", name: "" , nameEng: "", gender: ""};

  $scope.selectData = function(row){
    $scope.data.id = $scope.title[row].id;
    $scope.data.name = $scope.title[row].name;
    $scope.data.nameEng = $scope.title[row].nameEng;
    $scope.data.gender = $scope.title[row].gender;
  };
}]);

admin.controller("universCtrl",["$scope", function(){

}]);

admin.controller("facultyCtrl",["$scope", function(){

}]);

admin.controller("majorCtrl",["$scope", function(){

}]);

admin.controller("sctypeCtrl",["$scope", function(){

}]);

admin.controller("activeCtrl",["$scope", function(){

}]);
