(function(){
    function registerSvc($http){
        this.getCountries=function(){
            return [
                {"name":"India","code":"IN"},
                {"name":"United States","code":"US"}
            ];
        };

        this.getCountriesFromJson=function(){
           return $http.get("api/countries.json");
        };
        this.createUser = function(user){
            return $http.post("/api/users/create",user);
        }
    }
    angular.module("register")
    .service("registerSvc",["$http",registerSvc]);
})();