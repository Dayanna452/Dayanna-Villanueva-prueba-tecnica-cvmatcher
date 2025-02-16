import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { JOB_FILTER, LOCATION_FILTER } from '../../../../mocks/filters';

@Component({
  selector: 'app-filters',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    AsyncPipe,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {
  jobControl = new FormControl('');
  locationControl = new FormControl('');
  jobs: { id: string; label: string }[] = JOB_FILTER;
  locations: { id: string; label: string }[] = LOCATION_FILTER;
  filteredJobs!: Observable<{ id: string; label: string }[]>;
  filteredLocations!: Observable<{ id: string; label: string }[]>;

  constructor() {}

  ngOnInit() {
    this.filteredLocations = this.locationControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._locationFilter(value || ''))
    );
    this.filteredJobs = this.jobControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._jobFilter(value || ''))
    );
  }

  private _jobFilter(value: string): { id: string; label: string }[] {
    const filterValue = value.toLowerCase();
    return this.jobs.filter((job) =>
      job.label.toLowerCase().includes(filterValue)
    );
  }

  private _locationFilter(value: string): { id: string; label: string }[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter((location) =>
      location.label.toLowerCase().includes(filterValue)
    );
  }
}
