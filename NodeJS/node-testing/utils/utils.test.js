var utils=require("./utils");
const expect=require("expect");

describe("Testing utils function",()=>{

    describe("#add",()=>{

        it("should add two numbers",()=>{
            let res=utils.addNumbers(8,9);
        
            // if(res !==17){
            //     throw Error(`Expected 17, but got ${res}`)
            // }
        
            expect(res).toBe(17);
            expect(res).toBeA('number');
        })

        it("should async add two numbers",(done)=>{
    
            utils.asyncAdd(5,9,(sum)=>{
                console.log("Hellohhh");
                expect(sum).toBe(16).toBeA('number');
                console.log("Hello")
               // done();
             
            })
        })

    })
   
    describe("#Square",()=>{


        it("should square a number",()=>{
    
            let res=utils.square(7);
        
            // if(res!==49){
            //     throw Error("WTF");
            // }
            expect(res).toEqual(49)
        })

          
    it("should async square two numbers Promise",()=>{
    
        utils.asyncPromiseSquare(9).then((res)=>{
            console.log(res);
            expect(res).toBe(81);
        })
    }
    )
    })
    
    
    
    
    it("should expect some values",()=>{
        //expect({name:'Andrew'}).toBe({name:'Andrew'});
        expect({name:'Andrew'}).toEqual({name:'Andrew'});
      expect([1,2]).toEqual([1,2]);
    
    })
    
    it("verify first and last name",()=>{
       let user={addres:"ABC",age:21}
        utils.setName(user,"Himanshu Arora");
        expect(user).toInclude({
            firstName:"Himanshu",
            lastName:"Arora"
        })
    })
    
   
  

})
