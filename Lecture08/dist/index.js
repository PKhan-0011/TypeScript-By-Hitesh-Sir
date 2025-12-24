"use strict";
// Yha p objects ayega okkh const s hi lenge okkh!..
Object.defineProperty(exports, "__esModule", { value: true });
const Project = {
    name: "First Project",
    price: 21,
    isEnoughToGetJob: true,
};
console.log(Project.name);
// agar mai koi bhi object banunga and usme tea hoga to wo yahi type lega okkh!.. like isme name hona ho chiaye and price hona chaiye ingredinets hone chaiye okkh!..
const TeaType = {
    name: "gingerTea",
    price: 21,
    ingredients: ["gingerTea", "LemonTea", "malaiTea"],
};
let smallCup = { size: "200ml" };
const bigCup = { size: "300ml", materila: "steel" };
smallCup = bigCup;
let coffee = { brewtype: "200ml", beans: "Arabica" };
let chaiBrew = coffee;
const placeOrder3 = {
    name: "",
    quantity: 12,
};
const placeOrder4 = {
// empty bhi ho sakta hai okkh!..
};
// method bna k bhi kar sakta hu and object bna k bhi partial define kar sakta hu okkh!..
// ye nicche wala method hai okkh!..
const placeOrder = (order) => {
    // means order jo hai wo sara optional ho jayega okkh!..
    console.log(order);
};
placeOrder({
    name: "Ginger chai",
});
placeOrder({
    name: "masala Chai",
    quantity: 12,
});
placeOrder({
// ye empty bhi ho sakta hai okkh!.
});
// abb ye jo hai like ChaiOrder2 wo required ho chuka hai optional nhai hai okh!. ye hona hi hina chaiye!..
const chaiData = {
    name: "Parvej",
    quantity: 1,
};
// yha p empty ka koi chances nahi hai okkh!..
// aur ek bhi miss nahi hona chiaye!..
// method ayega okkh!..
const chaiData2 = (method) => {
    console.log(method);
};
chaiData2({
    name: "Parvej",
    quantity: 1,
});
const chaiInfo = {
    name: "",
    price: 12,
};
// OmitChai m hame sara data milega like name price isHOt ye sab ayega bass ingredient nahi ayega okh..
const OmitChaiType = {
    name: "",
    price: 12,
    isHot: true,
};
// Hmne yha p pick omit partial and reuqired padha and isme hamne like method bhi ho sakta hai aur object bhi aa sakta hai okh!..
//# sourceMappingURL=index.js.map