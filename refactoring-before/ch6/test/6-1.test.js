import { printOwing } from "../6-1-test.js";

class Console {
  #content = "";
  constructor() {}
  log(message) {
    this.#content += `${message}\n`;
  }

  get content() {
    return this.#content;
  }
}

describe("printOwing", () => {
  it("should print owing", () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
    const expected =
      "***********************\n" +
      "**** Customer Owes ****\n" +
      "***********************\n" +
      "name: 엘리\n" +
      "amount: 7\n" +
      "due: 2/20/2022\n";
    const console = new Console();
    const today = "2/20/2022";
    printOwing(invoice, console,today);
    expect(console.content).toBe(expected);
  });
});
