describe("Unit Tests: Git Service", function(){

	var gitService, $httpBackend, threeCommits;
	
	beforeEach(module('di', 'testData'));

	beforeEach(inject(function($injector){
		gitService = $injector.get('gitService'); 
		threeCommits = $injector.get('threeCommits');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it("should have a gitService", function(){
		expect(gitService).toBeDefined();
	});

	it("should call the GitHub API and get 3 commits back", function(){
		$httpBackend.expectGET(/api.github.com/).respond(threeCommits);
		gitService.getCommits().then(function(commits){
			expect(commits.length).toBe(threeCommits.length);
		});
		$httpBackend.flush();
	});
});