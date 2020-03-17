import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

// eslint-disable-next-line
import logo from 'url:./logo.png';

const Root = () => (
	<Fragment>
		<h1>
			<FormattedMessage id="hero.title" defaultMessage="Default Title" />
		</h1>
		<img src={logo} />
	</Fragment>
);

export default Root;
