import React, { Fragment, Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import { Union } from 'react-union';
import { IntlProvider } from 'react-intl';
import { keys, map, pathOr } from 'ramda';
import { get } from 'ramda-extension';

import routes from '../../routes';

import './Root.css';

if (!Intl.PluralRules) {
	require('@formatjs/intl-pluralrules/polyfill');
	require('@formatjs/intl-pluralrules/dist/locale-data/cs');
}

if (!Intl.RelativeTimeFormat) {
	require('@formatjs/intl-relativetimeformat/polyfill');
	require('@formatjs/intl-relativetimeformat/dist/locale-data/cs');
}

const defaultLocale = 'cs';
const translations = {
	en: {
		'hero.title': 'Hello!',
	},
	cs: {
		'hero.title': 'Ahoj!',
	},
};
const supportedLocales = keys(translations);

const getTranslations = get(translations);
const getLocale = pathOr(defaultLocale, ['commonData', 'defaultLocale']);

const Root = ({ initialLocale = defaultLocale }) => {
	const [locale, setLocale] = useState(initialLocale);

	const onScanEnd = result => {
		setLocale(getLocale(result));
	};

	return (
		<Suspense fallback={<div />}>
			<IntlProvider locale={locale} messages={getTranslations([locale])}>
				<Fragment>
					<Union routes={routes} onScanEnd={onScanEnd} />
					{map(locale => (
						<button key={locale} onClick={() => setLocale(locale)} type="button">
							{locale}
						</button>
					))(supportedLocales)}
				</Fragment>
			</IntlProvider>
		</Suspense>
	);
};

Root.propTypes = {
	initialLocale: PropTypes.string,
};

export default Root;
