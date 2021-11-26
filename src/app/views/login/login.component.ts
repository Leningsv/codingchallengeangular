import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private _authService: AuthService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this.initVariables();
  }

  public async login(): Promise<void> {
    if (this.loginForm.invalid) {
      return alert('Por favor ingrese informacion valida');
    }
    try {
      const loginData = this.loginForm.getRawValue();
      const result: User = await this._authService.login(loginData.username, loginData.password).toPromise();
      this._authService.user = result;
      this._router.navigate(['dashboard']).then();
    } catch (e) {
      alert(e.message);
    }

  }

  private initVariables(): void {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
