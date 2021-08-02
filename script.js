console.log(countDuplicates([1, 2, 1, 4, 2, 6, 1,4]));

function countDuplicates(arr) {
  let counter = 0;
  const found = new Set();
  const dupes = new Set();
  for (const item of arr) {
    if (dupes.has(item)) {
      continue;
    }
    if (found.has(item)) {
      dupes.add(item);
      counter++;
    }
    found.add(item);
  }
  return counter;
}