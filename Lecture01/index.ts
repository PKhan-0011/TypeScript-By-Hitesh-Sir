// isme hamne ye learn kiya like ki agar mughe koi return ka type chaiye to mai function ka bhi type dunga okkh!..

// for and example!..

function getValue(name: string | number): string {
  return `Hello! ${name}`;
}

getValue("Parvej");
getValue(42);
// mughe aagr return ka kuch type chaiye to maii function ka type jarror define karunga okkh!..

// above wale function ka generally mtlb ye hai like ki value and name string type ka hoga but return hamesa string hi karega okkh!..
