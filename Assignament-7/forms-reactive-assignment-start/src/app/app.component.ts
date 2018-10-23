import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  exerciseForm: FormGroup;
  options = ['Stable', 'Critical', 'Finished'];
  forbidden_names = ['Test'];

  ngOnInit() {
    this.exerciseForm = new FormGroup({
      'project_name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl()
    });
    console.log(this.exerciseForm);
  }

  onSubmit() {
    console.log('Project Name: ' + this.exerciseForm.value.project_name);
    console.log('Email: ' + this.exerciseForm.value.email);
    console.log('status: ' + this.exerciseForm.value.status);
    console.log(this.exerciseForm);
  }

  /*forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbidden_names.indexOf(control.value)) {
      return {'forbiddenName': true};
    }
    return null;
  }*/

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbidden_names.indexOf(control.value)) {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
        return null;
      }, 1500);
    });
    return promise;
  }
}
