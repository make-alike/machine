#!/usr/bin/env node

const base64Img = require('base64-img');

process.stdin.on('data', function(data) {
   if (data.toString().split('imgdata:').length > 1) {
     base64Img.img(data.toString().split('imgdata:').join(''), '', 'result', function(error, filepath) {
       console.log(filepath); 
     });
   }
});
