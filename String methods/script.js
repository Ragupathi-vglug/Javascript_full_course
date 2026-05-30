let first_name="Ragu";
let last_name="pathi";

// Concatenation
let c=first_name+" "+last_name;
console.log(c);

// concat
c=first_name.concat(last_name);
console.log(c);

// Append
c="hi ";
c+=first_name;
console.log(c);

// Escaping
c='She can\'t run';
console.log(c);


// Length
console.log(first_name.length);

// Upper and Lowercase
c=first_name.toUpperCase();
let d=last_name.toLowerCase();
console.log(c);
console.log(d);

// Index of
c=first_name.indexOf("R");
console.log(c);
c=first_name.lastIndexOf("A");
console.log(c);

// CharAt
c=first_name.charAt(1);
console.log(c);
c=first_name.charCodeAt(1);
console.log(c);

// Sub String
let text="1234567890";
console.log(text.substring(0,4));
console.log(text.substring(4));
console.log(text.substring(4,0));

// Slice
console.log(text.slice(1,4));
console.log(text.slice(4,2));
console.log(text.slice(-4));