"use strict";
// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape. 
exports.__esModule = true;
exports.KaijuType = exports.Kaiju = void 0;
var KaijuType;
(function (KaijuType) {
    KaijuType[KaijuType["flying"] = 0] = "flying";
    KaijuType[KaijuType["lizard"] = 1] = "lizard";
    KaijuType[KaijuType["ape"] = 2] = "ape";
})(KaijuType || (KaijuType = {}));
exports.KaijuType = KaijuType;
var Kaiju = /** @class */ (function () {
    function Kaiju() {
    }
    return Kaiju;
}());
exports.Kaiju = Kaiju;
