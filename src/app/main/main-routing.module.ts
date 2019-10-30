import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from "./blog/blog.component";
import {BlogEntryComponent} from "./blog-entry/blog-entry.component";

const blogRoutes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'entry/:id', component: BlogEntryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
