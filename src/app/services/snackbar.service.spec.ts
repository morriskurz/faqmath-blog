import { TestBed, async } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const snackBarSpy = jasmine.createSpyObj("MatSnackBar", ["open"]);
let snackBar: MatSnackBar;

describe('SnackbarService', async() => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      {provide: MatSnackBar, useValue: snackBarSpy},
    ]
  }),
  snackBar = TestBed.get("MatSnackBar"),
  );

  it('should be created', async() => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });

  it('should call SnackbarService once', () => {
    
  }
  )
});
