import { Component } from '@angular/core';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-tools',
  imports: [],
  standalone: true,
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
})
export class Tools {
  constructor(private wordService: WordService) {}    
  onFileSelected(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        this.wordService.importWords(file).subscribe(
          (response) => console.log('Success:', response),
          (error) => console.error('Error:', error)
        );
      }
    }
}
