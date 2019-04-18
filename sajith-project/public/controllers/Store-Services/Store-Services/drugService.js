myApp.factory('DrugService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/store/drug').then(function (res) {
                return res.data;
            });
        },
        getcate : function () {
            return $http.get('/store/category').then(function (res) {
                return res.data;
            });
        },
        //get: () => $http.get('/users').then(response => response.data),
        add: drug => $http.post('/store/drug', drug).then(response => response.data),
        update:(did,udrug)=>$http.put('/store/drug/'+did,udrug).then(response => response.data),
        delete :(did)=>$http.delete('/store/drug/'+did).then(response => response.data),
        getById: (did) => $http.get('/store/drug/' + did).then(response => response.data),
    };
}]);
