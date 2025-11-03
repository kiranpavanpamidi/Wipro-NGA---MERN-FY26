console.log(x);
var x = 1; // value is given here but variable is declared at the top of this page.
console.log(x);
var temp='hi';
function foo(){
    console.log(temp);
    var temp ='bye';
    console.log(temp);
};
foo();