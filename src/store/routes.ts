import type { Route } from 'src/interfaces';
import { readable } from 'svelte/store';

import routes from 'src/data/routes.json';

export const routes$ = readable<Route[]>(routes);

function flatRoutes(routes: Route[]): Omit<Route, 'children'>[] {
  const result: Route[] = [];

  for (const i in routes) {
    const route = routes[i];
    const childrenResult = flatRoutes(route.children ?? []);
    result.push(route, ...childrenResult);
  }

  return result;
}

export const flattenRoutes$ = readable<Omit<Route, 'children'>[]>(flatRoutes(routes));