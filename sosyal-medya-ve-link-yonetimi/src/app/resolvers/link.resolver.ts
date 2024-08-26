import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {SocialMediaService} from "../services/api/social-media.service";

@Injectable({
  providedIn: 'root'
})
export class LinkResolver implements Resolve<any> {
  constructor(private socialMediaService: SocialMediaService) {}

  resolve(): Observable<any> {
    return this.socialMediaService.getLinks();
  }
}
