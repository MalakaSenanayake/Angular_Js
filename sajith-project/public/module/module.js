var myApp = angular.module("myApp", ["ngRoute","ngStorage"]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "./Login.html"
        })
        .when("/home", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.loggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Home.html"
        })
        .when("/store/AC", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Store-Views/AddCategory.html"
        })
        .when("/store/AD", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Store-Views/AddDrugs.html"
        })
        .when("/store/VD", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }

                    }

                }
            },
            templateUrl : "./views/Store-Views/ViewDrugs.html"
        })
        .when("/store/VDB", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Store-Views/DrugBatchDetails.html"
        })
        .when("/despence/PC", {
            resolve:{
                'check':function ($location,$localStorage) {
                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }
                }
            },

            templateUrl : "./views/Despense-View/AddPrescription.html"
        })
        .when("/despence/PT", {
            resolve:{
                'check':function ($location,$localStorage) {
                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }
                }
            },
            templateUrl : "./views/Despense-View/PrescriptionTable.html"
        })
		 .when("/despence/PV", {
            resolve:{
                'check':function ($location,$localStorage) {
                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }
                }
            },
            templateUrl : "./views/Despense-View/PrescriptionForm.html"
        })
        .when("/despence/ID", {
            resolve:{
                'check':function ($location,$localStorage) {
                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }
                }
            },
            templateUrl : "./views/Despense-View/issueMain.html"
        })
        .when("/despence/IO", {
            resolve:{
                'check':function ($location,$localStorage) {
                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }
                }
            },
            templateUrl : "./views/Despense-View/OrderTable.html"
        })
        .when("/purchasing/RS", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Purchasing-Views/supplierRegistration.html"
        })
        .when("/purchasing/PO", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Purchasing-Views/orderItems.html"
        })
        .when("/purchasing/VS", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Purchasing-Views/viewSupplier.html"
        })
        .when("/purchasing/VO", {
            resolve: {

                'check':function ($location,$localStorage){
                    if(!$localStorage.AdminloggedIn){
                        if(!$localStorage.loggedIn){
                            $location.path('/');
                        }
                        else {
                            $location.path('/home');
                        }
                    }
                }
            },
            templateUrl : "./views/Purchasing-Views/viewOrder.html"
        })
        .otherwise({
                 templateUrl: "./Login.html"
        });


});

myApp.controller('loginCtrl', function($scope, $location,$rootScope,$localStorage) {

    $scope.submit = function() {
        var username = $scope.username;
        var password = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $localStorage.AdminloggedIn = true;
            $localStorage.loggedIn = true;
            $location.path('/home');
        }
        else if($scope.username == 'user' && $scope.password == 'user'){
            $localStorage.loggedIn = true;
            $location.path('/home');
        }
        else {
            alert('Wrong password or Username');
        }

    };
});

myApp.controller('logoutCtrl',function ($scope, $location,$localStorage) {

    $scope.logout = function () {
        $location.path('/');
        $localStorage.loggedIn = false;
        $localStorage.AdminloggedIn= false;

    }
})