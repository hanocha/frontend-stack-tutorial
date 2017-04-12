class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `${this.name}: Wah wah!`
  }
}

module.exports = Dog