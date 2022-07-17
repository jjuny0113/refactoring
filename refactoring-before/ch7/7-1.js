

class Organization {
    #name
    #country
    #data
    constructor(data) {
        this.#data = data
        this.#country = data.country
        this.#name = data.name
    }

    get name() {
        return this.#name
    }

    get country() {
        return this.#country
    }

    set name(value) {
        this.#name = value
    }

    set country(value) {
        this.#country = value
    }

    get rawData() {
        return { name: this.name, country: this.country }
    }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' })

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);