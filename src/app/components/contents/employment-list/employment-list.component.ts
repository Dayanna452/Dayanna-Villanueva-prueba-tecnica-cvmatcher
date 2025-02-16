import { Component } from '@angular/core';
import { EmploymentCardComponent } from '../../blocks/employment-card/employment-card.component';

@Component({
  selector: 'app-employment-list',
  imports: [EmploymentCardComponent],
  templateUrl: './employment-list.component.html',
  styleUrl: './employment-list.component.css',
})
export class EmploymentListComponent {}
