// intersection quite works like and and nor gate in the Typescript

type Chai = { masala: number };
type specialChai = { lemon: number };

type makingChai = Chai & specialChai;
// so here we are taking masala from chai and lemon from specialChai and
// while makingChai both of this are important

type likarChai = {
  sugar?: number; // by defining ? we are saying you can add sugar if you w'd want if no I don't have any problem
  tea: number;
};


