// type Narrowing ata hai isme actaully hamm typeof is and instance k bare m padhte hai okkh!..

// typeof ka hamm use type define k liye karte hai okhh!..
// and type narrowing k liye bhi okkh!..

function getChai(kind: string | number) {
  // yha p type narrowing ayega okkh!.. like kind m in case length nikl jaye to kaise niklunga
  if (typeof kind === "string") {
    console.log(kind.length);
  } else {
    return `${kind}`;
  }
}

getChai("chai de");

function getChai02(val2: string | number) {
  if (typeof val2 === "string") {
    return val2.toUpperCase();
  } else {
    return val2;
  }
}

getChai02("");

// dekh typeof ka mai use wha karunga like jha p mughe actually union mil rha hoga okkh!.
// and usme ye error aa rha hai Property doesn't exist on all types to ek bar ko mughe check karna padega ki ye type typeof m exist karti bhi hai ya nahi okkh!..

// abb yha s classes wali bat chit lagegi okkh!.. and yhi p instance of bhi ayega!..

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  server() {
    return `Serving Cutting chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  // yha m dekh wahi galti aa rhi hai property doesnot exist to mai yha p typeof ka bhi use kar sakta tha okkh!..
  // but  yha p typeof ka use nahi hoga bcz hamne yha p prmitive union nahi liya hai and classes li hai to wo instance of s checking hogi okkh!..
  if (chai instanceof KulhadChai) {
    chai.serve(); // abb yha s server wala jo hoga wo kulhad wala hi server hoga okkh!..
  } else {
    chai.server(); // ye cutting wala hoga okkh!..
  }
}

// in ata hai ye bhi prmitive k liye nahi hota okkh!..
// jo mai khud k type define karunga usme s chize unga wahi hoga ye in ka statement okkh!..

// for an example!:-

type LoggedInUser = {
  userId: string;
  role: string;
};

type LoggedOutUser = {
  userName: string;
  personName: string;
};

// abb mughe uue chaiye like ki kisi bhi ek elemnt p like userId ya fir userName k basis p mai
// chize excess kar lu okkh!.. wo pura type hi nikl lu to wo in k through ho jata hai okh!,.

function getLoggedInUser(person: LoggedInUser | LoggedOutUser) {
  // mai yha p direct wo pperon ka data k through pura type nahi le sakta bcz error dega property does nott exst wali okk!,,
  // to yha p mughe chheck karna padega like in laga k ki exist karta bhi hai ya nahi okkh!..
  if ("userName" in person) {
    console.log("ye loggedOut m ata hai okh!");
  } else {
    console.log("ye loggedIn m ata hai!");
  }
}

// yha p bass 3 chize hai sahi s dhyan rakhio like ki typeof instance of and in okkh! ye teen hi chize ahi
// ye jo hai ye hamesa use honge when union is there okkh! auar agar union primituve type ka hai to wha p typpeof lagega okkh!
// but agar clasess type ka hai to usme mughe instaceof karke usi oobject m chla jayega okkh!..
// in ata hai agla isme hame kisi bhi type k kisi element s uska type excess karna hota hai okkh!..

// bass itna hi dhyan rakhio isme like ki yha p union wali bat chit hoti hi hoti hai uuske bad hi ye hamm sara khel khelte hai okkh!..
// typeof kka and iin ka and instanceof ho gya okh! yahi sab chize ayngi
