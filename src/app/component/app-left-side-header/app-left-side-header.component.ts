import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profiles';
import { OmnicellService } from 'src/app/service/omnicell-details.service';

@Component({
  selector: 'app-left-side-header',
  templateUrl: './app-left-side-header.component.html',
  styleUrls: ['./app-left-side-header.component.scss']
})
export class AppLeftSideHeaderComponent implements OnInit {

  checked = false;
  profiles: Profile[] = [];
  constructor(private detailService: OmnicellService) { }

  ngOnInit(): void {
    this.detailService.getProfiles().subscribe(data => {
      this.profiles = data;
      this.detailService.getProfilesData(this.profiles);
    });
  }

  sortLikes(){
    console.log(this.checked)
    if(this.checked){
      this.profiles.sort((profile1,profile2) => profile1.likes > profile2.likes ? 1 : -1);
      this.detailService.getProfilesData(this.profiles);
    }else{
      this.ngOnInit();
    }
    
  }

}
