export default interface Route {
	title: string;
	link: string;
	children?: Route[];
}
