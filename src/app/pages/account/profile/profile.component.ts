import { Component, OnInit } from '@angular/core';
import {Profile} from '../../../model/profile';
import {ProfileService} from '../../../service/http/account/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile=this.profileService.loadProfile();
  }

}
