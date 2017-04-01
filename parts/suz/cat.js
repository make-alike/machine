#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) return console.error('please supply a file to cat!');

const source = fs.createReadStream(filepath);

source.on('error', (error) => {
  return console.error('could not read file: ', error);
});

source.pipe(process.stdout);
