import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Observable } from 'rxjs/Observable';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {


  devices: Observable<any[]>;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.devices = this.sensorService.getsensorList();
    console.log(`ngonInit - ${this.devices}`);
  }


}
