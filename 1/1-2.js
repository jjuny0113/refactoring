import { invoice, plays } from "./example.js";

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

const USD = (aNumber) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(aNumber / 100);

const totalVolumeCredits = (plays, data) => {
  let result = 0;
  for (let perf of data.performances) {
    result += volumeCreditsFor(plays, perf);
  }
  return result;
};

const totalAmount = (plays, data) => {
  let result = 0;
  for (let perf of data.performances) {
    result += amountFor(plays, perf);
  }
  return result;
};

const renderPlainText = (data, plays) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${playFor(plays, perf).name}: ${USD(amountFor(plays, perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${USD(totalAmount(plays, data))}\n`;
  result += `적립 포인트: ${totalVolumeCredits(plays, data)}\n`;

  return result;
};

const statement = (invoice, plays) => {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances;
  return renderPlainText(statementData, plays);
};

console.log(statement(invoice, plays));
