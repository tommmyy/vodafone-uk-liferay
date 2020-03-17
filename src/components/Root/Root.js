import React, { Suspense } from 'react';
import { Union } from 'react-union';

import routes from '../../routes';

import './Root.css';

const Root = () => (
	<Suspense fallback={<div />}>
		<Union routes={routes} />
	</Suspense>
);
export default Root;
