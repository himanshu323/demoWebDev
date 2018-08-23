import { Component } from '@angular/core';

import { trigger, transition, style, animate, state, keyframes, group } from "@angular/animations"


@Component(

  {
    selector: 'app-root',
    templateUrl: './app.component.html',
  
    animations:[
  trigger('divState',[
  
      state('normal',style({
        
        backgroundColor:"red",transform:"translateX(0)"

  
      })),

      state('highlighted',style({
backgroundColor:"blue",
        transform:"translateX(100px)"

        
      })),
       transition("normal => highlighted",animate(300)),

      transition("highlighted => normal",animate(800))
    ]),
  
  
  trigger("wildState",[
    

  state("normal",style({

    backgroundColor:"red",
    transform:"translateX(0px) scale(1)",

  })),

  state("highlighted",style({


    backgroundColor: "blue",
     transform:"translateX(100px) scale(1)"

  })),

  state("shrink",style({

    'background-color': "green",
    transform:"translateX(0px) scale(0.5)"

  })),
    
transition("normal <=> highlighted",animate(400)),
transition("shrink <=> *",[

  style({
    backgroundColor:"orange"
  }),
  animate(400,style({
  borderRadius:"50px"
})),

animate(300)


]),






  ]),

  trigger("list1",[

    state("in",style({
      transform:"translateX(0)",
      opacity:1
    })),

    transition("void => *",[
      style({
        transform:"translateX(-100px)",
        opacity:0

      }),
      animate(300)
    ]),
    transition("* => void",animate(300,style(

      {
        transform:"translateX(100px)",
        opacity:0
      }
    )))
  ]),

  trigger("list2",[

    state("in",style({
      transform:"translateX(0)",
      opacity:1
    })),
    transition("void => *",[
animate(1000,keyframes([

  style({
    transform: 'translateX(-100px)',
    opacity: 0,
    offset: 0
  }),
  style({
    transform: 'translateX(-50)',
    opacity: 0.5,
    offset: 0.6
  }),
  style({
    transform: 'translateX(-20px)',
    opacity: 1,
    offset: 0.8
  }),
  style({
    transform: 'translateX(0px)',
    opacity: 1,
    offset: 1
  })
]))
    ]),
    transition("* => void",[
      group([
        animate(500,style({
          transform:"translateX(100px)",
          opacity:0
        })),
        animate(300,style({
          color:"red"
        }))
      ])
    ])
  ])
  ]
  }
)
export class AppComponent {

  state="normal";
  wildState="normal"
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.state=='normal'?this.state='highlighted':this.state='normal';
     
  this.wildState=="normal"?this.wildState="highlighted":this.wildState="normal"
    console.log("Stae"+ this.wildState)
    }

    onAnimateStart(event){
      console.log(event);

    }

    onAnimateEnd(event)
    {
    console.log(event);
    }
    onShrink(){

      this.wildState="shrink"
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
}
