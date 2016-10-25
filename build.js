'use strict';

const fs = require('fs')
const mimes = require('mime-db')

const mimetypes = Object
  .keys(mimes)
  .map(key => ({
    type: key,
    ext:  mimes[key]
  }))
  .filter(mime => mime.ext.extensions)
  .map(mime => ({
    type: mime.type,
    ext:  mime.ext.extensions[0]
  }))
  .reduce((acc, mime) => {
    acc[mime.type] = mime.ext
    return acc
  }, {})

const jsMimes = `(function () {

  angular.module('mys.mimes', [])
    .service('mimes', mimes);

  function mimes () {
    const mimesString = ${JSON.stringify(mimetypes)};
    this.getExtension = function (ext) {
      return mimesString[ext] || '-';
    };
  }

})();`

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('dist')
}

fs.writeFile('./dist/mimetypes.js', jsMimes , 'utf8')
