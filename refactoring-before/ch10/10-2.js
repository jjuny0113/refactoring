function disabilityAmount(employee) {
  const isNotEligibleForDisablilty = (employee) =>
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime;
  return isNotEligibleForDisablilty(employee) ? 0 : 1;
}
