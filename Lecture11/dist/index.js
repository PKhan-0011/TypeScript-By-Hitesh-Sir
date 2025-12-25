"use strict";
// Yha p hame oops ka sikhna hai kuch okkh!
// kabhii classes banyenge uske andar data le liya maine but in case maine constructor nahi liya to fir kuch chize define hi nahi hongi okkh!..
// that the reason hamm constructor banate hai okkh!..
Object.defineProperty(exports, "__esModule", { value: true });
class ChaiType {
    firstChai;
    numberofTea;
}
const u1 = new ChaiType();
u1.firstChai = "Ginger";
u1.numberofTea = 1;
console.log(u1);
//ChaiType { firstChai: 'Ginger', numberofTea: 1 } ye print hoga constructor typp ka baad m okkh! by default constructor ban jayega!..
// abhi mai print karne ki koshish karunga to wo error dega aur undefined dega okkh!..
// is liye hamm isko manully data enter karte hai iisme like u1.firstChai = "" aise aise okh!
// but mannuly karna bhi zada tough padta hai that the raeson hamm constructor leke ate hai okkh!..
// manully dena deta kafi tough padta hai in a objects to hamm isi liye constructor ka use karte hai okkh!..
// jiski wajah s manully data na dena pade okkh!. jha p define hua hai wahi rahe like new User("", "") aise hamm de denge data isme after constructor...
class getChaiType {
    chaiType;
    numberOfTea;
    constructor(chaiType, numberOfTea) {
        this.chaiType = chaiType;
        this.numberOfTea = numberOfTea;
    }
}
// abb mmughe data muanlly nahi dena padega okh! jo object mai banaunga uske andar hi de dnege ye sara data okh!..
const u2 = new getChaiType("adrak", 2);
console.log(u2);
// kuch nahi constructor ka zada kaam nahi hai bass yahi hai ki ye error aur bugs s bacha leta extra kamm nahi karna padta
// and code readable bhi ho jata hai isse okh!..
// readonly propety bhi ati hai in oops kuch aise!..
class getChaiBhai {
    Chai;
    constructor(Chai) {
        this.Chai = Chai;
    }
}
const u4 = new getChaiBhai("cardamom Chai");
console.log(u4);
// accessable modifier ata hai isme hamm private public keyy create karte hai okkh!..
// public key sabke liye hota hai and private kiye with in class k liye hota hai okkh!..
//# sourceMappingURL=index.js.map