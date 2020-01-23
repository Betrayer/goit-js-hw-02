"use strict";

const formatString = function(string) {
  const total = string.length;
  if (total > 40) {
    const cut = string.slice(0, 40) + `...`;
    return cut;
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
