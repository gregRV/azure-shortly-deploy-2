// MONGODB + MONGOOSE
var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

// BUILD SCHEMA, THEN USE TO CREATE RESPECTIVE MODEL
var linkSchema = mongoose.Schema({
  url: {type: String},
  base_url: {type: String},
  code: {type: String},
  title: {type: String},
  visits: {type: Number}
});

var Link = mongoose.model('Link', linkSchema);

// USE .pre TO HOOK LIFE-CYCLE EVENTS
linkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;


// BOOKSHELF + KNEX IMPLEMENTATION
// var db = require('../config');
// var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;
