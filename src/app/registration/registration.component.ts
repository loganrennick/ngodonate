import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  public regModel = new RegistrationModel();


  ngOnInit(): void {
  }

  onFormSubmit(RegistrationForm:any)
  {
    console.log(this.regModel);
  }

}
