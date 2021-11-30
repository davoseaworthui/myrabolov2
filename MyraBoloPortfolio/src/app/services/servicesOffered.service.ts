import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import ServicesOfferedModel from '../models/servicesOffered.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesOffered {

    private dataService = '/ServicesOffered';

    servicesOfferedRef: AngularFirestoreCollection<ServicesOfferedModel>;

    constructor(private db: AngularFirestore) {
        this.servicesOfferedRef = db.collection(this.dataService, ref => ref.orderBy('hierarchy'));
    }

    getAllService(): AngularFirestoreCollection<ServicesOfferedModel> {
        return this.servicesOfferedRef;
    }
    createService(service: ServicesOfferedModel): any {
        return this.servicesOfferedRef.add({...service});
      }
    
      update(id: string, serviceTitle: any): Promise<void> {
        return this.servicesOfferedRef.doc(id).update(serviceTitle);
      }
    
      delete(id: string): Promise<void> {
        return this.servicesOfferedRef.doc(id).delete();
      }
    
    
}