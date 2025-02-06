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
  passwordLength: number = 8;
  includeAlphabets: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  generatedPassword: string = '';

  private alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private specialChars = '!@#$%^&*()_+~';

  generatePassword() {
    let validChars = '';
    let requiredChars: string[] = [];
    let selectedCategories: string[] = [];

    if (this.includeAlphabets) {
      validChars += this.alphabets;
      selectedCategories.push(this.alphabets);
    }
    if (this.includeNumbers) {
      validChars += this.numbers;
      selectedCategories.push(this.numbers);
    }
    if (this.includeSpecialChars) {
      validChars += this.specialChars;
      selectedCategories.push(this.specialChars);
    }

    if (this.passwordLength < 1) {
      this.generatedPassword = 'Please select a valid length.';
      return;
    }
    if (this.passwordLength > 256) {
      this.generatedPassword = 'Please enter a password length less than 256.';
      return;
    }
    if (validChars.length === 0) {
      this.generatedPassword = 'Please select at least one option.';
      return;
    }

    let passwordArray: string[] = [];

    if (this.passwordLength >= selectedCategories.length) {
      // Ensure at least one from each selected category
      for (let category of selectedCategories) {
        requiredChars.push(this.getRandomChar(category));
      }

      while (requiredChars.length < this.passwordLength) {
        requiredChars.push(this.getRandomChar(validChars));
      }
    } else {
      while (passwordArray.length < this.passwordLength) {
        let randomCategory = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
        passwordArray.push(this.getRandomChar(randomCategory));
      }
    }

    this.generatedPassword = (passwordArray.length ? passwordArray : requiredChars)
      .sort(() => Math.random() - 0.5)
      .join('');
  }

  private getRandomChar(charSet: string): string {
    return charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
}
