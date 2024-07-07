import { Component } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  
  
  constructor() {
     
    

      //  this.loader_time()
  
    
    
  }
  
  
  loader_time() {
    var a = 0;
    setInterval((): any => {
      a = a + Math.floor(Math.random() * 15);
      if (a > 100) {
        a = 100;
        document.querySelector("#loader h1")!.textContent = a + "%";

        return a;
      }
      else {
        document.querySelector("#loader h1")!.textContent = a + "%"
      }
    }, 100);

  }

  ngOnInit(){
  //  const loader = document.querySelector("#loader");
 
  gsap.from("#loader h6", {
    scale: 0.5,
    duration: 0.5,
    // onStart:this.loader_time()
  })
  
  window.onload = ()=>{
    gsap.to("#loader",{
   top:"-100vh",
   duration:0.8,
   delay:0.9,
   })

  // console.log("done")
  
  }

  }

  
 

}
