'use strict'
myApp.controller('DrugBatchController',['$scope', '$route', '$http','DrugBatchService',function ($scope, $route, $http,DrugBatchService) {

    function getBatch() {
        DrugBatchService.get().then(function (data) {

            $scope.drugBatchs = data;

        });
    }
    getBatch();

    $scope.Edit = function (did,bid) {

        DrugBatchService.getById(did,bid).then(function (data) {

			$scope.db = data;
            var mdate = $scope.db.mDate;
            var edate = $scope.db.eDate;
            $scope.db.mDate = moment(mdate).format('YYYY-MM-DD');
            $scope.db.eDate = moment(edate).format('YYYY-MM-DD');
            $scope.uBatch =$scope.db;
        });

    }


    $scope.updateBatch = function (did,bid,ubatch) {

        DrugBatchService.update(did,bid,ubatch).then(function (data) {

            if(data.success){
                getBatch();
                alert("successfully updated")
            }
        });
    }
    $scope.Delete = function (did,bid) {
        var result = confirm("Are you sure ?");
        if (result == true){
            DrugBatchService.delete(did,bid).then(function (data) {
                if (data.success) {
                    getBatch();
                    alert("successfully deleted")

                }
            })
        }
    };
}]);