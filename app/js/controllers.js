angular.module('di')
	.controller('GitController', function($scope, gitService){
		$scope.commits = [];
		$scope.fetch = function(){
	 		$scope.commits = gitService.getCommits();
		}
	});