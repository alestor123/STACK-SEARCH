#!/usr/bin/env node
var ss = require('./App'),
options = require('minimist')(process.argv.slice(2)),
chalk = require('chalk');
(async () => {
var data = await ss(options.s || options.search)
data.map(item,index => console.log(item))
})();
