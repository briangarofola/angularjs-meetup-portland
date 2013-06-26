angular.module('di')
	.value('gitConfig', {
		baseUrl: 'https://api.github.com/repos',
		user: 'angular',
		repository: 'angular.js'
	})
	.service('gitService', function($http, $q, gitConfig){
	  this.getCommits = function(){
		  var url = gitConfig.baseUrl + '/' + gitConfig.user + '/' + gitConfig.repository + '/commits';
		  var promise = $http.get(url).then(function(response){
		  	return response.data;
		  });
		  return promise;
	  };
	});