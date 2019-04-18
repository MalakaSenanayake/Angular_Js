myApp.factory('DrugBatchService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/store/batch').then(function (res) {
                return res.data;
            });
        },


        add: (drugBatch)=> $http.post('/store/batch', drugBatch).then(response => response.data),
        update:(did,bid,ubatch)=>$http.put('/store/batch/'+did+'/'+bid,ubatch).then(response => response.data),
        delete :(did,bid)=>$http.delete('/store/batch/'+did+'/'+bid).then(response => response.data),
        getById: (did,bid) => $http.get('/store/batch/'+ did+'/'+bid).then(response => response.data),
    };
}]);

