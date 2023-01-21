import type { Route } from '../src/interfaces';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';

import * as cheerio from 'cheerio';

// const __filename = url.fileURLToPath(import.meta.url);
// console.log(__filename);

const __dirname = url.fileURLToPath(new URL('..', import.meta.url));
const __root = path.resolve('..', __dirname);
const __routes = path.resolve(__root, 'src', 'routes');

const rootRouteLink = '/';
const rootRoute: Route = {
	title: 'Home',
	link: rootRouteLink
};

function getDirList(path: string): string[] {
	return fs.readdirSync(path).filter((f) => !/^.*\.(ts|js|svelte)/g.test(f));
}

const routes: Route[] = [rootRoute];
const paths: string[] = [];
// console.log(routes);
const rootDirList = getDirList(__routes);

function setRoutes(dirList: string[], ref: Route[]) {
	for (const dir of dirList) {
		paths.push(dir);

		const _path = path.resolve(__routes, ...paths);

		const page = fs.readFileSync(path.resolve(_path, '+page.svelte'));
		const $ = cheerio.load(page);

		const route: Route = {
			title: $('title').text(),
			link: _path.replace(__routes, '')
		};

		const _dirList = getDirList(_path);
		if (_dirList.length) {
			const children: Route[] = [];
			setRoutes(_dirList, children);
			route.children = children;
		}

		ref.push(route);
		paths.pop();
	}
}

setRoutes(rootDirList, routes);
fs.writeFileSync(path.resolve(__root, 'static', 'routes.json'), JSON.stringify(routes), {});

export default {};
