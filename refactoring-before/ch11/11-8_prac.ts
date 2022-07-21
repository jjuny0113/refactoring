export class Employee {
  private constructor(
    private readonly _name: string,
    private readonly _typeCode: "E" | "M" | "S"
  ) {}

  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer(name: string) {
    return new Employee(name, "E");
  }
  static createSeniorEngineer(name:string){
    return new Employee(name,'S')
  }
}

const employee = Employee.createEngineer('엘리')