import React, { Suspense } from 'react';
import { Union } from 'react-union';
import { IntlProvider } from 'react-intl';
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

// const getTranslations = (locale) => prop(locale)(translations);
const getTranslations = get(translations);

const Root = () => (
	<Suspense fallback={<div />}>
		<IntlProvider locale={defaultLocale} messages={getTranslations([defaultLocale])}>
			<Union routes={routes} />
		</IntlProvider>
	</Suspense>
);
export default Root;
