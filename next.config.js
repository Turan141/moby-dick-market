const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
console.log('runtimeCaching', runtimeCaching);
module.exports = withPWA({
	images: { domains: ['backend.otlivant.com'] },
	pwa: {
		disable: process.env.NODE_ENV !== 'production',
		dest: 'public',
		runtimeCaching,
	},
	i18n,
});
