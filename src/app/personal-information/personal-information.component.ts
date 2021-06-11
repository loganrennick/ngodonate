import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from 'src/models/personal-info';
import { DonateService } from '../services/donate.service';
import { LoginService } from '../services/login.service';
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  public data: any;
  public model: any;
  public pInfoModel = new PersonalInfo();
  public user: any;
  public errorMsg: any;
  public shouldPost: boolean = true;

  constructor(private router: Router, public donateService: DonateService, public infoService: PersonalInformationService, public auth: LoginService) { }

  ngOnInit(): void {
    if (this.auth.isUserLoggedIn()) {
      this.user = this.auth.getUsername();
      console.log(this.user);
      this.infoService.getPersonalInfo(this.user).subscribe(
        (data) => {
          if (data != null) {
            console.log(data);
            this.model = data;
            this.pInfoModel = this.model;
            this.shouldPost = false;
          }
        },
        (error) => {
          this.errorMsg = error;
        }
      )
    }
  }

  cancel() {
    this.router.navigate(['/donation-start/']);
  }

  continue() {
    this.pInfoModel.userID = this.user;
<<<<<<< HEAD
    
=======

>>>>>>> 31d54226929e2eb6369146f5e615d9a2538f0070

    if (this.shouldPost) {
      console.log("should post")
      this.infoService.postPersonalInfo(this.pInfoModel).subscribe(
        (data) => {
          this.data = data;
          this.donateService.storePersonalDetails(this.data._id);
          this.router.navigate(['/gifts/']);
        },
        (error) => {
          this.errorMsg = error;
        }
      )
    }

    else {
      console.log("should not post")

      this.infoService.updatePersonalInfo(this.model._id, this.pInfoModel).subscribe(
        (data) => {
          this.donateService.storePersonalDetails(this.model._id);
          this.data = data;
          this.donateService.storePersonalDetails(this.model._id);
          this.router.navigate(['/gifts/']);
        },
        (error) => {
          this.errorMsg = error;
        }
      )
    }
  }

}
