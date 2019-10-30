import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntriesService} from "../services/entries.service";

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  private id: number;
  private sub: any;

  public entry;

  constructor(private route: ActivatedRoute,
              private entriesService: EntriesService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.entriesService.getBlogEntryById(this.id).subscribe(data => {
        this.entry = data;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
