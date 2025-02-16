import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-employment-detail',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './employment-detail.component.html',
  styleUrl: './employment-detail.component.css',
})
export class EmploymentDetailComponent {}
