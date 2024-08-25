//primitive-->call by value
//7 types:String,Number,boolean,null,undefined,Symbol(to make unique),BigInt
const score=100
//JavaScript is a dynamic language and not static, 
//which means that variables can hold values of different types during runtime. 
//Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
//Type Script---->const score:number=100


//Reference Type(Non Premitive)
//Array,Objects,Functions
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//--->give false
const bigNumber=28364872396123986293n//--->last n is added to make big int

const heros=["Shaktiman","naagraj","doga"]//-->arry

//Object
let myObj={
    name:"hitesh",
    age:22
}
const myfunction=function()
{
    console.log("Hello Tathagata");
}
