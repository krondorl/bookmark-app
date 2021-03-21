import { Bookmark } from './../models/bookmark.model';
import * as BookmarkActions from './../store/bookmark.actions';

const initialState: Bookmark[] = [
  {
    id: 0,
    name: 'My Github',
    url: 'https://github.com/krondorl/',
    group: 'work'
  },
  {
    id: 1,
    name: 'lichess',
    url: 'https://lichess.org/',
    group: 'leisure'
  },
  {
    id: 2,
    name: 'Adam Burucs personal website',
    url: 'https://burucs.com/',
    group: 'personal'
  },
  {
    id: 3,
    name: 'Bitbucket',
    url: 'https://bitbucket.org/',
    group: 'work'
  }
];

// Helper function for sorting
export function bookmarkCompare(a: Bookmark, b: Bookmark): number {
  if (a.group < b.group) {
    return -1;
  }

  if (a.group > b.group) {
    return 1;
  }

  return 0;
}

export function reducer(state: Bookmark[] = initialState, action: BookmarkActions.Actions): Bookmark[] {
  switch (action.type) {
    case BookmarkActions.ADD_BOOKMARK:
      return [...state, action.payload];
    case BookmarkActions.DELETE_BOOKMARK:
      let newState = state.filter(bookmark => {
        return bookmark.id != action.payload;
      });
      return newState;
    case BookmarkActions.LIST_BOOKMARK:
      return state.sort(bookmarkCompare);
    default:
      return state.sort(bookmarkCompare);
  }
}
