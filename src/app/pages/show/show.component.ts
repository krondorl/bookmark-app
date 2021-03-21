import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { resultMemoize, Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  parametersObservable: Subscription;
  bookmarks: Observable<Bookmark[]>;
  bookmark: Bookmark;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.parametersObservable = this.route.params.subscribe({
      next: (params: any) => {
        this.bookmarks = this.store.select('bookmarks');
        this.bookmarks.pipe().subscribe((bookmarks: any) => {
          bookmarks.forEach((b, i) => {
            if (b.id == params.id) {
              this.bookmark = b;
            }
          });
        });
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
