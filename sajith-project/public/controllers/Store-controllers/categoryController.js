'use strict'
myApp.controller('CategoryController', ['$scope', '$route', '$http','$routeParams', 'CategoryService', function ($scope, $route, $http,$routeParams, CategoryService) {

    function getCategory() {
        CategoryService.get().then(function (categorys) {
            $scope.categorys = categorys;
        })
    };

    getCategory();

    $scope.addCategory = function (category) {
        CategoryService.add(category).then(function (data) {
            if(data.success){
                alert("Successfully added");
                getCategory();
                //$scope.category ={}

            }else{
                alert("Error");
            }

        })
    };



    $scope.Edit = function (cid) {

        CategoryService.getById(cid).then(function (ucategory) {
            $scope.ucategory = ucategory;
        })

    };
    
    $scope.UpdateCategory = function (cid,ucategory) {

        CategoryService.update(cid,ucategory).then(function (data) {
            if(data.success){
                alert("Successfully updated");
                getCategory();

            }else{
                alert("Error");
            }

        })
    };
    $scope.Delete = function (cid) {
        var result = confirm("Are you sure ?");
        if (result == true){
            CategoryService.delete(cid).then(function (data) {
                if (data.success) {
                    getCategory();
                    alert("Successfully deleted");
                }
            })
    }
    };
}]);
