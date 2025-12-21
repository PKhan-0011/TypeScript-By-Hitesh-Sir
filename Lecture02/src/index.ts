// is lecture m hamne sikha like ki kaise typescript  iintall kiya jata hai okkh!..
// and  kya -g ka mtlb globally hota hai and is globally ka yhi mtlb hai ki sare project k liiye use hota hai okkh!.

function getValue(name: string | number): string {
  console.log(`Hell0 ${name}`);
  return `Hello! ${name}`; // mughe agar iska type define karna hoga to mai function ka type define karunga okkh!..
}

getValue("Parvej");
getValue(42);

// isko run karna hoga agr to  mughe tsc -b and node ./dist/index.js karna padefa okkh!.

// "dev": "tsc -b && node ./dist/index.js" ye bhi chl sakta hai okkh!..
