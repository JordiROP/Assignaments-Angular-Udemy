import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') app_form: NgForm;
  default_dropdown = 'Advanced';

  private component_form = {
    mail: '',
    subs: '',
    pass: ''
  };
  submitted = false;

  onSubmit() {
    this.component_form.mail = this.app_form.value.componentFormGroup.email;
    this.component_form.subs = this.app_form.value.componentFormGroup.subscription;
    this.component_form.pass = this.app_form.value.componentFormGroup.password;
    this.submitted = true;
    this.app_form.reset();
  }

  getMail(){
    return this.component_form.mail;
  }

  getSubscription(){
    return this.component_form.subs;
  }

  getPassword(){
    return this.component_form.pass;
  }
}
