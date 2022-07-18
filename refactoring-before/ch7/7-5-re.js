export class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode(){
    return this.#areaCode
  }

  get number(){
    return this.#number
  }

  get toString() {
    return `${this.areaCode} ${this.number}`;
  }
}
