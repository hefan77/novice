'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yomanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(MainCtrl.awesomeThings.length).toBe(3);
	expect(scope.todos.length).toBe(0);
  });
  it('should add items to the list',function(){
	scope.todo = 'Test 1';
	scope.addTodo();
	expect(scope.todos.length).toBe(1);
  });
  it('should remove items to list',function(){
	scope.todo = 'Test 1';
	scope.addTodo();
	scope.removeTodo(0);
	expect(scope.todos.length).toBe(0);
  });
});
