import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddBookmark } from '../../store/bookmark.actions';
import { Bookmark } from 'src/app/models/bookmark.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  bookmarks: Observable<Bookmark[]>;
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  url = new FormControl('https://', [Validators.required, Validators.minLength(12)]);
  group = new FormControl('', [Validators.required]);
  loading = false;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.name.value && this.url.value && this.group.value) {
      this.store.dispatch(new AddBookmark({
        id: Math.floor(Math.random()*1000 + 1),
        name: this.name.value,
        url: this.url.value,
        group: this.group.value
      }));

      this.router.navigate(['/list']);
    }
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('minlength') ? 'Minimum length is 4 chars' : '';
  }

  getUrlErrorMessage() {
    if (this.url.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('minlength') ? 'Minimum length is 12 chars' : '';
  }
}
