import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//database
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { environment } from '../environments/environment';

// Components
import { NavigationComponent } from './navigation/navigation.component';
import { MobileNavigationComponent } from './navigation/mobile-navigation/mobile-navigation.component';

// material imports
import {MatIconModule} from '@angular/material/icon';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogComponent } from './blog/blog.component';
import { BooksComponent } from './books/books.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EventsComponent } from './events/events.component';
import { ProgramsComponent } from './programs/programs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MobileNavigationComponent,
    ServicesOfferedComponent,
    MainBannerComponent,
    FooterComponent,
    AboutmeComponent,
    BlogComponent,
    BooksComponent,
    ContactmeComponent,
    EventsComponent,
    ProgramsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
