const arrayAnalysis = (array) => {
  return {
    average: average(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

const average = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
};

export default arrayAnalysis;
