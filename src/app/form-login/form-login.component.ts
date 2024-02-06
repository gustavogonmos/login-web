import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent {
  hide = true;
  contactForm!: FormGroup;
  user: any[] = [];

  constructor(
    private apiService: ApiService,
    readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onSetValue();
    this.guardarDatos();
  }


  onSetValue(): void {
    this.contactForm.setValue({name: '' , password: ''});
  }

  guardarDatos(): void {
    this.apiService.saveData(this.contactForm.value).subscribe( resp => {
      this.contactForm.reset();
      this.user = this.user.filter(user => resp.id !== user.id);
      this.user.push(resp);
    },
      error => {console.log("este es el error", error)}
      )
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    })
  }


}
