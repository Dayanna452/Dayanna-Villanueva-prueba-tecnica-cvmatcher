import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltersComponent } from './components/blocks/filters/filters.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cvmatcher-app';
}
