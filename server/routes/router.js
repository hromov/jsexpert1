var express = require('express'),
    router  = express.Router(),
    galleryController  = require("../../server/controllers/galleryController");
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/testApi', galleryController.testApi);

router.get('/getGalleryList', galleryController.getGalleryList);

router.post('/saveGalleryItem', galleryController.saveGalleryItem);

router.get('/getGalleryItemByName', galleryController.getGalleryItemByName);

router.get('/getFavoritesList', favoritesController.getFavoritesList);
router.post('/saveFavoriteItem', favoritesController.saveFavoriteItem);


module.exports = router;