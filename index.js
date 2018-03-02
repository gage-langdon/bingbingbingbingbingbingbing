#!/usr/bin/env node
var chalk = require('chalk');

(async function bing(count = 1000, delay = 150) {
	for (let i = 0; i < count; i++) {
		await sleep(delay);
		console.log(chalk.red('bing'), '\x07');
	}
})();

async function sleep(ms) {
	return new Promise(res => setTimeout(res, ms));
}
