import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CheckboxModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

}
