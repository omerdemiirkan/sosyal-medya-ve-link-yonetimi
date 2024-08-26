import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {SocialMediaLink} from "../../models/social-media-link.model";
import {VisitedLink} from "../../models/visited-link.model";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private apiUrl = `http://localhost:3000/api/social-media-links`
  private linksSubject = new BehaviorSubject<SocialMediaLink[]>(this.getLinksFromLocalStorage() || []);
  private visitedLinksSubject = new BehaviorSubject<VisitedLink[]>([]);
  links$ = this.linksSubject.asObservable();
  visitedLinks$ = this.visitedLinksSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadLinks();
    this.loadVisitedLinksFromLocalStorage();
  }
  public  loadLinks(): void {
    this.http.get<SocialMediaLink[]>(this.apiUrl).subscribe(
      data => {
        this.linksSubject.next(data);
        this.setLinksToLocalStorage(data);
      },
      error => console.error('Error loading social media links:', error)
    );
  }

  // LocalStorage'dan ziyaret edilen linkleri yükleme fonksiyonu
  private loadVisitedLinksFromLocalStorage(): void {
    const storedLinks = JSON.parse(localStorage.getItem('visitedLinks') || '[]') as VisitedLink[];
    this.visitedLinksSubject.next(storedLinks);
  }

  // LocalStorage'dan sosyal medya linklerini alma fonksiyonu
  private getLinksFromLocalStorage(): SocialMediaLink[] {
    const links = localStorage.getItem('socialMediaLinks');
    return links ? JSON.parse(links) as SocialMediaLink[] : [];
  }

  // LocalStorage'a sosyal medya linklerini kaydetme fonksiyonu
  private setLinksToLocalStorage(links: SocialMediaLink[]): void {
    localStorage.setItem('socialMediaLinks', JSON.stringify(links));
  }
  getLinks(): Observable<SocialMediaLink[]> {
    return this.http.get<SocialMediaLink[]>(this.apiUrl);
  }
  addLink(link: SocialMediaLink): Observable<SocialMediaLink> {
    return this.http.post<SocialMediaLink>(this.apiUrl, link).pipe(
      tap(() => this.loadLinks())
    );
  }
  deleteLink(id: string): Observable<SocialMediaLink> {
    return this.http.delete<SocialMediaLink>(`${this.apiUrl}/${id}`);
  }
  updateLink(link: SocialMediaLink): Observable<SocialMediaLink> {
    if (!link._id) {
      throw new Error('Link ID is missing');
    }
    return this.http.put<SocialMediaLink>(`${this.apiUrl}/${link._id}`, link).pipe(
      tap(() => this.loadLinks())
    );
  }
  recordVisit(link: SocialMediaLink): void {
    const visitedLinks = JSON.parse(localStorage.getItem('visitedLinks') || '[]') as VisitedLink[];
    const newVisitedLink: VisitedLink = {
      ...link,
      visitDate: new Date()
    };
    const updatedLinks = [newVisitedLink, ...visitedLinks.filter((visitedLink: VisitedLink) => visitedLink.id !== link._id)];
    localStorage.setItem('visitedLinks', JSON.stringify(updatedLinks));
    this.visitedLinksSubject.next(updatedLinks);
  }
}
