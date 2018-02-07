import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {


  devices: Observable<any[]>;

  constructor(private deviceService: DevicesService) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevicesList();
  }


}
