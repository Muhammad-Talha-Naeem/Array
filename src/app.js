window._ = require('lodash');
window.getArray = function getArray(strName) {
    let array = Array.from(document.querySelectorAll(strName), (f) => parseInt(f.value));
    return array;
}
window.sum = function sum(strTagName) {
    let array = getArray(strTagName);
    return _.sum(array);
}
window.min = function min(strTagName) {
    let array = getArray(strTagName);
    return _.min(array);
}
window.max = function max(strTagName) {
    let array = getArray(strTagName);
    return _.max(array);
}