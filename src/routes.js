import { lazy } from 'react';

const Hero = lazy(() => import('./containers/widget-hero'));
const Content = lazy(() => import('./containers/widget-content'));

export default [
	{
		path: 'hero',
		component: Hero,
	},
	{
		path: 'content',
		component: Content,
	},
];
