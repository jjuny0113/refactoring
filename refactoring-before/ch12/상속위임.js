// 상속
// 다중상속이 불가능하다
{
  class Printer {
    print() {
      console.log("기본적인 출력!");
    }
  }

  class RedPrinter extends Printer {
    print() {
      console.log("출력");
    }
  }

  const printers = [new Printer(), new RedPrinter()];

  printers.forEach((printer) => printer.print());
}

//composition

{
  class Printer {
    #printerDelegate;
    constructor(printerDelegate) {
      this.#printerDelegate = printerDelegate;
    }
    print() {
      this.#printerDelegate
        ? this.#printerDelegate.print()
        : console.log("기본적 출력");
    }
  }

  class RedPrinter {
    print() {
      console.log("빨강 출력!");
    }
  }

  class BlackPrinter {
    print() {
      console.log("검은색 출력!");
    }
  }

  const printers = [
    new Printer(),
    new Printer(new RedPrinter()),
    new Printer(new BlackPrinter()),
  ];
}
