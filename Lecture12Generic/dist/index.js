"use strict";
// Yha p abb generic and interfaces ayenge okkh!...
// interfaces hota hai wo object ka shape deta hai okkh!.. like ki ye isi type ka hona choaye and all thik hai!..
Object.defineProperty(exports, "__esModule", { value: true });
const ChaiType = {
    flavour: "adrak Chai",
    numberOfCup: 2,
};
const shopName = {
    id: 2,
    shopId: "12090",
    name: "Raju general store",
};
//shopName.id = 5;  // isko update nahi kar sakte okh!. bcz ye readonly hai
shopName.shopId = "1290"; // isse upadte kar sakte hai
const u = {
    name: "",
    age: 12,
};
const Chai = {
    a: "",
    b: "",
};
// generic ka structure T lete hai hamm and isko 3 jagah dete hai first one is in functoion and anotger one is fuunction ke andar and jo return hoga wha hi T hi type denge!..
// jisse hmm kisi bhi type ka data le sakte hai okkh!..
// for an example generic ka aise hoga!..
function wrapInArray(value) {
    return value;
}
// yahi matlb hai like T jo hai generic usko hamm 3 jagah denge okkh! first in function another one is in function ki value mai
// and jab return kar rahe honge tab bhi denge okkh! yahi Type T okkh! isme hamm koi bhi dataType de sajte hai
wrapInArray("Parvej");
wrapInArray(12);
wrapInArray({ name: "Parvej", age: 12 });
// generic ka mtlb yahi hota hai like ki hamm koi sa bhi data Type de sakte hai in function
// like string number and object okkkh sabhi chize!..
function wrapInArray02(value) {
    return [value];
}
wrapInArray02("masalaBhai");
// ek s zada type bhi generic m pass kar sakta hu mai okh!..
function wrapInAarray03(a, b) {
    return [a, b];
}
wrapInAarray03("1", "2");
wrapInAarray03(1, 2);
wrapInAarray03(1, {}); // bhut sare dataType return kar sakte hai hamm in generic okkh!..
const BoxesType = {
    content: 1,
};
//# sourceMappingURL=index.js.map