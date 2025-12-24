// Yha p objects ayega okkh const s hi lenge okkh!..

// Yha p like type ya fir interface define kar sakta hu jisne ye sari chize ayengi okkh! ..

interface ProjectType {
  name: string;
  price: number;
  isEnoughToGetJob: boolean;
}

const Project: ProjectType = {
  name: "First Project",
  price: 21,
  isEnoughToGetJob: true,
};

console.log(Project.name);

// abb yha pe yahi smjha rahe hai like koi bhi type hamne diya hai ya interface banaya hai wo usi type ka hoga okkh!..

type Tea = {
  name: string;
  price?: number;
  ingredients?: string[];
};

// agar mai koi bhi object banunga and usme tea hoga to wo yahi type lega okkh!.. like isme name hona ho chiaye and price hona chaiye ingredinets hone chaiye okkh!..

const TeaType: Tea = {
  name: "gingerTea",
  price: 21,
  ingredients: ["gingerTea", "LemonTea", "malaiTea"],
};

// duck typeing!..

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

const bigCup = { size: "300ml", materila: "steel" };

smallCup = bigCup;

// similary!..

type Brew = { brewtype: string };

let coffee = { brewtype: "200ml", beans: "Arabica" };

let chaiBrew: Brew = coffee;

// abb yha p kuch alg type ayega like agar kahi object ka type already define hai to uske andar mai kaise likhunga usko okkh!..

// dekh agar mughe already datatype de rakha hai like Item and address and i just wanted ki mughe third wala type mile usme ye sari property ho to mai
// aise likhunga okkh!..

type Item = { name: string; Price: number };
type Address = { street: string; pinCode: number };

type Order = {
  id: number;
  item: Item[]; // ye array ayega Item ka okkh!.. like multple chize aa sakti hai isme
  address: Address; // ye single items k liye hai okkh!.. array nahi hai!..
};

// agar mughe more than two type of type ya interface chaiye and isme kahi kuch chize like type ka same hoga to wo hamm yahi likh denge like above
// agar array hoga to array ayega Item[] and single item hoga to address ayega Address ookkkh!..

// Yha pe Partial and Required ata hai like Partial m like optional ayega and Required ka mtlb hota hai ye required hoga hi hoga okkh!..

type ChaiOrder = {
  name: string;
  quantity: number;
};

type placeOrder2 = Partial<ChaiOrder>;

const placeOrder3: placeOrder2 = {
  name: "",
  quantity: 12,
};

const placeOrder4: placeOrder2 = {
  // empty bhi ho sakta hai okkh!..
};

// method bna k bhi kar sakta hu and object bna k bhi partial define kar sakta hu okkh!..
// ye nicche wala method hai okkh!..

const placeOrder = (order: Partial<ChaiOrder>) => {
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

// bass yahi dhyan rakhio like ki partial ka mtlb ye hota hai ki sara elemnets optional ho jayenge okkh!..
// and required ka mtlb hoga ki sare elments optional nahi honge okkh!..

// draw back bhi hai iska bcz isme hame empty object bhi milta hai in partila okkh!..
// but reaquired mai empty nahi milta okh!..

// required waal syntax okkh!..

type ChaiOrder2 = {
  name: string;
  quantity: number;
};

// mera yha p method ayega and object ayega okkh!.. in reuiqred kaise likhte hai
// method wala and object ayega!.. kaise likhte hai okkh!.

// object walal!

type RequiredChaiOrder = Required<ChaiOrder2>;
// abb ye jo hai like ChaiOrder2 wo required ho chuka hai optional nhai hai okh!. ye hona hi hina chaiye!..

const chaiData: RequiredChaiOrder = {
  name: "Parvej",
  quantity: 1,
};

// yha p empty ka koi chances nahi hai okkh!..
// aur ek bhi miss nahi hona chiaye!..

// method ayega okkh!..

const chaiData2 = (method: RequiredChaiOrder) => {
  console.log(method);
};

chaiData2({
  name: "Parvej",
  quantity: 1,
});

// isme bhi empty nahi hoga okkh!..

type chaiType = {
  name: string;
  price: number;
  isHot: boolean;
  ingredient: string[];
};

type BasicChai = Pick<chaiType, "name" | "price">;

const chaiInfo: BasicChai = {
  name: "",
  price: 12,
};

// ek omit ayega like iska mtlb hota hai ki ye chor k sab lelo okkh!..
// for an example!...

type chaiType2 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredient: string[];
};

type OmitChai = Omit<chaiType2, "ingredient">;

// OmitChai m hame sara data milega like name price isHOt ye sab ayega bass ingredient nahi ayega okh..

const OmitChaiType: OmitChai = {
  name: "",
  price: 12,
  isHot: true,
};

// Hmne yha p pick omit partial and reuqired padha and isme hamne like method bhi ho sakta hai aur object bhi aa sakta hai okh!..
