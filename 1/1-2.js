import { invoice, plays } from "./example.js";
import { createStatementData } from "./createStatementData.js";

const USD = (aNumber) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(aNumber / 100);

const renderPlainText = (data) => {
    let result = `청구 내역 (고객명: ${data.customer})\n`;
  
    for (let perf of data.performances) {
      result += `${perf.play.name}: ${USD(perf.amount)} (${perf.audience}석)\n`;
    }
  
    result += `총액: ${USD(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}\n`;
  
    return result;
  };

const statement = (invoice, plays) =>
  renderPlainText(createStatementData(invoice, plays));

console.log(statement(invoice, plays));
