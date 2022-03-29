import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Profile } from '../models/profiles';

@Injectable({
  providedIn: 'root'
})
export class OmnicellService {

  private url: string = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';

  profile = new Subject <Profile>();
  profileList = new BehaviorSubject<Profile[]>([]);

  constructor(private http: HttpClient) { }
  
  //Fetching data from api
  getProfiles(): Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.url}`);
  }

  //on click receive from app-left-side-data component send to right-side-details component
  receiveData(profile: Profile){
    this.profile.next(profile);
  }

  returnData(): Observable<Profile>{
    return this.profile.asObservable();
  }

  getProfileList(): Observable<Profile[]>{
    return this.profileList.asObservable();
  }

  //receive Data from app-left-side-header component and traverse to left-side-data component
  getProfilesData(profiles: Profile[]){
    this.profileList.next(profiles);
  }
}
