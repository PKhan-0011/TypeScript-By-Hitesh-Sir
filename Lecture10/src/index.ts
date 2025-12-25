const name: string[] = [];
const userName: Array<number> = [1, 2, 3, 4];

// object of an array!..

type Chai = {
  name: string;
  price: number;
};

// isko mai arrray ki tarah le sakta hu like !..

const menu: Chai[] = [
  { name: "Masala Chai", price: 20 },
  { name: "Ginger Chai", price: 25 },
];

// readonly ka generally mtlb ye hota hai like ki agar ek bar aapne define kar diya to kar diyya iske badd
// redefine nahi hoga okkh!..

const cities: readonly string[] = ["Delhi", "gkp"];

// iska mtlb ye hai like ki cities ko hmm update nahi kar sakkte okkh!.. bcz wo readonly ho gya hai okh!..

// ek multiple array hai like!>.

const table: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// Array m generally hamm pehle hi uska dataType define kar dete hai and Array<number> s kar dete hai okkh!..

// But in Tuple hamm Array hi likhte hai but ek box bass uske andar dataType likhte hai okkh!..

let Chai: [string, number];
Chai = ["Masala", 12];

// order matter karega like pehle hamne in case string liya hai to wo string hi rahega okh!. uske bad number ayega okkh!..
//Chai = [20, "Masala"]; // aise nahi kar skate okkh!.. bcz order matter karega!..

let userInfo: [string, number, boolean?];

userInfo = ["Nmae", 12];

// enum
// iska mtlb generally yhi hota hai like ki chize define to kardo but ye restrict ho jata hai okkh!..

enum ObjectType {
  PENDING,
  CANCELED,
  STATUS,
}

let enumType = ObjectType.PENDING;

// agr in case hamne apna isme kuch type de diya hota like 100 aur sometjing to wo aage dedfalt aage ki valye khuud hi le lega okh!..

// foor an example!.

enum ObjectType2 {
  PENDING = 100,
  CANCELED, // to maine isme agar valuue nhai bhi di hai to ye 101 apne app ho jayega okkh!.
  STATUS, // and ye bhi apne app 102 ho jayega okkh!..
}

// ek aur bat hai like agar hmm enum define kar rahe hai like in string to wo string hi rahna chaiye okkh!...
// and agr number m define kar rha hu to wo number m hi sara rhna chaiyye as a good practise okkh!

// for and example.. above wala jo hai wo number hai to sara number ka hi hoga okkh!..

const enum ObjectType3 {
  PENDING = "false",
  CANCELED = 1,
  STATUS = "false",
}

// yha p mai string le rha hu kahi ya fir number le rha hu to ye error dega bzc ye best parctise nahi hai
// in case of enum okkh!..

const size = ObjectType3.CANCELED;

// array ka mtlb itna smjh bass like ki box k bhar koi dataType define karna aur Array<dataType> aise define karne ko hi kahte hai okh!
// tupples m hamm boxes k andar dataType likh rahe hote hai okkh!.. example [string, number, boolean] etc ye sbahi tere tupples honge okh!..
// enum ata hai okkh isme hamm fixed chize kikh rahe hote hai okkh! agar ye hai to hi hoga ye iske alwa kuch nahi hoga yahi ho rha hota hai isme bass okkh!
// and best paractise mani jati hai jab same Type s dataType s bana rahe to enum agar diffrent type ka banoge to wo bad practise mani jayegi ookkh!..

// enum arrays and tuples ata hai okkh!..
