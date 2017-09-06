(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var bind = (function (dom) {});

var imageCheck = {
    init: function init(dom) {
        bind(dom);
    }
};

imageCheck.init('.img');

// module.exports = imageCheck;

})));
//# sourceMappingURL=bundle.js.map
