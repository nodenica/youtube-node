var YouTube = require('../lib/youtube');
var config = require('./config');

var youTube = new YouTube();

youTube.setKey(config.key);
youTube.getPlayListsItemsById('PLpOqH6AE0tNhInmRTSNf9f6OQsdaSJS8F', config.max, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(result, null, 2));
  }
});
