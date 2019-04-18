'use strict'

myApp.factory('PrescriptionService',['$http',function ($http) {

    return{
        getDrug : function () {
            return $http.get('/store/batch').then(function (res) {
                return res.data;
            });
        },
        getPrescription :function () {
            return $http.get('/issue/prescription').then(function (res) {
                return res.data;
            });
        },

        getById: (presid) => $http.get('/issue/prescription/'+presid).then(response => response.data),
        add: (prescription)=> $http.post('/issue/prescription/', prescription).then(response => response.data),
        delete :(presid)=>$http.delete('/issue/prescription/'+presid).then(response => response.data),
        updatePrescriptionStatus:(presid,uprescription)=> $http.put('/issue/prescription/'+presid,uprescription).then(response => response.data)
    }
}]);
