class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  // Mean (Average)
  calculateMean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  // Median
  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  }

  // Mode
  calculateMode() {
    const frequencyMap = new Map();
    this.data.forEach(value => {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    });

    let maxFrequency = 0;
    let modes = [];

    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        modes = [value];
      } else if (frequency === maxFrequency) {
        modes.push(value);
      }
    });

    return modes;
  }

  // Measures of Dispersion

  // Range
  calculateRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  // Variance
  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
    return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
  }

  // Standard Deviation
  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  // Quartiles
  calculateQuartiles() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    const lowerHalf = sortedData.slice(0, mid);
    const upperHalf = sortedData.slice(mid + (sortedData.length % 2 === 0 ? 0 : 1));

    const lowerQuartile = this.calculateMedian(lowerHalf);
    const upperQuartile = this.calculateMedian(upperHalf);

    return { lowerQuartile, upperQuartile };
  }

  // Interquartile Range (IQR)
  calculateInterquartileRange() {
    const { lowerQuartile, upperQuartile } = this.calculateQuartiles();
    return upperQuartile - lowerQuartile;
  }
}

// Example usage:
const data = [5, 8, 2, 10, 8, 5, 3, 9, 7];
const stats = new DescriptiveStatistics(data);

console.log("Mean:", stats.calculateMean());
console.log("Median:", stats.calculateMedian());
console.log("Mode:", stats.calculateMode());
console.log("Range:", stats.calculateRange());
console.log("Variance:", stats.calculateVariance());
console.log("Standard Deviation:", stats.calculateStandardDeviation());
console.log("Lower Quartile:", stats.calculateQuartiles().lowerQuartile);
console.log("Upper Quartile:", stats.calculateQuartiles().upperQuartile);
console.log("Interquartile Range (IQR):", stats.calculateInterquartileRange());
