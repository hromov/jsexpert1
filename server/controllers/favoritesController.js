    var FavoriteItemModel  = require("../../server/models/favoriteItem.js");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }

    var favoritesController = {

      getFavoritesList: function (req, res) {
        return FavoriteItemModel.find(function (err, favoritesList) {
            if (err) {
                handleError(res, err); 
            } else {
               return res.send(favoritesList);
            }
        });
      },

      getFilmItemById: function (req, res) {
        return FavoriteItemModel.find({ filmId: new RegExp(req.query.filmId, 'i')})
          .exec(function (err, filteredFilmList) {
            if (err) {
                handleError(res, err); 
            } else {
                return res.send(filteredFilmList);
            }
        });
      },

      saveFavoriteItem: function(req, res) {
        var item = new FavoriteItemModel(req.body);

        item.save(function (err) {
            if (err) {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            } else {
                console.log("Favorites item is created");
                return res.send({ status: 'OK', item: item });
            }
        });
 
        }
      }

module.exports = favoritesController;
