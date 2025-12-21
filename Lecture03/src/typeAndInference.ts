// Yha p hmm 2 chize learn karnge like typa and inferece okkh!.

// Inference mai hame actully dataType already mil jata hai okkh!..
// but type m hame khud s dena padta hai okkh!.. dataType!..

let drink = "Chai And Code";
// inference ka generallly mtlb yahi hota hai like ki uska dataType already mil jata hai okkh!.. bina define kiye okkh!..

let cup = Math.random() > 0.5 ? 10 : 5;
// yaha p dekh hamne cup ka dataType define hi nahi kiya wo apne app mil gya okkh!..
//cup = "hi there" ye error dega bcz ye number type ka nahi hai that's why! okkh!...

// Above wala to inference tha and ek niche wala notation hai okkh!.. iska mtlb ye hai like ki hame actully dataType define karna hoga okkh!..

let cup02: string = "5";
cup02 = "hi there";

console.log(cup02);

// do chize ati hai inference and notation okkh!
// inference ka generally mtlb hota hai ki dataType mil jayega apne app okkh!..
// notation iska mtlb ye hai like ki hame dena padega iska type!..
