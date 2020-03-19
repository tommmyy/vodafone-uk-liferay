import React from 'react';
import PropTypes from 'prop-types';
import { path, o } from 'ramda';

const getSpa = path(['Liferay', 'SPA']);
const getSpaClickHandler = o(path(['app', 'linkEventHandler_', 'listener_']), getSpa);

const Link = ({ to, children, ...rest }) => {
	// const [spaFound, setSpaFound] = useState(false);

	// useEffect(() => {
	// 	window.Liferay.on('SPAReady', () => {
	// 		setSpaFound(!!getSpaClickHandler(window));
	// 	});
	// }, []);

	const handleOnClick = event => {
		event.persist();

		const sennaHandler = getSpaClickHandler(window);
		if (sennaHandler) {
			event.nativeEvent.delegateTarget = event.target;

			return sennaHandler(event.nativeEvent);
		}
	};

	return (
		<a
			href={to} data-senna-off="true" onClick={handleOnClick}
			{...rest}
		>
			{children}
		</a>
	);
};
Link.propTypes = { children: PropTypes.node, to: PropTypes.string };

export default Link;
