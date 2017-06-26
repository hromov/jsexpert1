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
