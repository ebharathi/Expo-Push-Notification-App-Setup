// twrnc.config.js
const { create } = require('twrnc');

const tw = create(require('./tailwind.config.js'));

module.exports = tw;