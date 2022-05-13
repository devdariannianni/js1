

//  დავალება 1
let  user = {
  firstname: 'giorgi',
  lastname: 'smith',
  age: 25,
 studentstatus: active
};

console.log(user.studentstatus);


//  დავალება 2

let usernames = [ 'gela', 'zviadi', 'ani']
console.log(usernames[0]);
console.log(usernames[1]);
console.log(usernames[2]);


// დავალება 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for ( let x = 0; x < numbers.length; x++){
  if ( numbers [x] > 5)
  console.log(numbers[x]);
}


// დავალება 4

let usser = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}
if (usser.age > 18 && usser.studentstatus == 'active' ) {
  console.log('Hello');
}
else if (usser.name == 'levan') {
  console.log('Hello Giorgi');
}
else if ( ( user.studentstatus == 'active' ) || ( user.age < 25 ) ) {
  console.log( 'hello world' );
}
else {
  console.log( 'eror' );
}


// დავალება 5
let array = [ 'ratermalon', 'pear', 10, 45, 50, 'apple', 'ananas']
for (let x of array){
  if (typeof x == 'string') {
    console.log(x);
  }
}

// დავალება 6

let arrayy = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for( let x of arrayy ){
  for(let y of x){
    if (y > 0 ) {
      console.log(y);
    }
  }
}


// დავალება 7

let arraay = [32, 10, 'hello', null, 'hello2', 50 ]
for (let f = 0; f < arraay.length ; f++){
  if ( typeof arraay [f] == 'number' && arraay[f] % 5 == 0 ){
    console.log(arraay[f]);
  }

}
