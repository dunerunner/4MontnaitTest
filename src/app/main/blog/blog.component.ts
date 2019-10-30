import {Component, HostListener, OnInit} from '@angular/core';
import {EntriesService} from "../services/entries.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public entriesAsTiles = false;
  public blogEntries = [];
  public hideWelcome = false;
  public fullyHideTitle = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.hideWelcome = window.scrollY > 0;
    if (window.scrollY > 0) {
      this.fullyHideTitle = true;
    } else {
      this.fullyHideTitle = false;
    }
  }

  constructor(private entriesService: EntriesService) {
  }

  ngOnInit() {
    this.entriesService.getBlogEntries().subscribe(data => {
      this.blogEntries = data;
    })
  }

  toggleEntriesView() {
    this.entriesAsTiles = !this.entriesAsTiles;
  }
}
