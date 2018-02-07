import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DevicesService {

  devicesRef: AngularFireList<any[]>;
  devices: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.devicesRef = db.list('sensor');
    this.devices = this.devicesRef.snapshotChanges().map(actions => {
      return actions.map(a => ({ key: a.payload.key, ...a.payload.val() }));
    });
   }

  getDevicesList(): Observable<any[]>  {
    return this.devices;
  }

  // Update an exisiting item
  updateDevice(key: string, value: any): void {
    this.devicesRef.update(key, value);
  }

  getTempList():  Observable<any[]> {
    return this.db.list<any[]>('telemetry/GW-ZWAVE-0001').valueChanges();
  }

}
