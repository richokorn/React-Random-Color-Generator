const floorDecimal = Math.floor(Math.random() * 16777215);

console.log(floorDecimal);

console.log(floorDecimal.toString(16));

// Decimal value of 1048576 = Hex value of 100000
// Decimal value of 1048575 = Hex value of  FFFFF
// This code concatenates a "0" if Decimal is less than equivalent Hex: 100000
console.log(
  `#${
    floorDecimal > 1048575
      ? floorDecimal.toString(16)
      : '0' + floorDecimal.toString(16)
  }`,
);
