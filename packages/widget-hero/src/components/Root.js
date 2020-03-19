import React, { useEffect, useState } from 'react';
import { Link } from '@union-liferay/ui-components';

import logo from './logo.png';

const Root = () => {
	const [showLink, setShowLink] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowLink(true), 2000);
	}, []);

	return (
		<div>
			<img src={logo} />

			{showLink && (
				<a href="/web/guest/sub" data-senna-off="true">
					Normal link
				</a>
			)}
			{showLink && <Link to="/web/guest/sub">Dynamic link</Link>}
		</div>
	);
};

export default Root;
