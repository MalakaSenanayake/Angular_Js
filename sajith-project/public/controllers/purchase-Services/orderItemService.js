myApp.factory('orderItemService',['$http',function ($http) {
    return{
        getBatch : function () {
            return $http.get('/purchase/order/low/Qunatity').then(function (res) {
                return res.data;
            });
        },
        getDrug : function (did) {
            return $http.get('/store/drug/'+did).then(function (res) {
                return res.data;
            });
        },
        getSupplier : function () {
            return $http.get('/purchase/supplier').then(function (res) {
                return res.data;
            });
        },

        add: (order) => $http.post('/purchase/order', order).then(response => response.data),

        get : function () {
            return $http.get('/purchase/order').then(function (res) {
                return res.data;
            });
        },
        getById:function (oid) {
            return $http.get('/purchase/order/'+oid).then(function (res) {
                return res.data;
            });
        },
        update:function (oid,udata) {
            return $http.put('/purchase/order/'+oid,udata).then(function (res) {
                return res.data;
            });
        },
        delete:function (oid) {
            return $http.delete('/purchase/order/'+oid).then(function (res) {
                return res.data;
            });
        }


    }
}]);
