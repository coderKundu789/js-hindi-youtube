//Singleton-->constractor

//object literals
//Object.create

const mySym=Symbol("Key1")


const JsUser={
    name:"Hitesh",
    age:18,
    [mySym]:"mykey1",//
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);//Main accessing method
console.log(JsUser[mySym]);
console.log(JsUser);

JsUser.email="Hitesh@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email="Hitesh@microsoft.com";
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello This is Tathagata");
}


console.log(JsUser.greeting);
console.log(JsUser.greeting());






