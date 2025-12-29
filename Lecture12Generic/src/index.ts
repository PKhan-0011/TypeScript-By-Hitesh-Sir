// Yha p abb generic and interfaces ayenge okkh!...
// interfaces hota hai wo object ka shape deta hai okkh!.. like ki ye isi type ka hona choaye and all thik hai!..

interface Chai {
  flavour: string;
  numberOfCup?: number;
}

const ChaiType: Chai = {
  flavour: "adrak Chai",
  numberOfCup: 2,
};

// kuch chize amm readOnly bna dete hai like jisse hamm update nahi kar sakte okkh!.. chizes
// for an example..

interface Shop {
  readonly id: number;
  shopId?: string;
  name?: string;
}

const shopName: Shop = {
  id: 2,
  shopId: "12090",
  name: "Raju general store",
};

//shopName.id = 5;  // isko update nahi kar sakte okh!. bcz ye readonly hai
shopName.shopId = "1290"; // isse upadte kar sakte hai

// interfaces merge ho jate hai appas m ookkh!..
// same type k interfaces hue to!..

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "",
  age: 12,
};

// to dekh yha p like ki ye merge ho jate hai interfaces okkh!.. agar same type k interfaces hue to okkh!..

// extends bhii hamm apne app s kar sakte hai apne generics okkh!..

// for an example do interfaces banaye hamne and third wala koi chaiye

interface A {
  a: string;
}

interface B {
  b: string;
}

// mughe third wala chaiye jisme actauully ye dono aa jaye to mai extends kar lunga!.//

// mughe agar aisa interface chaiye jisme a and b ka data already exist karte hai to mai inko xtends karke chize le sakta hu okh..
// like below!..

// jaise kahi kahi p hame a m sara data hoga and b m wahi same data chaiye hoga but kuch extenstion k sath like kuch extra chize auur chaiye hongi to mai a ko extends kar dunga b mai okkh!..

interface C extends A, B {}

const Chai: C = {
  a: "",
  b: "",
};

// generic ka structure T lete hai hamm and isko 3 jagah dete hai first one is in functoion and anotger one is fuunction ke andar and jo return hoga wha hi T hi type denge!..
// jisse hmm kisi bhi type ka data le sakte hai okkh!..
// for an example generic ka aise hoga!..

function wrapInArray<T>(value: T): T {
  return value;
}

// yahi matlb hai like T jo hai generic usko hamm 3 jagah denge okkh! first in function another one is in function ki value mai
// and jab return kar rahe honge tab bhi denge okkh! yahi Type T okkh! isme hamm koi bhi dataType de sajte hai

wrapInArray("Parvej");
wrapInArray(12);
wrapInArray({ name: "Parvej", age: 12 });
// generic ka mtlb yahi hota hai like ki hamm koi sa bhi data Type de sakte hai in function
// like string number and object okkkh sabhi chize!..

function wrapInArray02<Parvej>(value: Parvej): Parvej[] {
  return [value];
}

wrapInArray02("masalaBhai");

// ek s zada type bhi generic m pass kar sakta hu mai okh!..

function wrapInAarray03<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

wrapInAarray03("1", "2");
wrapInAarray03(1, 2);
wrapInAarray03(1, {}); // bhut sare dataType return kar sakte hai hamm in generic okkh!..

// generics in interfaces!..

interface Boxes<T> {
  content: T;
}

// generic type jo hota hai wo hamm kuch bhi type de sakte hai whai hota hai ikkh!..

const BoxesType: Boxes<number> = {
  content: 1,
};

// api Promises mai kaise use hota hai generic wo dekh le ek bar!..

interface apiPromise<T> {
  status: string;
  data: T;
}

const res: apiPromise<{ name: string }> = {
  status: "200",
  data: { name: "data fetching" },
};

// ek bar sahi s generic dekh le sahi s okkh!..

// ek function m ayega and ek interfaces k during ayega ye okkh!.
