interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

//decorator to log
function LogChange(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => value;
  const setter = (newVal: any) => {
    console.log(`${propertyKey.toUpperCase()} changed from ${value} → ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Product implements IProduct {
  @LogChange price: number;
  @LogChange stock: number;

  constructor(
    public id: number,
    public name: string,
    public category: string,
    price: number,
    stock: number
  ) {
    this.price = price;
    this.stock = stock;
  }
}

const products: Map<number, Product> = new Map();

products.set(1, new Product(1, "Laptop", "Electronics", 1200, 10));
products.set(2, new Product(2, "T-Shirt", "Fashion", 25, 100));

products.get(1)!.stock = 8;
