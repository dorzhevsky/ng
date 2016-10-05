"use strict";
var Generator = (function () {
    function Generator() {
    }
    Generator.Next = function () {
        return Generator.next++;
    };
    Generator.next = 1;
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map