window._ = require('lodash');
window.getArray = (strName) => Array.from(document.querySelectorAll(strName), (f) => parseInt(f.value));
window.sum = (array) => _.sum(array);
window.min = (array) => _.min(array);
window.max = (array) => _.max(array);