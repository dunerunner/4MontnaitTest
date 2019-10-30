import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-entry-list-item',
  templateUrl: './blog-entry-list-item.component.html',
  styleUrls: ['./blog-entry-list-item.component.scss']
})
export class BlogEntryListItemComponent implements OnInit {
  @Input() entry: any;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }
}
