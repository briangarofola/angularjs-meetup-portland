describe("Unit Tests: GitController", function () {    
    var controller, scope;

	  beforeEach(module('di', 'testData'));

    beforeEach(inject(function ($rootScope, $controller) {
         scope = $rootScope.$new();
         controller = $controller('GitController', {$scope: scope});
    }));

    it("should have a controller", function(){
    	expect(controller).toBeDefined();
    });

    it("should have 3 commits", inject(function($injector){
    	var gitService = $injector.get('gitService');
      var threeCommits = $injector.get('threeCommits');
      spyOn(gitService,'getCommits').andReturn(threeCommits);
      scope.fetch();
	    expect(scope.commits.length).toBe(3);
    }));

});