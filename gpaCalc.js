/*
C-:1.75
C:2.00
C+:3.00
B-:3.00
B:3.00
B+:3.50
A-:3.75
A:4.00

AP : Letter + 1.00

*/
function gpa(letter,type){
var num = 4.0
if(letter == "E"){
num = 0.00
}
if(letter == "D-"){
num = .75
}
if(letter == "D"){
num = 1.00
}
if(letter == "D+"){
num = 1.75
}
if(letter == "C-"){
num = 1.75
}
if(letter == "C"){
num = 2.00
}
if(letter == "C+"){
num = 2.75
}
if(letter == "B-"){
num = 3.00
}
if(letter == "B"){
num = 3.00
}
if(letter == "B+"){
num = 3.75
}
if(letter == "A-"){
num = 3.75
}
if(letter == "A"){
num = 4.00
}


if(type == 'AP'){
num = num + 1;
}
return num;
}

currentGPA = ((
//9th S1
 ( gpa("B") + gpa("A") + gpa("B-") + gpa("B+") + gpa("A-") + gpa("A-") )  +
 
//S2
 (  gpa("B+") + gpa("A") + gpa("C+") + gpa("A-") + gpa("A-") + gpa("A") ) + 


//10th
( gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") )+

//S2
 ( gpa("A-") + gpa("A") + gpa("A-") + gpa("A") + gpa("A") + gpa("A") + gpa("A-") ) +



//11th
( gpa("A") + gpa("A") + gpa("A","AP") + gpa("A") + gpa("A") + gpa("A") + gpa("A") ) +

//S2
 (gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") + gpa("A") )+ 



//12th
( gpa("A","AP") + gpa("A","AP") + gpa("A","AP") + gpa("A") + gpa("A") + gpa("A") + gpa("A") )+

//S2
 ( gpa("A","AP") + gpa("A","AP") + gpa("A","AP") + gpa("A") + gpa("A") + gpa("A") + gpa("A") )

 )
 / 54)

parseFloat(currentGPA.toFixed(3));

                                                                                   