angular.module('di')
	.service('gitConfig', function(){ 
		this.baseUrl =  'https://api.github.com/repos';
		this.user = 'angular';
		this.repository = 'angular.js';
	  	//this.url = 'https://api.github.com/repos/angular/angular.js/commits';
	})
	.service('gitService', function($http, gitConfig){
	  this.getCommits = function(){
	  	var url = gitConfig.baseUrl + '/' + gitConfig.user + '/' + gitConfig.repository + '/commits';
	  	var promise = $http.get(url).then(function(response){
	    	return response.data;
	    });
	    return promise;
	  }
	});