module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,json,txt,xml}'
	],
	swDest: 'public/',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^comma/
	]
};