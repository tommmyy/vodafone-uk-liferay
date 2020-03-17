const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const R = require('ramda');

const appDirectory = fs.realpathSync(process.cwd());
const srcPackagesDirectory = path.join(appDirectory, 'packages');

const getAvailableApps = R.compose(
	R.map(R.unary(path.basename)),
	R.curryN(2, glob.sync)
);

const mainFileName = 'main.js';
const indexFileName = 'index.html';
const buildDirectory = path.join(appDirectory, 'build');

const getLoadScriptsSrc = R.o(
	R.values,
	R.map(x => `Liferay.Loader._scriptLoader._loadScript({ url: '${x}' });`)
);

const joinByNewline = R.join('\n');

const getLoaderSource = (appName, paths) => {
	const loadScripts = getLoadScriptsSrc(paths);

	return `${joinByNewline(loadScripts)}\n`;
};

const createLiferayConfig = () => {
	const appsAvailable = getAvailableApps('**/app-*/', {
		cwd: srcPackagesDirectory,
		ignore: ['node_modules/**'],
	});

	R.forEach(appName => {
		const indexFilePath = path.join(buildDirectory, appName, indexFileName);
		const indexHtml = fs.readFileSync(indexFilePath, 'utf8');

		let entry;
		try {
			entry = R.compose(
				R.replace(/"/g, ''),
				R.find(R.test(new RegExp(`${appName}(\.[^\.]+)\.js`))),
				R.match(/"(.*?)"/g)
			)(indexHtml);
		} catch (err) {}

		if (!entry) {
			console.log('No entry found in index.html');
			throw new Error();
		}

		fs.writeFileSync(
			path.join(buildDirectory, `${appName}.js`),
			getLoaderSource(appName, { appName: entry }),
			'utf8'
		);
	})(appsAvailable);
};

async function bundle() {
	console.log('Creating Liferay AMD configuration...');
	createLiferayConfig();
	console.log('✨ Successfully finished ✨');

	return Promise.resolve();
}

module.exports = bundle;
