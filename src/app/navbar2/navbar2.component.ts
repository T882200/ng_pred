import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  checkValue(event: any){
    
    // if(event === 'A'){
    //   document.getElementById("maincont").className += " main-container-rtl";  
    // }
    
    if ( document.getElementById("maincont").classList.contains('main-container') ){
        document.getElementById("maincont").classList.toggle('main-container-rtl');
    }
    
    if ( document.getElementById("nav").classList.contains('nav') ){
        document.getElementById("nav").classList.toggle('nav-rtl');
    }

    
    
    console.log(event);
  }

}
