var postcss = require('postcss');

var getSize = function (matchedValue, unitSize) {
  var val = parseFloat(matchedValue) || 1;
  return unitSize * val;
};

module.exports = postcss.plugin('postcss-grid-unit', function (opts) {
  opts = opts || {};
  var units = opts.units || [];

  return function (css) {
    css.walkDecls(function transform (declaration) {
      units.forEach(function (item) {
        // if CSS value contains one of declared units
        if (declaration.value.indexOf(item.unit) !== -1) {
          // will match it
          var regexp = new RegExp('(\\d*\\.?\\d+)' + item.unit, 'gi');
          // and replace
          declaration.value = declaration.value.replace(regexp, function (matchedUnit) {
            return getSize(matchedUnit, item.size) + 'px';
          });
        }
      })
    });
  };
});
