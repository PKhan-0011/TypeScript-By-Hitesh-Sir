// yha p dekh as wali ayengi chize like assertion okkh!.. isme hote ye hai like ki chize force fully assert karni hoti hai chize!>.

let response: any = "42";

console.log((response as string).length);

const inputElement: HTMLInputElement = document.getElementById(
  "userName"
) as HTMLInputElement;

// assertion ka generally mtlb hotta yahi hai ki uska type force fully dena okkh!..
//

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

value.toUpperCase();

// yha p any denge to hamm upperCase lowerCase sabhi chizo m change kar sakte hi okkh!..

let value2: unknown; // iska mughe typpe badd m define karna ho padega yahi hota hai unkown m okkh!..
value2 = [1, 2, 3];
value2 = "chaiAurCode";

if (typeof value2 === "string") {
  value2.toUpperCase();
}

// yahi diffrence hai any and unkknow m ki mugeh badd m dataType define karna hi padta hai okkh!..

try {
} catch (e) {
  const error = e as Error;
  console.log(error);
}

let name: unknown = "ramesh";
const data: string = name as string;

// unknown ka matlb ye hota hai like ki mugeh abhi data nahi pta bad m data mughe de dena jab actauly pta chal jaye tab okkh!..
// ek hoga yha p assertion wala okkh as s deonte karte hai iska mtlb hoga like ki kahi bhi type ki need hogi to hamm easily wha p assert krra sakte hai okkh!..

// never means: function kabhi return nahi karega ya code yahan tak kabhi pahunchega hi nahi.

type Role = "admin" | "user";

function getRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirect to admin");
    return;
  }
  if (role === "user") {
    console.log("Redirect to user");
    return;
  }
  return role;
}

// yha p never ayega okkh! iska mtlb ye hoga ki ye kabhi ayega hi nhai okkh!..

function neverReturn(): never {
  while (true) {
    // ye infinte loop walii bat chit hai okkh!..
    // to never ayega yha p okkh!.. iska mtlb yahi hai ki aisa na h to accha hai okkh!..
  }
}

// Hamne yha p 3-4 chize dekhi hai like first one is any, unknown, never and as
// dekh anyy ka yhai mtlb hai ki kuch bhi dataType de do okh! chalega, unknown isme ye hota hai like ki
// abhi k liye use karlo yye type but bad m de dena iska actaully type okkh!..
// never iska mtlb hota hai ki ye ana hi nhai chaiye tha okkh!..
// as ka matlb assertion hota hai ye kahi bhi dataType de sakta hai kisi ka bhi okkh! like as string as numbet etc okkh!>.
