import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private route:Router) {

  }

  name = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.email, Validators.required]);
  message = new FormControl("", [Validators.required]);

  contactForm = new FormGroup({
    name:  this.name,
    email: this.email,
    message: this.message,

  })
  
  contactSubmit(){
    emailjs.init("_imHlfkcUh-pbYwFJ");
    emailjs.send("service_zujbucd", "template_xic08e8", {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
     
    });

    alert("Form Submit Successfully");
    this.contactForm.reset();
    this.route.navigate(["/"]);
    
  }


}
