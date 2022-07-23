export function generateLayoutArray() {
  let start = 0;
  let end = 10;
  let diff = 10;
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    const counting_arr = new Array(100).fill("").map((_, i) => i + 1);
    const element = counting_arr.slice(start, end);
    start = end;
    end = end + diff;
    if (i % 2 === 0) {
      arr.push(element.reverse());
    } else {
      arr.push(element);
    }
  }
  return arr.reverse().flat();
}
