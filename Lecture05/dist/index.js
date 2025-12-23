"use strict";
// type Narrowing ata hai isme actaully hamm typeof is and instance k bare m padhte hai okkh!..
Object.defineProperty(exports, "__esModule", { value: true });
// typeof ka hamm use type define k liye karte hai okhh!..
// and type narrowing k liye bhi okkh!..
function getChai(kind) {
    // yha p type narrowing ayega okkh!.. like kind m in case length nikl jaye to kaise niklunga
    if (typeof kind === "string") {
        console.log(kind.length);
    }
    else {
        return `${kind}`;
    }
}
console.log(getChai("Mera mittar"));
//# sourceMappingURL=index.js.map