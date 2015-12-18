angular.module('tonightApp', ['ionic'])


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

            .state('main.stepOne', {
                 url: '/stepOne',
                 views: {
                     'main': {
                         templateUrl: 'stepOne.html',
                         controller : 'StepOneController'
                     }
                 }
            })
            .state('main.stepTwo', {
                 url: '/stepTwo',
                 views: {
                     'main': {
                         templateUrl: 'stepTwo.html',
                         controller : 'StepTwoController'
                     }
                 }
            })
            .state('main.noFlyer', {
                 url: '/noFlyer',
                 views: {
                     'main': {
                         templateUrl: 'noFlyer.html',
                         controller : 'NoFlyerController'
                     }
                 }
            })
            .state('main.eventLog', {
                 url: '/eventLog',
                 views: {
                     'main': {
                         templateUrl: 'eventLog.html',
                         controller : 'EventLogController'
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

    .controller('StepOneController', [ '$scope', '$state', function($scope, $state) {
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
    .controller('NoFlyerController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Create Event';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('EventLogController', [ '$scope', '$state', function($scope, $state) {
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
