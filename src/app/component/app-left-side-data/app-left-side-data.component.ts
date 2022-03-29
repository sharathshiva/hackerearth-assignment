import { Component, OnInit, Output } from '@angular/core';
import { OmnicellService } from '../../service/omnicell-details.service';
import { Profile } from '../../models/profiles';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side-data',
  templateUrl: './app-left-side-data.component.html',
  styleUrls: ['./app-left-side-data.component.scss']
})
export class AppLeftSideDataComponent implements OnInit {

  profiles: Profile[] = [];
  selectedImage! : string;

  @Output() event = new EventEmitter();
  constructor(private detailService: OmnicellService) { }

  ngOnInit(): void {
    this.detailService.getProfileList().subscribe(data=> {
      this.profiles = data;
    });
  }

  increaseLikes(profile: Profile){
    profile.likes++;
  }

  transferData(profile: Profile){
    this.selectedImage = profile.Image;
    this.detailService.receiveData(profile);
  }


}
