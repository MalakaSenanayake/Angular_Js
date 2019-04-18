myApp.controller('SupplierController',['$scope', '$route', '$http','$routeParams','SupplierService',function ($scope, $route, $http,$routeParams,SupplierService) {

    function getSuppliers() {

        SupplierService.get().then(function (data) {

            $scope.suppliers = data;
        })
    }

    getSuppliers();

    $scope.addSupplier = function (supplier) {

        SupplierService.add(supplier).then(function (data) {

            if(data.success){
                alert('Successfully added');
                $scope.supplier = {};

                getSuppliers();
            }
        })
    }
    
    $scope.Edit = function (suppid) {

        SupplierService.getById(suppid).then(function (data) {

            $scope.Usupplier = data;
        })
    }

    $scope.UpdateSupplier = function (supid,usupplier) {
        SupplierService.update(supid,usupplier).then(function (data) {
            if(data.success){
                alert('Successfully updated');
                getSuppliers();
            }
        })
    }
    $scope.Delete= function (supid) {

        SupplierService.delete(supid).then(function (data) {
            if(data.success){
                alert('Successfully deleted');
                getSuppliers();
            }
        })
    }
}]);
