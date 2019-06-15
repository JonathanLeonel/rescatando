const centralLatitude = -34.71863,
  centralLongitude = -58.370963;

const getRandomLatitude = () => {
  const sign = getRandomArbitrary(0, 1);

  const randomLatitude = getRandomArbitrary(0.02, 0.0921 / 2);

  if (sign < 0.5) {
    return centralLatitude - randomLatitude;
  }

  return centralLatitude + randomLatitude;
};

const getRandomLongitude = () => {
  const sign = getRandomArbitrary(0, 1);

  const randomLongitude = getRandomArbitrary(0.02, 0.0822 / 2);

  if (sign < 0.5) {
    return centralLongitude - randomLongitude;
  }

  return centralLongitude + randomLongitude;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const getRandomLocation = () => {
  return { latitude: getRandomLatitude(), longitude: getRandomLongitude() };
};
