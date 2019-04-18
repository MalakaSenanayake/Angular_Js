'use strict'

myApp.controller("PrescriptionController",['$scope','$route','$http','$routeParams','PrescriptionService',function ($scope,$route,$http,$routeParams,PrescriptionService) {

    function getdrugs() {
        PrescriptionService.getDrug().then(function (data) {
            $scope.drugs = data;
        });
    }
    getdrugs();
    function getPrescriptions() {
        PrescriptionService.getPrescription().then(function (data) {
            $scope.prescription = data;
        });
    }
    getPrescriptions();

    $scope.selectItems = [];
    $scope.user = {};



 
    $scope.addItem = function (Did,Dname,Dtype,Dprice,dosage,frequency,period) {





            $scope.selectItems.push({

                drugId:Did,
                name: Dname,
                type:Dtype,
                price:Dprice,
                dosage:dosage,
                frequency:frequency,
                period:period


            });


    }
    $scope.removeItem= function (index) {

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


        $scope.rows = $scope.selectItems.length;
    }

    $scope.addPrescription = function (prescriptionForm) {


        PrescriptionService.add(prescriptionForm).then(function (data) {

            if(data){
                alert('successfully added');
                $scope.user={};
            }
        })
    }


    $scope.Edit = function (presid) {
        PrescriptionService.getById(presid).then(function (data) {

            $scope.uPrescription = data;


        });
    }
   $scope.updatePrescription = function (presid,uprescription) {
       PrescriptionService.updatePrescriptionStatus(presid,uprescription).then(function (data) {
           if(data.success){
               alert('successfully updated');
               getPrescriptions();
           }
       })
   }

    $scope.Delete = function (presid) {
        PrescriptionService.delete(presid).then(function (data) {

            if(data){
                alert('successfully deleted  ');
                getPrescriptions();
            }
        })
    };

    $scope.printpage =function () {
        print();
    }
    $scope.getPrescription = function (presid) {
        PrescriptionService.getById(presid).then(function (data) {

            $scope.VPrescription = data;


        });
    }

}]);
