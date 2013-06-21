angular.module('di')
	.service('gitConfig', function(){ 
	  this.url = 'https://api.github.com/repos/angular/angular.js/commits';
	})
	.service('gitService', function($http, gitConfig){
	  this.getCommits = function(){
	    var promise = $http.get(gitConfig.url).then(function(response){
	    	return response.data;
	    });
	    return promise;
	  }
	});