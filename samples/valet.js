//=====================================================================
// This sample demonstrates using TeslaJS
//
// https://github.com/mseminatore/TeslaJS
//
// Copyright (c) 2016 Mark Seminatore
//
// Refer to included LICENSE file for usage rights and restrictions
//=====================================================================
"use strict";

require('colors');
var program = require('commander');
var framework = require('./sampleFramework.js');

//
//
//
program
  .usage('[options] ON|OFF pin')
  .option('-u, --username [string]', 'username (needed only if token not cached)')
  .option('-p, --password [string]', 'password (needed only if token not cached)')
  .option('-i, --index <n>', 'vehicle index (first car by default)', parseInt)
  .option('-U, --uri [string]', 'URI of test server (e.g. http://127.0.0.1:3000)')
  .parse(process.argv);

//
var sample = new framework.SampleFramework(program, sampleMain);
sample.run();

//
//
//
function sampleMain(tjs, options) {
    var mode = program.args[0];
    var pin = program.args[1];

    if (!mode || !pin) {
        program.help();
    }

    if (mode.toUpperCase() == "ON") {
        mode = true;
    } else {
        mode = false;
    }

    tjs.setValetMode(options, { onoff: mode, pin }, function (err, response) {
        if (response.result) {
            var str = mode ? "ENABLED" : "DISABLED";
            console.log("\nValet mode: " + str.bgGreen);
        }
        else {
            console.error(response.reason.red);
        }
    });
}
