const playFor = (plays, aPerformance) => plays[aPerformance.playId];
const amountFor = (plays, aPerformance) => {
  let result = 0;

  switch (playFor(plays, aPerformance).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 300 * (aPerformance.audience - 20);
      }

      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${playFor(plays, aPerformance).type}`);
  }

  return result;
};

const volumeCreditsFor = (plays, aPerformance) => {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(plays, aPerformance).type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
};

const totalVolumeCredits = (data) =>
  data.performances.reduce((total, p) => total + p.volumeCredits, 0);

const totalAmount = (data) =>
  data.performances.reduce((total, p) => total + p.amount, 0);

const enrichPerformance = (plays, aPerformance) => {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(plays, result);
  result.amount = amountFor(plays, result);
  result.volumeCredits = volumeCreditsFor(plays, result);
  return result;
};

export const createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map((performance) =>
    enrichPerformance(plays, performance)
  );
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;
};
