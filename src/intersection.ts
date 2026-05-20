// Intersection Types: Combine multiple types using the '&' operator
// This means a value must satisfy ALL the conditions of each type

type Chai = { masala: number };
type specialChai = { lemon: number };

type makingChai = Chai & specialChai;
// makingChai must have both 'masala' from Chai AND 'lemon' from specialChai

type likarChai = {
  sugar?: number; // Optional property - sugar can be included or omitted
  tea: number;
};

// Union Types: Use '|' to allow one type OR another (not both required)
type hotWater = Chai | specialChai;
// hotWater can have either 'masala' (from Chai) OR 'lemon' (from specialChai), not both

class water implements likarChai {
  tea = 4;
}
// The 'water' class implements likarChai, so it must include all required properties

