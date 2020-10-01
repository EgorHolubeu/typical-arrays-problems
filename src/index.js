
exports.min = function min (array) {
  return arguments.length && array.length ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max (array) {
    return arguments.length && array.length ? array.sort((a, b) => b - a)[0] : 0;
}

exports.avg = function avg (array) {
  return arguments.length && array.length ? array.reduce((p, c) => p + c)/array.length : 0;
}
