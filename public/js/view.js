'use strict';
(function() {

    function Gallery (filmList) {    
        this.DOMElements = {
            //saveBtn     : document.querySelector("#saveBtn"),
            refreshBtn  : document.querySelector("#refreshBtn"),
            content : document.querySelector("#content"),
            searchField: document.querySelector("#searchField")
        };

        //this.saveDefer = $.Deferred();
        this.films = filmList.Search;
        this.counter = 0;
        this.totalResults = filmList.totalResults
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery();
            this.initListeners();
        },
        
        buildGallery : function () {
            //console.log("Gallery is ready");
            var galleryHTML = ""
            this.films.forEach(film => {
                galleryHTML += generateCard(film);
            });
            this.DOMElements.content.innerHTML = galleryHTML;
        },

        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/
            
            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger( this.updateEventName , [this.DOMElements.searchField.value]);
            });
        } 

    }

    function generateCard(film) {
        let card = "<div class='demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col'>";
                card += "<img src='" + film.Poster + "'/>";
                card += "<div class='mdl-card__title'>";
                    card += "<h2 class='mdl-card__title-text'>" + film.Title + "</h2>";
                card += "</div>"
                card += "<div class='mdl-card__supporting-text'>";
                    card += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...";
                card += "</div>";
            card += "</div>"
        return card
    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
