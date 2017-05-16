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
        gallery.eventHolder.on( gallery.updateEventName, (event, item) => {
            model.getData(item).then(data => {
                initGallery(data);
            });
        });
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
    }
    
    function initGallery(data){
        console.log(data)
        gallery = new Gallery(data);   
    }
    
    function init() {
        model.getData(request).then((data) => {
            initGallery(data);
            bindEvents();
        });    
    }
    init();
    
}())
