import { __dirname, __root, __routes } from './const.js';
import { getPageData } from './utils.js';
import * as fs from 'fs';
import * as path from 'path';

const rootPageData = getPageData();
const rootId = 0;

/** @type {import('../src/interfaces').Route[]} */
const routes = [{
	id: rootId,
	title: rootPageData.title,
	description: rootPageData.description,
	keywords: rootPageData.keywords,
	link: rootPageData.link,
	mTimeMs: rootPageData.meta.mtimeMs,
	depth: 1,
	refIds: [rootId],
}];

let id = 0;

/** @type {number[]} */
const ids = [];
/** @type {string[]} */
const paths = [];


/**
 * 
 * @param {string} dirList 
 * @param {import('../src/interfaces').Route} ref 
 */
function setRoutes(dirList, ref) {
	for (const dir of dirList) {
		const currId = ++id;
		ids.push(currId);
		paths.push(dir);

		const pageData = getPageData(paths);

		/** @type {import('../src/interfaces').Route} */
		const route = {
			id: currId,
			title: pageData.title,
			description: pageData.description,
			keywords: rootPageData.keywords,
			link: pageData.link,
			mTimeMs: pageData.meta.mtimeMs,
			depth: ids.length,
			refIds: ids.map(v => v),
		};

		if (pageData.dirList.length) {
			/** @type {import('../src/interfaces').Route[]} */
			const children = [];
			setRoutes(pageData.dirList, children);
			route.children = children;
		}

		ref.push(route);
		paths.pop();
		ids.pop();
	}
}

setRoutes(rootPageData.dirList, routes);
fs.writeFileSync(path.resolve(__root, 'static', 'routes.json'), JSON.stringify(routes), {});
