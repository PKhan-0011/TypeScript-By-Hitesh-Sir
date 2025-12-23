// yha p hmm do chize dekh rahe hai like interface and type okkh!..
// to hamm interface use kkarte hai over type okkh!.. bcz interface m implets use kar sakte hai in classes
// isliiye hamm ineterface use karte hai okkh!.

type TeaType = "masala" | "ginger" | "Lemon";

function orderTea(t: TeaType) {
  // Yha p t jo hai usme hame masala and ginger and Lemon type hi ayega code!..
  console.log(t);
}

// ek aur chiz ayega yha p like  comon nikalana okkh!..

type User = {
  userName: string;
};

type User02 = {
  userName01: string;
};

type thirdUser = User & User02; // ye jo hai wo like common jo hoga wo nikalega isme s okkh!..

const newUser: thirdUser = {
  userName: "Pparcej",
  userName01: "ame",
};

// bass ek chiz dhyan rakhio like isme ki hamm interface hi zada use karte hai bcz isme implemts karna easy hota hai okkh!..
// and type m implents use nahi kar pate easily okkh! in classes! okkh!..
