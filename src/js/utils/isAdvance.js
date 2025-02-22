import NUMBERS from '../constants/number.js';

const isAdvance = () => {
  return generateRandomNumber(NUMBERS.ENTIRE_NUMBER) >= NUMBERS.MOVABLE_NUMBER;
};

function generateRandomNumber(maxNumber) {
  return Math.random() * maxNumber;
}

export default isAdvance;
