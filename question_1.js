const marks=80;
let grade;

if(marks>=90){
    grade='A grade';
}else if (marks>=70 && marks<+90){
    grade= 'B grade';
}else if(marks>=50 && marks<70){
    grade= 'C grade';
}else{
    grade='F grade';
}

console.log('your grade is :'+grade)

// your grade is :B grade 