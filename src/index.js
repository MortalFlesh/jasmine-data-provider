(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if(typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        window.using = factory();
    }

}(function () {
    'use strict';

    return function (values, func) {
        if (values instanceof Function) {
            values = values();
        }

        if (values instanceof Array) {
            values.forEach(function(value) {
                if (!(value instanceof Array)) {
                    value = [value];
                }

                func.apply(this, value);
            });
        } else {
            var objectKeys = Object.keys(values);

            objectKeys.forEach(function(key) {
                if (!(values[key] instanceof Array)) {
                    values[key] = [values[key]];
                }

                values[key].push(key);

                func.apply(this, values[key]);
            });
        }
    };;
}));