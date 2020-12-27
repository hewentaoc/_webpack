"use strict";

require("core-js/modules/es.array.of");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

var _obj$foo, _obj$foo$bar, _obj$qux;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = 1;

var x = function x() {
  return 'a';
};

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);

    _defineProperty(this, "getContent", function () {});

    this.name = 'name';
  }

  _createClass(Test, [{
    key: "getAge",
    value: function getAge() {
      this.age = 18;
    } // age = 'male'

  }]);

  return Test;
}();

var obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};
var baz = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : (_obj$foo$bar = _obj$foo.bar) === null || _obj$foo$bar === void 0 ? void 0 : _obj$foo$bar.baz; // 42

var safe = obj === null || obj === void 0 ? void 0 : (_obj$qux = obj.qux) === null || _obj$qux === void 0 ? void 0 : _obj$qux.baz; // undefined

var number = Math.pow(2, 3);
var arr = Array.of(3, 2, 1);
