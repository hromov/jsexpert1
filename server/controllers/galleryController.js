    var galleryItemModel  = require("../../server/models/galleryItem");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }


    var galleryController = {

      testApi: function (req, res) {
        res.send('{"result": "API is running. You can work."}');
      },

      getGalleryList: function (req, res) {
        return galleryItemModel.find(function (err, galleryList) {
            if (!err) {
                return res.send(galleryList);
            } else {
               handleError(res, err); 
            }
        });
      },

      getGalleryItemByName: function (req, res) {
        return galleryItemModel.find({ name: new RegExp(req.query.name, 'i')})
          .exec(function (err, filteredGalleryList) {
            if (!err) {
                return res.send(filteredGalleryList);
            } else {
                handleError(res, err); 
            }
        });
      },

      saveGalleryItem: function(req, res) {
        var item = new galleryItemModel(req.body);

        console.log(req.body);
        console.log(item);
        return res.send({ status: 'OK', item: item });

        /*
        // Please DO NOT save any data to database!!!
        // DO NOT ENABLE THIS CODE
        item.save(function (err) {
            if (!err) {
                console.log("Gallery item is created");
                return res.send({ status: 'OK', item: item });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
        */
      } 
    };

module.exports = galleryController;
