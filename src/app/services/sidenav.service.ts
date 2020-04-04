import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav;

  public setSideNav(sideNav: MatSidenav) {
    this.sidenav = sideNav;
  }

  toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle();
  }
}
