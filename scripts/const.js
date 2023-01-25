import * as url from 'url';
import * as path from 'path';

export const __dirname = url.fileURLToPath(new URL('..', import.meta.url));
export const __root = path.resolve('..', __dirname);
export const __routes = path.resolve(__root, 'src', 'routes');