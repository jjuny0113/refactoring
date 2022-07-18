export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.overdraftCharge(this._daysOverdrawn);
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === "Premium";
  }
  overdraftCharge(_daysOverdrawn) {
    if (!this.isPremium) {
      return _daysOverdrawn * 1.75;
    }

    const baseCharge = 10;
    return _daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (_daysOverdrawn - 7) * 0.85;
  }
}
