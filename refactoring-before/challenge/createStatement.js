class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  static create(audience, play) {
    switch (play.type) {
      case "tragedy":
        return new Tragedy(audience, play);
      case "comedy":
        return new Comedy(audience, play);
      default:
        return undefined;
    }
  }
}

class Tragedy extends Performance {
  get amount() {
    const BASE = 40000;
    return this.audience > 30 ? BASE + 1000 * (this.audience - 30) : BASE;
  }

  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}

class Comedy extends Performance {
  get amount() {
    const BASE = 30000;
    return this.audience > 20
      ? BASE + 10000 + 500 * (this.audience - 20) + 300 * this.audience
      : BASE + 300 * this.audience;
  }

  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}

export class Statement {
  #customer;
  #performance;
  constructor(invoice, plays) {
    this.#customer = invoice.customer;
    this.#performance = invoice.performances.map((p) =>
      Performance.create(p.audience, plays[p.playID])
    );
  }

  get customer() {
    return this.#customer;
  }

  get performances() {
    return [...this.#performance];
  }

  get totalAmount() {
    return this.#performance.reduce(
      (total, performance) => total + performance.amount,
      0
    );
  }
  get totalCredits() {
    return this.#performance.reduce(
      (total, performance) => total + performance.credits,
      0
    );
  }
}

export const createStatement = (invoice, plays) => {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map((p) =>
    Performance.create(p.audience, plays[p.playID])
  );
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances);

  return statement;

  function totalAmount(performances) {
    return performances.reduce(
      (total, performance) => total + performance.amount,
      0
    );
  }
  function totalCredits(performances) {
    return performances.reduce(
      (total, performance) => total + performance.credits,
      0
    );
  }
};
