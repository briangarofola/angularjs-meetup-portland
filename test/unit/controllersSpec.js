describe("Unit Tests: GitController", function () {
    
    var controller, scope;

	beforeEach(module("di"));

    beforeEach(inject(function ($rootScope, $controller) {
         scope = $rootScope.$new();
         controller = $controller('GitController', {$scope: scope});// , gitService: mockGitService });
    }));

    it("should have a controller", function(){
    	expect(controller).toBeDefined();
    });

    it("should have 3 commits", inject(function($injector){
    	gitService = $injector.get('gitService');
	    spyOn(gitService,'getCommits').andCallFake(function(){
	    	return someCommits;
	    });
	    scope.fetch();
	    expect(scope.commits.length).toBe(3);
    }));

    var someCommits = [{
    "sha": "097947fd3bd280fcf621e36154a9d4f82896ff01",
    "commit": {
      "author": {
        "name": "Pete Bacon Darwin",
        "email": "pete@bacondarwin.com",
        "date": "2013-06-20T14:22:35Z"
      },
      "committer": {
        "name": "Pete Bacon Darwin",
        "email": "pete@bacondarwin.com",
        "date": "2013-06-20T14:22:35Z"
      },
      "message": "refactor(angular.bootstrap): rename internal function",
      "tree": {
        "sha": "ca808f0a1c5af497d1910b3adaf9af5f8eceaa6b",
        "url": "https://api.github.com/repos/angular/angular.js/git/trees/ca808f0a1c5af497d1910b3adaf9af5f8eceaa6b"
      },
      "url": "https://api.github.com/repos/angular/angular.js/git/commits/097947fd3bd280fcf621e36154a9d4f82896ff01",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/angular/angular.js/commits/097947fd3bd280fcf621e36154a9d4f82896ff01",
    "html_url": "https://github.com/angular/angular.js/commit/097947fd3bd280fcf621e36154a9d4f82896ff01",
    "comments_url": "https://api.github.com/repos/angular/angular.js/commits/097947fd3bd280fcf621e36154a9d4f82896ff01/comments",
    "author": {
      "login": "petebacondarwin",
      "id": 15655,
      "avatar_url": "https://secure.gravatar.com/avatar/9a952bcf6fd701bb1303cd9f64cf9620?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "9a952bcf6fd701bb1303cd9f64cf9620",
      "url": "https://api.github.com/users/petebacondarwin",
      "html_url": "https://github.com/petebacondarwin",
      "followers_url": "https://api.github.com/users/petebacondarwin/followers",
      "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
      "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
      "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
      "repos_url": "https://api.github.com/users/petebacondarwin/repos",
      "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
      "type": "User"
    },
    "committer": {
      "login": "petebacondarwin",
      "id": 15655,
      "avatar_url": "https://secure.gravatar.com/avatar/9a952bcf6fd701bb1303cd9f64cf9620?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "9a952bcf6fd701bb1303cd9f64cf9620",
      "url": "https://api.github.com/users/petebacondarwin",
      "html_url": "https://github.com/petebacondarwin",
      "followers_url": "https://api.github.com/users/petebacondarwin/followers",
      "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
      "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
      "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
      "repos_url": "https://api.github.com/users/petebacondarwin/repos",
      "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
      "type": "User"
    },
    "parents": [
      {
        "sha": "3621896e9d7dfdba14ae0e554037868d7cbca3c8",
        "url": "https://api.github.com/repos/angular/angular.js/commits/3621896e9d7dfdba14ae0e554037868d7cbca3c8",
        "html_url": "https://github.com/angular/angular.js/commit/3621896e9d7dfdba14ae0e554037868d7cbca3c8"
      }
    ]
  },
  {
    "sha": "3621896e9d7dfdba14ae0e554037868d7cbca3c8",
    "commit": {
      "author": {
        "name": "NimaVaziri",
        "email": "vaziri.nima@gmail.com",
        "date": "2013-06-20T13:25:11Z"
      },
      "committer": {
        "name": "Pete Bacon Darwin",
        "email": "pete@bacondarwin.com",
        "date": "2013-06-20T13:39:16Z"
      },
      "message": "docs(cookbook/helloworld): display \"World\" if no name is entered",
      "tree": {
        "sha": "7b760a681663fc7d98785c9a7d12c558a3434e38",
        "url": "https://api.github.com/repos/angular/angular.js/git/trees/7b760a681663fc7d98785c9a7d12c558a3434e38"
      },
      "url": "https://api.github.com/repos/angular/angular.js/git/commits/3621896e9d7dfdba14ae0e554037868d7cbca3c8",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/angular/angular.js/commits/3621896e9d7dfdba14ae0e554037868d7cbca3c8",
    "html_url": "https://github.com/angular/angular.js/commit/3621896e9d7dfdba14ae0e554037868d7cbca3c8",
    "comments_url": "https://api.github.com/repos/angular/angular.js/commits/3621896e9d7dfdba14ae0e554037868d7cbca3c8/comments",
    "author": {
      "login": "NimaVaziri",
      "id": 1898480,
      "avatar_url": "https://secure.gravatar.com/avatar/11cea9f0ac19c1141c1f237918532a72?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "11cea9f0ac19c1141c1f237918532a72",
      "url": "https://api.github.com/users/NimaVaziri",
      "html_url": "https://github.com/NimaVaziri",
      "followers_url": "https://api.github.com/users/NimaVaziri/followers",
      "following_url": "https://api.github.com/users/NimaVaziri/following{/other_user}",
      "gists_url": "https://api.github.com/users/NimaVaziri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/NimaVaziri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/NimaVaziri/subscriptions",
      "organizations_url": "https://api.github.com/users/NimaVaziri/orgs",
      "repos_url": "https://api.github.com/users/NimaVaziri/repos",
      "events_url": "https://api.github.com/users/NimaVaziri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/NimaVaziri/received_events",
      "type": "User"
    },
    "committer": {
      "login": "petebacondarwin",
      "id": 15655,
      "avatar_url": "https://secure.gravatar.com/avatar/9a952bcf6fd701bb1303cd9f64cf9620?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "9a952bcf6fd701bb1303cd9f64cf9620",
      "url": "https://api.github.com/users/petebacondarwin",
      "html_url": "https://github.com/petebacondarwin",
      "followers_url": "https://api.github.com/users/petebacondarwin/followers",
      "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
      "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
      "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
      "repos_url": "https://api.github.com/users/petebacondarwin/repos",
      "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
      "type": "User"
    },
    "parents": [
      {
        "sha": "8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
        "url": "https://api.github.com/repos/angular/angular.js/commits/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
        "html_url": "https://github.com/angular/angular.js/commit/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3"
      }
    ]
  },
  {
    "sha": "8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
    "commit": {
      "author": {
        "name": "Pete Bacon Darwin",
        "email": "pete@bacondarwin.com",
        "date": "2013-06-20T12:59:46Z"
      },
      "committer": {
        "name": "Pete Bacon Darwin",
        "email": "pete@bacondarwin.com",
        "date": "2013-06-20T13:13:16Z"
      },
      "message": "fix(Angular.js): don't crash on invalid query parameters",
      "tree": {
        "sha": "647bc3cf34d7ac98808518f4f98dc7175306c733",
        "url": "https://api.github.com/repos/angular/angular.js/git/trees/647bc3cf34d7ac98808518f4f98dc7175306c733"
      },
      "url": "https://api.github.com/repos/angular/angular.js/git/commits/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/angular/angular.js/commits/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
    "html_url": "https://github.com/angular/angular.js/commit/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3",
    "comments_url": "https://api.github.com/repos/angular/angular.js/commits/8264d08085adc2ab57f6598b9fc9f6e263c8b4f3/comments",
    "author": {
      "login": "petebacondarwin",
      "id": 15655,
      "avatar_url": "https://secure.gravatar.com/avatar/9a952bcf6fd701bb1303cd9f64cf9620?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "9a952bcf6fd701bb1303cd9f64cf9620",
      "url": "https://api.github.com/users/petebacondarwin",
      "html_url": "https://github.com/petebacondarwin",
      "followers_url": "https://api.github.com/users/petebacondarwin/followers",
      "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
      "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
      "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
      "repos_url": "https://api.github.com/users/petebacondarwin/repos",
      "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
      "type": "User"
    },
    "committer": {
      "login": "petebacondarwin",
      "id": 15655,
      "avatar_url": "https://secure.gravatar.com/avatar/9a952bcf6fd701bb1303cd9f64cf9620?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "9a952bcf6fd701bb1303cd9f64cf9620",
      "url": "https://api.github.com/users/petebacondarwin",
      "html_url": "https://github.com/petebacondarwin",
      "followers_url": "https://api.github.com/users/petebacondarwin/followers",
      "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
      "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
      "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
      "repos_url": "https://api.github.com/users/petebacondarwin/repos",
      "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
      "type": "User"
    },
    "parents": [
      {
        "sha": "a7908134cb22c8c1efb21f780d4a6efdfde2b78c",
        "url": "https://api.github.com/repos/angular/angular.js/commits/a7908134cb22c8c1efb21f780d4a6efdfde2b78c",
        "html_url": "https://github.com/angular/angular.js/commit/a7908134cb22c8c1efb21f780d4a6efdfde2b78c"
      }
    ]
  }];

});