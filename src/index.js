import React from 'react';
import { render } from 'react-dom';
import ready from 'document-ready';

import Root from './components/Root';

ready(() => {
	render(<Root />, document.getElementById('root'));
});
