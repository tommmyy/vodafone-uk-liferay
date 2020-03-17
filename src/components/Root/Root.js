import React, { Fragment } from 'react';

import Content from '../../containers/widget-content';
import Hero from '../../containers/widget-hero';

import './Root.css';

const Root = () => (
	<Fragment>
		<Hero />
		<Content
			data={{
				messages: {
					heading: 'Welcome',
					content: 'This is sample server content.',
				},
			}}
		/>
	</Fragment>
);

export default Root;
