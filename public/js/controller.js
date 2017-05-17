(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;
    var request = "Home";
            
    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/
    
    function bindUpdate() {
        gallery.eventHolder.on( gallery.updateEventName, (onButtonClicked, request) => {
            model.getFilms(request).then(filmList => {
                initGallery(filmList);
            });
        });
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
    }
    
    function initGallery(filmList){
        gallery = new Gallery(filmList);   
    }
    
    function init() {
        model.getFilms(request).then((filmList) => {
            initGallery(filmList);
            bindEvents();
        });    
    }
    init();
    
}())
