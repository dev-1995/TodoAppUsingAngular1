const App=angular.module('Todo',[]);
App.controller('todoController',['$scope',function($scope){
  $scope.todoList = [{'title':'Default Todo','done':false}];
  $scope.AddTask = function(){
    $scope.todoList.push({'title':$scope.newtodo,'done':false});
    $scope.newtodo='';
  };
  $scope.DeleteTask = function(todo){
    $scope.todoList.splice($scope.todoList.indexOf(todo),1);
    console.log($scope.todoList);
    // console.log($scope.todoList.indexOf(todo,1));
  };
  $scope.ClearAll = function(){
    $scope.todoList.length=0;
    $scope.newtodo='';

  };
}]);
