import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})

export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  
  constructor(private router: Router,
    private authenticationService: AuthenticationService, 
    private tripDataService: TripDataService
  ) {}
  
  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);

    console.log(trip.code)

    this.tripDataService.deleteTrip(trip.code)
    .subscribe({
      next: (value: any) => {
        console.log(value);
        this.router.navigate(['']);
        window.location.reload();
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }

  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}