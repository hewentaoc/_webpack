"use strict";

require("core-js/modules/es.array.of");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var a = 1;

var x = function x() {
  return 'a';
};

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);

    this.name = 'name';
  }

  _createClass(Test, [{
    key: "getAge",
    value: function getAge() {
      this.age = 18;
    } // age = 'male'
    // getContent =()=>{
    //     console.log('a');
    // }

  }]);

  return Test;
}();

var number = Math.pow(2, 3);
var arr = Array.of(3, 2, 1);
