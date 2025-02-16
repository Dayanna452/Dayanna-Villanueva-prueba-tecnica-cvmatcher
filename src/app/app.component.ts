import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltersComponent } from './components/blocks/filters/filters.component';
import { EmploymentListComponent } from './components/contents/employment-list/employment-list.component';
import { EmploymentDetailComponent } from './components/contents/employment-detail/employment-detail.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FiltersComponent,
    EmploymentListComponent,
    EmploymentDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cvmatcher-app';
}
