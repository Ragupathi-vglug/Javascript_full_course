const tamil=90;
const english=80;
const maths=96;
const science=75;
const social_science=98;
let avg=tamil+english+maths+science+social_science/5;
if (avg>=35){
    console.log("Pass");
    if (avg<=100 && avg>=90){
        console.log("Grade : A");
    }
    else if (avg>=80){
        console.log("Grade : B");
    }
    else if (avg>=70){
        console.log("Grade : C");
    }
    else{
        console.log("Grade : D");
    }
}
else{
    console.log("Fail Grade")
    }