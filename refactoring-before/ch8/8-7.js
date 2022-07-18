export function reportYoungestAgeAndTotalSalary(people) {
  const youngestAge = () => Math.min(...people.map((p) => p.age));

  const totalSalary = () =>
    people.reduce((total, price) => (total += price.salary), 0);

  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
}
