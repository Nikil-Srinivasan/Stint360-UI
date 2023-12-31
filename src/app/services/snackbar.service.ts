import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar: MatSnackBar) { }

  openSnackBar(message: string, action: string = 'Done') {
    this._snackbar.open(message, action, {
      duration: 8000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
