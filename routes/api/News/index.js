var keystone = require('keystone'),
  bodyParser = require('body-parser');

const Model = keystone.list('News').model;

const api = {
  getAllNews: function(req, res) {

    Model.find().exec(function(err, data) {
      if(err) {
        res.status(500).send('Application Error');
      }

      res.status(200).send(data);
      console.log(data);
    });
  },

  getNewsById: function(req, res) {
    Model.find({"_id":req.params.id}).exec(function(err, data) {
      if(err) {
        res.status(500).send('Application Error');
      }

      res.status(200).send(data);
      console.log(data);
    });
  },

  createNews: function (req, res, next) {
    console.log(req.body);
    Model.create(req.body, function(err, data) {
      if(err) {
        res.status(500).send('Application Error');
      }

      res.status(204).send(data);
    });
  }
};

module.exports = api;
