interface chaiGoods {
  sugar?: number;
  tea: number;
  water: number;
}

class lemonTea implements chaiGoods {
  tea = 4;
  water = 3;
  sugar = 44;
}

// here we are implementing interfaces into the class means
// we are creating a map that the class should follow and the property that the interface is having currently the class should have them too
