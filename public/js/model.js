'use strict';
(function(){
    
    var model = function() {

        function getFilms(request) {
            let url = "http://www.omdbapi.com/?page=1&s=" + request
            return $.get(url, function( filmList ) {
                return filmList;
            })
        }
        
        return {
            getFilms: getFilms
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();


    
}())
