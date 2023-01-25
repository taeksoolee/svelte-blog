export default interface Route {
	id: number;
	title: string;
	description: string;
	keyowrds: string; // sperate: comma
	link: string;
	mTimeMs: number;
	depth: number;
	refIds: number[]; // reference id
	children?: Route[];
}
