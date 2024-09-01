let myTimeStamp=Date.now()
console.log(myTimeStamp);
//console.log(myTimeStamp.getTime());
//console.log((Date));
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay);

//s{newDate.getDay}

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''

})






