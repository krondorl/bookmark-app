import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Bookmark } from 'src/app/models/bookmark.model';
import { DeleteBookmark } from '../../store/bookmark.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bookmarks: Observable<Bookmark[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.bookmarks = this.store.select('bookmarks');
    this.bookmarks.pipe().subscribe((data: any) => {
    });
  }

  delete(id: number): void {
    if (id >= 0) {
      this.store.dispatch(new DeleteBookmark(id));
    }
  }
}
