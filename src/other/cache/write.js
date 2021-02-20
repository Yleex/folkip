const fs = require('fs');
const { log } = require('../utils/xconsole')
const path = require('path')

module.exports.writeSongUserInfo = (s /*Song object*/) => {
  fs.writeFileSync(
    path.join(__dirname, '/songuserinfo.json'),

    (
      (
        s === undefined
        || s === null
        || s === {}
        || typeof s !== 'object'
      )
        
      ? "\"no-data\""
      : JSON.stringify(s)
    ),

    'utf8'
  );
  
  log("Data escrita")
};
