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

// we can also set readOnly values also in interfaces

interface makeChai {
  readonly sugar: number;
  water: number;
  tea: "3" | "4" | "5"; // this is also called as literals type
}

class chai implements makeChai {
  sugar = 32;
  water = 33;
  tea: "3" | "4" | "5" = "3";
}
