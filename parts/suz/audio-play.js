#!/usr/bin/env node

const AudioContext = require('web-audio-api').AudioContext;
const context = new AudioContext;
const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');

function playSound(buffer) {
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}

context.outStream = new Speaker({
  channels: context.format.numberOfChannels,
  bitDepth: context.format.bitDepth,
  sampleRate: context.sampleRate
});

if (process.argv.length < 3) return console.error('please supply an audio file to play!');

const filepath = path.resolve(process.argv[2]);

fs.readFile(filepath, function read(err, data) {
  if (err) console.error('could not open file: ', err);
  
  context.decodeAudioData(data, function(buffer) {
    playSound(buffer);
  });
});
