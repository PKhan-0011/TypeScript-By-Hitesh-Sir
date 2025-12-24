// function ayega abb yha s okkh!..

function makeChai(type: string, cups?: number): number {
  console.log(`Making ${type} how many u want ${cups}`);
  return 25;
}

makeChai("Masala", 2);

// function m zada kuch nahi hota ladle bass 2-3 chizo ka dhyan rakhna hota hai like function k andar chize rakhni hoti hai ek case m and uska type dena hota hai okkkh!..
// dusara jo hai wo return karne p uska type dena hota hai okkh! like above number de rakha hai kuch okh!..

function getChai(type: string): number | null {
  if (!type) {
    return null;
  }
  return 25;
}

// agar mugeh return nahi karna hoga to mai void type de dunga okkh!..

function getLog(type: string): void {
  console.log("type in logger function", type);
}

// optional bhi mark kar sakte hai like type and defuakt bhi de sakte hai in function okkh!..
// for an exmaple!;;

//ye optional ho gya hai okkh!..

function makeChai02(type?: string): number {
  console.log(`Making ${type}`);
  return 25;
}

// optional nahi abb default wala chaiye okkh!..

function makeChai03(type: string = "masala") {
  // ye default wali bat chit hai okkh!..
}

function getTypes(order: { type: string; order: number }): number {
  return 4;
}

// dekh le yha p kuch 3-4 chhize hi ho rhi hai okkh!..
