import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  constructor() {}

  markAllAsTouched(form: NgForm): void {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsTouched();
    });
  }
}
