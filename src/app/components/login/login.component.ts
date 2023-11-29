import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.userService.login(this.formLogin.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/main']);
        })
        .catch(error => {
          // Manejar el error aquí
          console.error(error);
  
          // Mostrar un mensaje de error al usuario
          if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            alert('Credenciales incorrectas. Por favor, verifica tu correo electrónico y contraseña.');
          } else {
            alert('Ha ocurrido un error. Por favor, inténtalo nuevamente.');
          }
        });
    } else {
      // Formulario no válido, muestra mensajes de error
      this.markFormGroupTouched(this.formLogin);
    }
  }
  
  

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error));
  }

  // Función para marcar todos los controles del formulario como tocados
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
