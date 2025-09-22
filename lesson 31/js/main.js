
for( i = 0; i<5; i++){
    console.log(i);
}

console.log('-------------DO WHILE-----------------')

var x = 0;
do{
    x++;
    console.log(x);
} while(x<=4);



console.log('---------------WHILE-----------------')



var j =0;
while(j<5) {
    j=j + 1;
    console.log(j)
}
console.log('--------------WHILE 2----------------')


let n=0;
let m=0;
while(n< 3) {
    n++; //1, 2, 3
    m += n; //1, 3, 6 
    console.log(n);
    console.log(m);
}


console.log('--------------FOR IN----------------')






var person = {
    firstName: "johon" ,
    lastName: "Doe",
    age: 25
};


console.log('--------------FOR OF----------------')


var text = '';
var z;
for(z in person ) {
    text += person [z];
}


console.log(text + '');


var names = ('Steve', 'Bill', 'Mark');
var y;
for(y of names ) {
    console.log(y);
}




var student = ['mil','olisa' ]


for(i=0; i<student.length; i++) {
document.write(students[i] + '<br>');
}











