var app = angular.module('stockApp')
app.directive("botoneraDirective", function() {
    return {
        template: "<a href='add.html'>Agregar Producto</a>"
    };
});
app.directive("dataGrid", function() {
    return {        
        replace: true,
        restrict: 'E',
        template: "datagrid.html"
    };
});
directive("modalFullScreen", function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: getUrl() + '/angularviews/modal-fullscreen.html',
        };
    })

