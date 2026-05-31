let first_name="Ragu";
let last_name="pathi";

// Concatenation
console.log("\n");
let c=first_name+" "+last_name;
console.log(c);

// concat
console.log("\n");
c=first_name.concat(last_name);
console.log(c);

// Append
console.log("\n");
c="hi ";
c+=first_name;
console.log(c);

// Escaping
console.log("\n");
c='She can\'t run';
console.log(c);


// Length
console.log("\n");
console.log(first_name.length);

// Upper and Lowercase
console.log("\n");
c=first_name.toUpperCase();
let d=last_name.toLowerCase();
console.log(c);
console.log(d);

// Index of
console.log("\n");
c=first_name.indexOf("R");
console.log(c);
c=first_name.lastIndexOf("A");
console.log(c);

// CharAt
console.log("\n");
c=first_name.charAt(1);
console.log(c);
c=first_name.charCodeAt(1);
console.log(c);

// Sub String
console.log("\n");
let text="1234567890";
console.log(text.substring(0,4));
console.log(text.substring(4));
console.log(text.substring(4,0));

// Slice
console.log("\n");
console.log(text.slice(1,4));
console.log(text.slice(4,2));
console.log(text.slice(-4));

// Split
console.log("\n");
let a="Hi i am Ragupathi";
c=a.split(" ");
console.log(c),"\n";

// Replace
console.log("\n");
c=a.replace("Ragupathi","Ragu");
console.log(c);

// Includes
console.log("\n");
a=[1,2,3,43,4];
console.log(a.includes(2));
console.log(a.includes(19));

// Trim
console.log("\n");
text="  Hi ";
c=text;
console.log(c.length);
c=text.trim();
console.log(c.length);

// Pad Start and End
console.log("\n");
c="R";
console.log(c.padStart(5,"#"));
console.log(c.padEnd(5,"@"));

// Long Literal String ("\" or "+")
console.log("\n");
a="Hi iam \
Ragu\
But";
console.log(a);

// String from char code
console.log("\n");
console.log(String.fromCharCode(64,66,66));