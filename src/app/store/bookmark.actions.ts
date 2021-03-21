import { Action } from '@ngrx/store';
import { Bookmark } from './../models/bookmark.model';

export const ADD_BOOKMARK = '[Bookmark] Add Bookmark';
export const DELETE_BOOKMARK = '[Bookmark] Delete Bookmark';
export const SHOW_BOOKMARK = '[Bookmark] Show Bookmark';
export const LIST_BOOKMARK = '[Bookmark] List Bookmarks';

export class AddBookmark implements Action {
  readonly type = ADD_BOOKMARK;

  constructor(public payload: Bookmark) {}
}

export class DeleteBookmark implements Action {
  readonly type = DELETE_BOOKMARK;

  constructor(public payload: number) {}
}

export class ShowBookmark implements Action {
  readonly type = SHOW_BOOKMARK;

  constructor(public payload: number) {}
}

export class ListBookmark implements Action {
  readonly type = LIST_BOOKMARK;

  constructor(public payload: Bookmark[]) {}
}

export type Actions = AddBookmark | DeleteBookmark | ShowBookmark | ListBookmark;

