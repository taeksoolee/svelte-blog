export default [
	{
		title: 'Home',
		link: '/'
	},
	{
		title: 'Develop',
		link: '/develop',
		children: [
			{
				title: 'React',
				link: '/develop/react',
				children: [
					{
						title: 'Getting Start',
						link: '/develop/react/getting-start'
					}
				]
			},
			{
				title: 'NextJS',
				link: '/develop/nextjs',
				children: [
					{
						title: 'Getting Start',
						link: '/develop/nextjs/getting-start'
					}
				]
			},
			{
				title: 'Svelte',
				link: '/develop/svelte',
				children: [
					{
						title: 'Getting Start',
						link: '/develop/svelte/getting-start'
					}
				]
			}
		]
	},
	{
		title: 'Tech Review',
		link: '/tech-review',
		children: [
			{
				title: 'Space spacesound Q45',
				link: '/tech-review/anker-spacesound-q45'
			}
		]
	}
];
