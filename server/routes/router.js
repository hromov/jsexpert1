var express = require('express'),
    router  = express.Router(),
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/getFavoritesList', favoritesController.getFavoritesList);
router.get('/getFilmItemById', favoritesController.getFilmItemById);
router.post('/saveFavoriteItem', favoritesController.saveFavoriteItem);


module.exports = router;