'use strict'

myApp.factory('IssueMainService',['$http',function ($http) {

    return{
        getDrug :function () {
            return $http.get('/store/batch').then(function (res) {
                return res.data;
            });
        },

        getIssueOrders :function () {
            return $http.get('/issue/order/').then(function (res) {
                return res.data;
            })
        },

        getById: (pationId,presid) => $http.get('/issue/order/'+ pationId+'/'+presid).then(response => response.data),
        add: (order)=> $http.post('/issue/order/', order).then(response => response.data),
        delete :(pationId,presid)=>$http.delete('/issue/order/'+pationId+'/'+presid).then(response => response.data),
        updateOrder:(pationId,presid,uorder)=> $http.put('/issue/order/'+pationId+'/'+presid,uorder).then(response => response.data),
        updateDrugBatch:(did,bid,udrug)=> $http.put('/store/batch/'+did+'/'+bid,udrug).then(response => response.data)
    }
}]);
