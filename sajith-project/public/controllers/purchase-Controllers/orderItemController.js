'use strict'
myApp.controller('orderItemController',['$scope', '$route', '$http','orderItemService',function ($scope, $route, $http,orderItemService) {

    function getBatch() {
        orderItemService.getBatch().then(function (data) {

            $scope.drugBatchs = data;
        });
    }
    getBatch();

    function getSuppliers() {
        orderItemService.getSupplier().then(function (data) {
            $scope.suppliers = data;
        })
    }
    getSuppliers();

    function getDrugOrders() {
        orderItemService.get().then(function (data) {
           $scope.drugOrders =data;
        })
    }
    getDrugOrders();
    $scope.newOrder={};
    $scope.drugBatch={};
    $scope.Edit = function (did) {
        orderItemService.getDrug(did).then(function (data) {
            $scope.drugBatch = data;
            $scope.newOrder.did = $scope.drugBatch.did;
            $scope.newOrder.category = $scope.drugBatch.category;
            $scope.newOrder.name = $scope.drugBatch.name;
            $scope.newOrder.type = $scope.drugBatch.type;
        })

    }
    $scope.addOrder = function (order) {
        orderItemService.add(order).then(function (data) {
            if(data.success){
                alert('successfully Added');

            }
        })
    }

    $scope.EditOrder = function (oid) {
        orderItemService.getById(oid).then(function (data) {
            $scope.uOrder = data;
        });
    }
    $scope.updateOrder = function (oid,udata) {
        orderItemService.update(oid,udata).then(function (data) {
            if(data.success){
                alert('successfully updated');
                getDrugOrders();
            }
        });
    }
    $scope.Delete = function (oid) {
        orderItemService.delete(oid).then(function (data) {
            if(data.success){
                alert('successfully Deleted');
                getDrugOrders();
            }
        });
    }
}]);