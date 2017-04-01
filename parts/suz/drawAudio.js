#!/usr/bin/env node

const spawnHeadlessChromium = require('run-headless-chromium').spawn;
const proc = spawnHeadlessChromium(
  ['http://localhost:3000/drawAudio.html'],
  { stdio: [0, 1, 'ignore'] }
);

proc.on('close', function() {
  clearTimeout(delayedExit);
});

const delayedExit = setTimeout(function() {
  proc.kill('SIGINT');
}, 60 * 1000);
