#!/usr/bin/env node
var ss = require('./App'),
options = require('minimist')(process.argv.slice(2)),
searchKey = options.s || options.search,
chalk = require('chalk');
if(!searchKey){ 
console.log(chalk.red('Search Key Not Found')) 
process.exit(0)}
(async () => {
var data = await ss(searchKey)
data.forEach((item,index) => console.log((data.length-index)+" "+chalk.bold.yellow(item.title)+"\n"+chalk.blue(item.link)+'\n\n'))
})();
