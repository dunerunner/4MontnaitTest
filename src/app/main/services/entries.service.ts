import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private blogEntries = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      image: '/assets/images/entry-pic-1.jpg',
      description: 'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.',
      previousId: null,
      nextId: null,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
      highlight: [
        'consectetuer adipiscing',
        'elit, sed diam nonummy',
        'nibh euismod tincidunt'
      ]
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      image: '/assets/images/entry-pic-2.jpg',
      description: 'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.',
      previousId: null,
      nextId: null,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
      highlight: [
        'consectetuer adipiscing',
        'elit, sed diam nonummy',
        'nibh euismod tincidunt'
      ]
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      image: '/assets/images/entry-pic-3.jpg',
      description: 'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.',
      previousId: null,
      nextId: null,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio'
    },
  ];

  constructor() {
  }

  getBlogEntries() {
    return of(this.blogEntries);
  }

  getBlogEntryById(id: number) {
    const entryIndex = this.blogEntries.findIndex(entry => entry.id === id);
    let previousIndex;
    let nextIndex;
    if (entryIndex > 0) {
      previousIndex = entryIndex - 1;
    }
    if (entryIndex < this.blogEntries.length - 1) {
      nextIndex = entryIndex + 1;
    }
    const entry = this.blogEntries.find(entry => entry.id === id);
    entry.previousId = (previousIndex !== undefined) ? this.blogEntries[previousIndex].id : null;
    entry.nextId = (nextIndex !== undefined) ? this.blogEntries[nextIndex].id : null;
    return of(entry);
  }
}

