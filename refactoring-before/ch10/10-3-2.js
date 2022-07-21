export function adjustedCapital(instrument) {
  const isTrustPerson = (instrument) =>
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0;

  return isTrustPerson(instrument)
    ? (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
    : 0;
}
