import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

describe("Test User component",()=>{


  beforeEach((()=>{

    TestBed.configureTestingModule({

      declarations:[UserComponent]
    })
  }))

  it("Test the  user component creation",()=>{
  let fixture=TestBed.createComponent(UserComponent);
  let app=fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
  })

  it("user values matched the value fetched from User service",()=>{

    let fixture=TestBed.createComponent(UserComponent);

    let app=fixture.debugElement.componentInstance;

    let userService=fixture.debugElement.injector.get(UserService);

    fixture.detectChanges();
    expect(app.user['name']).toEqual(userService.user['name']);
  })
  it("Verify Label Title when user is logged in",()=>{

    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    app.isLoggedIn=true;
    let template=fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(template.querySelector('p').textContent).toContain(app.user.name);
  })

  it("Verify Label Title when user is Not logged in",()=>{

    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
   
    let template=fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(template.querySelector('p').textContent).not.toContain(app.user.name);
  })

  it("Shouldn't able to fetch data value if not ran async",()=>{

    let fixture=TestBed.createComponent(UserComponent);

    let app=fixture.debugElement.componentInstance;

    let dataServ=fixture.debugElement.injector.get(DataService);
    spyOn(dataServ,'getDetails').and.returnValue(Promise.resolve('Data'));


   
 
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  })

  it("Should be able to fetch data value if  ran async",async(()=>{

    let fixture=TestBed.createComponent(UserComponent);

    let app=fixture.debugElement.componentInstance;

    let dataServ=fixture.debugElement.injector.get(DataService);
    spyOn(dataServ,'getDetails').and.returnValue(Promise.resolve('Data'));


   
 
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app.data).toBe('Data');
    })
   
  })
)

it("Should be able to fetch data value if  ran async through fake ",fakeAsync(()=>{

  let fixture=TestBed.createComponent(UserComponent);

  let app=fixture.debugElement.componentInstance;

  let dataServ=fixture.debugElement.injector.get(DataService);
  spyOn(dataServ,'getDetails').and.returnValue(Promise.resolve('Data'));


 

  fixture.detectChanges();
  tick();
  
    expect(app.data).toBe('Data');
  
 
})
)


})