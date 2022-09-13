//singleton
class MyMap {
  private static instance: MyMap;
  map: Map<number, string> = new Map();
  // приватный конструктор не дает сделать инстанс
  private constructor() {}

  clean() {
    this.map = new Map();
  }

  // если инстанса нету то создаем. иначе берем существующий
  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return  MyMap.instance;
  }
}

class Service1 {
  addMap(key:number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value)
  }
}

class Service2 {
  getKeys(key:number) {
    const myMap = MyMap.get();
    console.log(myMap.map.get(key));
    myMap.clean()
    console.log(myMap.map.get(key));
  }
}

new Service1().addMap(1, 'key1')
new Service2().getKeys(1)
