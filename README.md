# Bookmark App

With this app you can handle bookmarks.

- list
- save
- delete
- show details

This app has some default bookmarks, which are shown on startup. When reloading the page, the defaults are loaded again.

## How to use

1. Install: `npm install`
2. Run: `ng serve`
3. Open default address in your browser: `http://localhost:4200/`
4. Some basic tests can be run by using: `ng test`

Tested with **Node.js v14.15.0** on Windows 10 Home. Made with
- **Angular v11.2.5**
- **Angular Material**
- **NGRX**.

First version made in March 21st, 2021.

## Bonus features

The site is fully responsive. The list page is using **CSS Grid Layout** with *auto-fill* feature.

## List

Here we can see the bookmarks ordered by group.

![List](doc_img/01_list.png "List")

## Add

The user can add a new bookmark.

![Add](doc_img/02_add.png "Add")

## Details

This page shows the details of the bookmark.

![Details](doc_img/03_details.png "Details")

## Delete

The user can delete a bookmark when clicking on ✕.

![Delete](doc_img/04_delete.png "Delete")
