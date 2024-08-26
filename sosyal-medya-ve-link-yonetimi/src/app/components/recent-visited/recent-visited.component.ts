import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../services/api/social-media.service';
import {VisitedLink} from "../../models/visited-link.model";

@Component({
  selector: 'app-recent-visited',
  templateUrl: './recent-visited.component.html',
  styleUrls: ['./recent-visited.component.css']
})
export class RecentVisitedComponent implements OnInit {
  visitedLinks: VisitedLink[] = [];
  constructor(private socialMediaService: SocialMediaService) {}
  ngOnInit(): void {
    this.socialMediaService.visitedLinks$.subscribe(links => {
      this.visitedLinks = links;
    });
  }
}
