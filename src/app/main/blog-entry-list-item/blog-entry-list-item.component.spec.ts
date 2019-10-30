import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryListItemComponent } from './blog-entry-list-item.component';

describe('BlogEntryListItemComponent', () => {
  let component: BlogEntryListItemComponent;
  let fixture: ComponentFixture<BlogEntryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
