    var FavoriteItemModel  = require("../../server/models/favoriteItem.js");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }

    var favoritesController = {

      getFavoritesList: function (req, res) {
        return FavoriteItemModel.find(function (err, favoritesList) {
            if (!err) {
                return res.send(favoritesList);
            } else {
               handleError(res, err); 
            }
        });
      },

      getFilmItemById: function (req, res) {
        return FavoriteItemModel.find({ filmId: new RegExp(req.query.filmId, 'i')})
          .exec(function (err, filteredFilmList) {
            if (!err) {
                return res.send(filteredFilmList);
            } else {
                handleError(res, err); 
            }
        });
      },
/*
      updateFavoriteItem: function (req, res) {
          //var item = new FavoriteItemModel(req.body);
          return FavoriteItemModel.findByIdAndUpdate(req.query.filmId, { $set: { status: req.query.status }}, { new: true }, function (err, tank) {
            if (err) return handleError(err);
                res.send(tank);
            });
      },
*/
      saveFavoriteItem: function(req, res) {
        var item = new FavoriteItemModel(req.body);

        /*console.log(req.body);
        console.log(item);
        return res.send({ status: 'OK', item: item });*/

        item.save(function (err) {
            if (!err) {
                console.log("Favorites item is created");
                return res.send({ status: 'OK', item: item });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
 
        }
      }

module.exports = favoritesController;
