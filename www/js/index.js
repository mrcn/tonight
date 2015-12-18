angular.module('ionicApp', ['ionic'])


    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('entry', {
                url : '/entry',
                templateUrl : 'entry.html',
                controller : 'EntryPageController'
            })

            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })

            .state('main.eventPicker', {
                url: '/main',
                views: {
                    'main': {
                        templateUrl: 'eventPicker.html',
                        controller : 'EventPickerController'
                    }
                }
            })

            .state('main.info', {
                url: '/info',
                views: {
                    'main': {
                        templateUrl: 'info.html',
                        controller : 'InfoPageController'
                    }
                }
            })

            .state('main.createEvent', {
                 url: '/createEvent',
                 views: {
                     'main': {
                         templateUrl: 'createEvent.html',
                         controller : 'CreateEventController'
                     }
                 }
            })
            .state('main.stepTwo', {
                 url: '/createEvent',
                 views: {
                     'main': {
                         templateUrl: 'stepTwo.html',
                         controller : 'StepTwoController'
                     }
                 }
            })

            .state('main.settings', {
                 url: '/settings',
                 views: {
                     'main': {
                         templateUrl: 'settings.html',
                         controller : 'SettingsPageController'
                     }
                 }
            })

        $urlRouterProvider.otherwise('/entry');
    }])




    .controller('MainController', [ '$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
    }])

    .controller('EntryPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Sign Up';

        $scope.signIn = function() {
            $state.go('main.home');
        }
    }])

    .controller('HomePageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Tonight';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('InfoPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Info Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('EventPickerController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Event Picker';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('CreateEventController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Create Event';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('StepTwoController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Create Event';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('SettingsPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Tonight Settings';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
