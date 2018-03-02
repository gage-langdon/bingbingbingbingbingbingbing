(async function bingAlot() {
	const number = process.argv[2] || 100;
	const delay = process.argv[3] || 150;
	for (let i = 0; i < number; i++) {
		await sleep(delay);
		process.stdout.write('\x07');
	}
})();

async function sleep(ms) {
	return new Promise(res => setTimeout(res, ms));
}
