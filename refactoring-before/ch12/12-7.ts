{
  class Person {
    private constructor(
      private readonly name: string,
      private readonly genderCode: "F" | "M" | "X"
    ) {}

    static create(recode: { name: string; genderCode: "F" | "M" | "X" }) {
      switch (recode.genderCode) {
        case "M":
          return new Person(recode.name, "M");
        case "F":
          return new Person(recode.name, "F");
        default:
          return new Person(recode.name, "X");
      }
    }

    get readName(){
        return this.name
    }

    get gender() {
      return this.genderCode;
    }

    get isMale() {
      return this.gender === "M";
    }
  }

  const loadFromInput = (
    data: {
      name: string;
      genderCode: "F" | "M" | "X";
    }[]
  ) =>
    data.map((record) => {
      switch (record.genderCode) {
        case "M":
          return Person.create(record);
        case "F":
          return Person.create(record);
        default:
          return Person.create(record);
      }
    });
  const people = loadFromInput([
    { name: "엘리", genderCode: "F" },
    { name: "철수", genderCode: "M" },
    { name: "밥", genderCode: "M" },
  ]);

  const numberOfMales = people.filter((v) => v.isMale).length;
}
