const request=require("supertest");
const expect =require("expect");


const app =require("./server").app

describe("Express server testing",()=>{


    it("Testing GET / request",(done)=>{


        request(app).get("/").expect(200).expect("Hello world").end(done);
    })

    it("Testing GET .users",(done)=>{

        request(app).get("/users").expect(200).expect((resp)=>{
                expect(resp.body).toInclude({
                    name:"Himanshu",
                    age:26
                })
        }).end(done)
    })
})