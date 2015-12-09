# jasmine - data provider

- I am used to use data provider in PHPunit so I have been searching for some solution in jasmine
- but I found only this (https://github.com/jphpsf/jasmine-data-provider), problem is, this is just for jasmine v1.2
- so I updated it
- now you can use Jasmine 2.2.0 and use data providers just like that:

## Usage
```javascript
var using = require('jasmine-data-provider');

describe('test subtraction with data provider - direct array', function () {
    using([{a: 5, b: 2, expected: 3}, {a: 25, b: 26, expected: -1}], function (data) {
        it('should calc with operator -', function () {
            var result = calculator.calc(data.a, data.b, '-');

            expect(result).toEqual(data.expected);
        });
    });
});
```

Using function as a data provider
```javascript
describe('test addition with data provider - provider function', function () {
    function plusProvider() {
        return [
            {a: 2, b: 3, expected: 5},
            {a: '14', b: 15, expected: 29},
            {a: 12, b: '13', expected: 25},
            {a: '22', b: '13', expected: 35},
        ];
    }

    using(plusProvider, function (data) {
        it('should calc with operator +', function () {
            var result = calculator.calc(data.a, data.b, '+');

            expect(result).toEqual(data.expected);
        });
    });
});
```

Now you can use object with a description that is passed into to the callback function as the last parameter
```javascript
describe('My fantastic test', function () {
    var objectDataProvider = {
        'First one is awesome!': {a: 6, b: 3, expected: 9},
        'Second test should fail': {a: 8, b: 1, expected: 10}
    };

    using(objectDataProvider, function (data, description) {
        it(description, function () {
            var result = calculator.calc(data.a, data.b, '+');

            expect(result).toEqual(data.expected);
        });
    });
});
```

## JS Module Loaders

CommonJS (like browserify), AMD (like requirejs)

## Browser compatibility

Chrome 5+, Firefox 4+, Opera 12+, Safari 5+ and Internet Explorer 9+ (oh yeah..)

## Installation
 
    npm install jasmine-data-provider

## Example

    https://github.com/MortalFlesh/jasmine
