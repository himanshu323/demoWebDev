import { TestBed } from "@angular/core/testing";
import { ReversePipe } from "./reverse.pipe";

describe("Test isolated component",()=>{


    it("Test the reverse Pipe",()=>{

        let reversePipe=new ReversePipe();
        expect(reversePipe.transform("Hello")).toEqual("olleH");
    })
})