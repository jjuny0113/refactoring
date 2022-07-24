{
  class Printer {
    private printerHeader: PrinterHeader;
    constructor(printerHeader?: PrinterHeader) {
      this.printerHeader = printerHeader
        ? printerHeader
        : new DefaultPrinterHeader();
    }
    print() {
      this.printerHeader.print();
    }
  }

  class DefaultPrinterHeader implements PrinterHeader {
    print(): void {
      console.log("기본적 출력");
    }
  }

  class RedPrinter implements PrinterHeader {
    print() {
      console.log("빨강 출력!");
    }
  }

  class BlackPrinter implements PrinterHeader {
    print() {
      console.log("검은색 출력!");
    }
  }
  interface PrinterHeader {
    print(): void;
  }
}
