//SEPARATE

const separate = (src) => {
  const evens = [];
  const odds = [];
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
  return {
    evens,
    odds
  };
};

const separateByReference = (src, evens, odds) => {
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
};

const evens = [];
const odds = [];
separateByReference([1, 2, 3, 4, 5], evens, odds);
console.log('evens, odds', evens, odds);
