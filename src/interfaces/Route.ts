export default interface Route {
	id: number;
	title: string;
	description?: string;
	keywords?: string; // sperate: comma
	link: string;
	mTimeMs: number;
	depth: number;
	refIds: number[]; // reference id
	children?: Route[];
}

export type FlattenRoutes = Omit<Route, 'children'>[];
