//Zadanie 1
let string1 = 'ala';
let string2 = 'ma kota';
const string3 = `${string1}  ${string2}`;
console.log(string3);

//Zadanie 2
function multiply(x, y = x) {
  const wynik = x*y;
  console.log(wynik);
}
multiply(4, 5);

//Zadanie 3
const average = (...args) => args.reduce( ( a, b ) => a + b, 0 ) / args.length;
average(1, 3, 5);
console.log(average(1, 3, 8));

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadnie 5
dane = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, ,lastname] = dane;
console.log(`Firstname: ${firstname}, Lastname: ${lastname}`);
