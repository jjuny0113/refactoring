{
  class Employee {
    protected constructor(
      private readonly name: string,
      private readonly type: "engineer" | "salesperson" | "manager"
    ) {}


    toString() {
        return `${this.name} (${this.type})`;
      }
    static createEmployee(
      name: string,
      type: "engineer" | "salesperson" | "manager"
    ) {
      switch (type) {
        case "engineer":
          return new Engineer(name, type);
        case "salesperson":
          return new Salesperson(name, type);
        case "manager":
          return new Manager(name, type);
        default:
          throw new Error("음서여");
      }
    }
  }

  class Engineer extends Employee {}

  class Salesperson extends Employee {}

  class Manager extends Employee {}
  Employee.createEmployee("jjun", "engineer");

  
}

