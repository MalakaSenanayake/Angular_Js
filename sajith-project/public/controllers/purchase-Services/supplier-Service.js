myApp.factory('SupplierService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/purchase/supplier').then(function (res) {
                return res.data;
            });
        },

        add: (supplier) => $http.post('/purchase/supplier', supplier).then(response => response.data),
        update:(suppid,usupplier)=>$http.put('/purchase/supplier/'+suppid,usupplier).then(response => response.data),
        delete :(suppid)=>$http.delete('/purchase/supplier/'+suppid).then(response => response.data),
        getById: (suppid) => $http.get('/purchase/supplier/' + suppid).then(response => response.data),

    };
}]);

