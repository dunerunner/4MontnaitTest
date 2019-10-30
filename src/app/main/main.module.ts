import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog/blog.component';
import {BlogEntryComponent} from './blog-entry/blog-entry.component';
import {MainRoutingModule} from "./main-routing.module";
import {BlogEntryListItemComponent} from './blog-entry-list-item/blog-entry-list-item.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fas, far, fab);

@NgModule({
  declarations: [
    BlogComponent,
    BlogEntryComponent,
    BlogEntryListItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule
  ]
})
export class MainModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
