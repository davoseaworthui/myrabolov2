import { Component, OnInit } from '@angular/core';
import { ServicesOffered } from '../services/servicesOffered.service';
import ServicesOfferedModel from '../models/servicesOffered.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.css']
})
export class ServicesOfferedComponent implements OnInit {

  services?: ServicesOfferedModel[];
  currentServices?: ServicesOffered;
  currentIndex = -1;
  title = '';

  constructor(private servicesOffered: ServicesOffered) { }

  ngOnInit(): void {
    this.retrieveServices();
  }
  refreshServices(): void {
    this.currentServices = undefined;
    this.currentIndex = -1;
    this.retrieveServices();
  }
  retrieveServices(): void {
    this.servicesOffered.getAllService().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data()})
      )
      )
    ).subscribe(data => { this.services = data; });
    console.log(this.services);
  }

}
