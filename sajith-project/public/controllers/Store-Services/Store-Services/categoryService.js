myApp.factory('CategoryService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/store/category').then(function (res) {
                return res.data;
            });
        },

        add: category => $http.post('/store/category', category).then(response => response.data),
        update:(cid,ucategory)=>$http.put('/store/category/'+cid,ucategory).then(response => response.data),
        delete :(cid)=>$http.delete('/store/category/'+cid).then(response => response.data),
        getById: (cid) => $http.get('/store/category/' + cid).then(response => response.data),

    };
}]);
