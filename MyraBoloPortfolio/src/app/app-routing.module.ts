import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogComponent } from './blog/blog.component';
import { BooksComponent } from './books/books.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { EventsComponent } from './events/events.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
  { path: '', component: MainBannerComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'books', component: BooksComponent},
  { path: 'contactme', component: ContactmeComponent},
  { path: 'events', component: EventsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
