angular.module('starter.controllers', [])

    .controller('TabCtrl', function($scope, $state) {
        $scope.onSlideChanged = function onSlideChanged(index) {
            switch (index) {
                case 0 :
                    $state.go('tab.chats');
                    break;
                case 1 :
                    $state.go('tab.dash');
                    break;
                case 2 :
                    $state.go('tab.account');
                    break;
            }
        }
    })

    .controller('DashCtrl', function ($scope, $state) {
        $scope.swipes = {};

        $scope.swipes.swipeLeft = function() {
            $state.go('tab.chats');
        }

    })

    .controller('ChatsCtrl', function ($scope, Chats, $state) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };

    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
