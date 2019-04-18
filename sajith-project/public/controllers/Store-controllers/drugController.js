'use strict'
myApp.controller('DrugController', ['$scope', '$route', '$http', 'DrugService','DrugBatchService', function ($scope, $route, $http, DrugService,DrugBatchService) {

    function getDrug() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }

    getDrug();

    function getCate() {
        DrugService.getcate().then(function (category) {
            $scope.category = category;
        })
    };
    getCate();

    $scope.addDrug = function (drug) {
        DrugService.add(drug).then(function (data) {
            if(data.success){
                alert("Successfully added");
                $scope.drug = {};

            }else{
                alert("Error");
            }

        })
    };

    $scope.selectdrug = {};
    $scope.udrug = {};
    $scope.newBatch = {};

    $scope.Edit = function (did) {

        DrugService.getById(did).then(function (data) {
            $scope.selectdrug = data;
        })

    };


    $scope.$watch('selectdrug.did',function (newVal) {

        $scope.udrug.did = $scope.selectdrug.did;
    });
    $scope.$watch('selectdrug.category',function (newVal) {

        $scope.udrug.category = $scope.selectdrug.category;
    });
    $scope.$watch('selectdrug.name',function (newVal) {

        $scope.udrug.name = $scope.selectdrug.name;
    });
    $scope.$watch('selectdrug.type',function (newVal) {

        $scope.udrug.type = $scope.selectdrug.type;
    });
    $scope.$watch('selectdrug.price',function (newVal) {

        $scope.udrug.price = $scope.selectdrug.price;
    });

    $scope.UpdateDrug = function (did,udrug) {

        DrugService.update(did,udrug).then(function (data) {
            if(data.success){
                alert("Successfully added");
                getDrug();

            }else{
                alert("Error");
            }

        })
    };
    $scope.Delete = function (did) {
        var result = confirm("Are you sure ?");
        if (result == true){
            DrugService.delete(did).then(function (data) {
                if (data.success) {
                    getDrug();
                    alert("Successfully deleted");
                }
            })
        }
    };

    $scope.$watch('selectdrug.did',function (newVal) {

        $scope.newBatch.did = $scope.selectdrug.did;
    });
    $scope.$watch('selectdrug.category',function (newVal) {

        $scope.newBatch.category = $scope.selectdrug.category;
    });
    $scope.$watch('selectdrug.name',function (newVal) {

        $scope.newBatch.name = $scope.selectdrug.name;
    });
    $scope.$watch('selectdrug.type',function (newVal) {

        $scope.newBatch.type = $scope.selectdrug.type;
    });
    $scope.$watch('selectdrug.price',function (newVal) {

        $scope.newBatch.price = $scope.selectdrug.price;
    });


    $scope.batch = {};
    $scope.addNewBatch = function (batch) {

        DrugBatchService.add(batch).then(function (data) {

            if(data.success){
                alert("successfully added")
            }
        })
    }
}]);
