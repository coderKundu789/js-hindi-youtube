//array

const myarray=[0,1,2,3,4,5]
const myHeros=["Shaktiman","nagraj"] 
const myarray2=new Array(1,2,3,4)
console.log(myarray[0]);

//Array methods
//myarray.push(6);
//myarray.push(7);
//myarray.pop()

//myarray.unshift(9)
//myarray.shift()

console.log(myarray.includes(9));
console.log(myarray.indexOf(19));

const newARR=myarray.join()


console.log(myarray);
console.log(newARR);
console.log(typeof newARR);



//Slice,Splice
console.log("A",myarray);
const myn1=myarray.slice(1,3)

console.log(myn1);
console.log("B",myarray);

const myn2 = myarray.splice(1,3);

console.log(myn2);









