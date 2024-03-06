export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }

    let quotient = numerator / denominator;
    return quotient;
  } catch(error) {
    throw error;
  }
}
