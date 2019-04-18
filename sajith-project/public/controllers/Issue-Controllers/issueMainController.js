'use strict'

myApp.controller("IssueMainController",['$scope','$route','$http','$routeParams','IssueMainService','DrugBatchService',function ($scope,$route,$http,$routeParams,IssueMainService,DrugBatchService) {

    function getDrugs() {
        IssueMainService.getDrug().then(function (data) {
            $scope.drugs = data;
        });
    }
    getDrugs();

    $scope.selectItems = [];
    $scope.user = {};

    function updateDrugBatch(did,bid,qty) {
        DrugBatchService.getById(did,bid).then(function (data) {
            $scope.updateDrugBatch = data;
            $scope.updateDrugBatch.qty = qty;
            IssueMainService.updateDrugBatch(did,bid,$scope.updateDrugBatch).then(function (data) {
                if(data.success){

                    getDrugs();
                }

            });
        })
    }
    $scope.addItem = function (did,name,type,unitPrice,batchId,aqty,qty) {

        var updateQty = aqty-qty;

        if(updateQty >= 0){
            updateDrugBatch(did,batchId,updateQty);

            $scope.selectItems.push({

                drugId:did,
                name: name,
                type:type,
                price:unitPrice,
                batchId:batchId,
                quantity:qty,
                totalPrice:unitPrice*qty
            });
        }else {
            alert('please select valid quantity')
        }

    }
    function updateDrugBatchAfterRemove(did,bid,qty) {
        DrugBatchService.getById(did,bid).then(function (data) {
            $scope.updateDrugBatch = data;
            $scope.updateDrugBatch.qty = $scope.updateDrugBatch.qty+qty;
            IssueMainService.updateDrugBatch(did,bid,$scope.updateDrugBatch).then(function (data) {
                if(data.success){

                    getDrugs();
                }

            });
        })
    }
    $scope.removeItem= function (index) {
        var value = $scope.selectItems[index];
        var did = value.drugId;
        var bid = value.batchId;
        var qty = value.quantity;
        updateDrugBatchAfterRemove(did,bid,qty);
      $scope.selectItems.splice(index,1);
    }

    function createStringByArray(array) {
        var output = '';
        angular.forEach(array, function (object) {
            angular.forEach(object, function (value,key) {

                output += key + ':'+ value;
                output += '\n';
            });
        });
        return output;
    }

    $scope.addList = function () {

        var string = createStringByArray($scope.selectItems);
        $scope.user.druglist = string;



    }

    $scope.addOrder = function (order) {


        IssueMainService.add(order).then(function (data) {

            if(data){
                alert('successfully added');
                $scope.user = {};
            }
        })
    }

    function getOrders() {
            IssueMainService.getIssueOrders().then(function (data) {
                $scope.issueOrders = data;
            })
    }
    getOrders();


    $scope.Edit = function (pationId,presid) {
        IssueMainService.getById(pationId,presid).then(function (data) {
            $scope.uorder = data;
        })
    }
    $scope.updateOrder = function (pationId,presid,uorder) {
        IssueMainService.updateOrder(pationId,presid,uorder).then(function (data) {
            if(data){
                alert('successfully updated');
                getOrders();
            }
        })
    }

    $scope.Delete = function (pationId,presid) {
        IssueMainService.delete(pationId,presid).then(function (data) {

            if(data){
                alert('successfully deleted  ');
                getOrders();
            }
        })
    }



}]);