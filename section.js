//SECTION

const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Steps', count);
  return out;
};
console.log('Section', section([1, 2, 3, 4, 5, 6, 1], [7, 8, 1, 2, 5]));

const union = (src1, src2) => {
  const out = [];
  for (const element of src1) {
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};

console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
