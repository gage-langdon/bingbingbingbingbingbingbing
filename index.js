#!/usr/bin/env node
var program = require('commander');
var chalk = require('chalk');

(async function bing(count = 100, delay = 150) {
	for (let i = 0; i < count; i++) {
		await sleep(delay);
		process.stdout.write('\x07');
		console.log(chalk.red('bing'));
	}
})();

async function sleep(ms) {
	return new Promise(res => setTimeout(res, ms));
}

program.command('bingbingbing <count> <delay>').action(async (count, delay) => {
	console.log(count, delay);
	await bing(count, delay);
});
program.parse(process.argv);
