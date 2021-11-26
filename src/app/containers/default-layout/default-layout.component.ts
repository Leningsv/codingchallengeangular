import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  public logout(): void {
    this._authService.user = null;
    this._router.navigate(['/login']).then();
  }
}
