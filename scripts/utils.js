import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { __routes } from './const.js';

/**
 * 
 * @param {string} path 
 * @returns {string[]}
 */
export function getDirList(path) {
	return fs.readdirSync(path).filter((f) => !/^.*\.(ts|js|svelte)/g.test(f));
}

/**
 * 
 * @param {string[]} paths 
 * @returns 
 */
export function getPageData(paths=[]) {
	const _path = path.resolve(__routes, ...paths);
	
	const file = path.resolve(_path, '+page.svelte');
	const page = fs.readFileSync(file);
	const $ = cheerio.load(page);

	return {
		title: $('title').text(),
		description: $('meta[name=description]').attr('content'),
		keywords: $('meta[name=keyword]').attr('content'),
		link: _path.replace(__routes, ''),
		dirList: getDirList(_path),
		meta: fs.statSync(file),
	}
}

export default {};