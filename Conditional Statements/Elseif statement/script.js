let mark=prompt("Enter the Number :");
mark=Number(mark);
if (mark<100 && mark>=90){
    console.log("Grade : A");
}
else if(mark>=80){
    console.log("Grade : B");
}
else if(mark>=70){
    console.log("Grade : C");
}
else{
    console.log("Grade : D");
}