// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

// 예제 2
function reportLines(customer) {
  return Object.keys(customer).map((el) => [el, customer[el]])
}

function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}
const customer = {
  name: 'abc',
  location: '전주'
}
console.log(reportLines(customer))