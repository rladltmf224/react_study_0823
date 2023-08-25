class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "내 이름은 " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", 내 차는 " + this.model;
  }
}

const mycar = new Model("Yiseul", "Morning");
console.log(mycar.show());
