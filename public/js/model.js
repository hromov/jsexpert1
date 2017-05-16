'use strict';
(function(){
    
    var model = function() {

        function getData(request) {
            let url = "http://www.omdbapi.com/?page=1&s=" + request
            return $.get(url, function( data ) {
                console.log("Initial data is loaded");
                return data;
            })
        }
        
        function updateData(data) {
            return this.getData(data)
        }
        
        return {
            getData : getData,
            updateData: updateData
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();


    
}())
