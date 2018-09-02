const person={
    name:"Rohit",
    sayHi:()=>{

        console.log(`Hi Hello ${this.name}`)
    }
,
    sayHiAlt(){
        console.log(`Hi ee${this.name}`)
    }
}

person.sayHi();
person.sayHiAlt();