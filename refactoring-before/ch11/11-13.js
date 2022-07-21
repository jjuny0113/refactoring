const values = [];
function getValueForPeriod(periodNumber) {
  // if (periodNumber < 0 || periodNumber >= value.length) {
  //   return 0;
  // }
  // const value = values[periodNumber];
  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
