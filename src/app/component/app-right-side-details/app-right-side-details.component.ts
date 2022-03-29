import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profiles';
import { OmnicellService } from 'src/app/service/omnicell-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './app-right-side-details.component.html',
  styleUrls: ['./app-right-side-details.component.scss']
})
export class AppDetailsComponent implements OnInit {

  profile!: Profile;
  constructor(private detailService: OmnicellService) { }

  ngOnInit(): void {
    this.detailService.returnData().subscribe(data => {
      this.profile = data;
    });
    
  }

  increaseLikes(likes:  number){
    this.profile.likes++ ;
  }

}
