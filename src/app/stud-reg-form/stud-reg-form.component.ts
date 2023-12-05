import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stud-reg-form',
  templateUrl: './stud-reg-form.component.html',
  styleUrls: ['./stud-reg-form.component.css']
})
export class StudRegFormComponent implements OnInit, AfterViewInit {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    middleName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fullName: new FormControl(''),
    dob: new FormControl('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl('', [Validators.required, Validators.minLength(2)]),
    licenseNo: new FormControl(''),
    country: new FormControl('', [Validators.required, Validators.minLength(2)]),
    state: new FormControl(''),
    identityType: new FormControl(''),
    cardNo: new FormControl('')
  })


  constructor() { }


  ngOnInit(): void {
    this.studentForm.controls['firstName'].valueChanges.subscribe((result) => {
      debugger
      this.createFullName();
    })
    this.studentForm.controls['middleName'].valueChanges.subscribe((result) => {
      debugger
      this.createFullName();

    })
    this.studentForm.controls['lastName'].valueChanges.subscribe((result) => {
      debugger
      this.createFullName();
    })
  }

  ngAfterViewInit(): void {
    this.studentForm.controls['dob'].valueChanges.subscribe((result) => {
      debugger;
      const selectDob = new Date(result);
      const dobYear = selectDob.getFullYear();
      const currentYear = new Date().getFullYear();

      const age = currentYear - dobYear;
      this.studentForm.controls['age'].setValue(age)

      if (age > 18) {
        this.studentForm.controls['licenseNo'].setValidators(Validators.required);
      } else {
        this.studentForm.controls['licenseNo'].removeValidators(Validators.required);
      }
    })

    this.studentForm.controls['country'].valueChanges.subscribe((result) => {
      if (result === 'india') {
        this.studentForm.controls['state'].setValidators(Validators.required);
      } else {
        this.studentForm.controls['state'].removeValidators(Validators.required);
      }
    })

    this.studentForm.controls['identityTyp'].valueChanges.subscribe((result) => {
      if (result === 'aadhar card') {
        this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$'));
      } else {
        this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'));
      }
    })
  }

  createFullName() {
    debugger;
    const fullName = this.studentForm.controls['firstName'].value + ' ' + this.studentForm.controls['middleName'].value + ' ' + this.studentForm.controls['lastName'].value;
    debugger;
    this.studentForm.controls['fullName'].setValue(fullName);

    if (this.studentForm.controls['fullName'].value.trim() ! == '') {
      this.studentForm.controls['fullName'].disable();
    } else {
      this.studentForm.controls['fullName'].disable();
    }
  }



}
