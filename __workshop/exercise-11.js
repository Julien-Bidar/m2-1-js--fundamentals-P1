function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
let a = ''
let b = ''
let string = ''
for(j=1; j<9; j++){
  if(a.length % 2 === 1){
    a = `${a}_`;
    b = `${b}#`;
  } else {
    a = `${a}#`;
    b = `${b}_`;
  }
}
for(i=1; i<9; i++){
  if(i % 2 === 1){
    string = `${string}${a}\n`;
  } else {
    string = `${string}${b}\n`;
  }
}
console.log(string);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
