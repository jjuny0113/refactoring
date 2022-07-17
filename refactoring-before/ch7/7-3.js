export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan('normal')
  }
}

class Priorty {
  #value;
  #index;
  constructor(value) {
    if (Priorty.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priorty`);
    }
  }

  get index() {
    return Priorty.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.#index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  static legalValues() {
    //index가 높을 수록 우선순위 높음
    return ["low", "normal", "height", "rush"];
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
