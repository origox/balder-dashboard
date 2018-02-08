import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SensorService {

  sensorRef: AngularFireList<any[]>;
  sensor: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.sensorRef = db.list('sensor');
    this.sensor = this.sensorRef.snapshotChanges().map(actions => {
      return actions.map(a => ({ key: a.payload.key, ...a.payload.val() }));
    });
   }

  getsensorList(): Observable<any[]>  {
    return this.sensor;
  }

  // Update an exisiting item
  updateDevice(key: string, value: any): void {
    this.sensorRef.update(key, value);
  }

  /* getTempList():  Observable<any[]> {
    return this.db.list<any[]>('telemetry/GW-ZWAVE-0001').valueChanges();
  } */

}
