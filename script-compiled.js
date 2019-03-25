'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//Zadanie 1
var string1 = 'ala';
var string2 = 'ma kota';
var string3 = string1 + '  ' + string2;
console.log(string3);

//Zadanie 2
function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

  var wynik = x * y;
  console.log(wynik);
}
multiply(4, 5);

//Zadanie 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }, 0) / args.length;
};
average(1, 3, 5);
console.log(average(1, 3, 8));

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//Zadnie 5
dane = [1, 4, 'Iwona', false, 'Nowak'];

var _dane = dane,
    _dane2 = _slicedToArray(_dane, 5),
    firstname = _dane2[2],
    lastname = _dane2[4];

console.log('Firstname: ' + firstname + ', Lastname: ' + lastname);
