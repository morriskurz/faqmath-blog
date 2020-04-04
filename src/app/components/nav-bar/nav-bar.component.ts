import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AppUser } from 'src/app/models/appuser';
import { AuthService } from 'src/app/services/auth.service';
import {MatSidenav} from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;

  constructor(private authService: AuthService, 
    private sidenav: SidenavService) {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}

@Component({selector: 'app-nav-bar', template: ''})
export class NavBarComponentStub{
}
