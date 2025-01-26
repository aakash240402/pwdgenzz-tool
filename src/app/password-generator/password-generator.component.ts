import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true, 
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
  imports: [FormsModule], 
})
export class PasswordGeneratorComponent {
  passwordLength: number = 8; // Default length
  includeAlphabets: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  generatedPassword: string = '';

  private alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private specialChars = '!@#$%^&*()_+~';

  generatePassword() {
    let validChars = '';
    if (this.includeAlphabets) {
      validChars += this.alphabets;
    }
    if (this.includeNumbers) {
      validChars += this.numbers;
    }
    if (this.includeSpecialChars) {
      validChars += this.specialChars;
    }

    if (this.passwordLength < 1) {
      this.generatedPassword = 'Please select a valid length.';
      return;
    }
    if (validChars.length > 256) {
      this.generatedPassword = 'Please enter password length to be less than 256.';
      return;
    }
    if (validChars.length === 0) {
      this.generatedPassword = 'Please select options.';
      return;
    }
    this.generatedPassword = Array.from({ length: this.passwordLength })
      .map(() => validChars.charAt(Math.floor(Math.random() * validChars.length)))
      .join('');
  }
}
