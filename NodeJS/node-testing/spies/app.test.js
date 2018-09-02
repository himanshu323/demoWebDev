const expect=require("expect");
const rewire=require("rewire");

const app=rewire("./app");

describe("Test the app",()=>{

  let db={
      saveUser:expect.createSpy()
  }
  app.__set__("db",db);
    it("Test saveUser is called with user object",()=>{

        app.handleSignUp("Test","test123")
        expect(db.saveUser).toHaveBeenCalled();
        expect(db.saveUser).toHaveBeenCalledWith({email:"Test",password:"test123"})

    })

    it("test spy is called",()=>{
            let spy=expect.createSpy();
            spy("Test",5);
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith("Test",5)
    })
})