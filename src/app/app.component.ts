import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { PasswordGeneratorComponent } from "./password-generator/password-generator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PasswordGeneratorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
}
