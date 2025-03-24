import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,  // ✅ *ngIf ve diğer temel özellikler için
    FormsModule,   // ✅ [(ngModel)] için gerekli
    ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    TextColorDirective, CardComponent, CardBodyComponent, FormDirective,
    InputGroupComponent, InputGroupTextDirective, IconDirective,
    FormControlDirective, ButtonDirective,
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Kullanıcı adı veya şifre yanlış!';
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
