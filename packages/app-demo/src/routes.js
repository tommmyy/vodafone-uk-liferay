import React, { lazy } from 'react';

const Hero = lazy(() => import('@union-liferay/widget-hero'));
const Content = lazy(() => import('@union-liferay/widget-content'));

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
